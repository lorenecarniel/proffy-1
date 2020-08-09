import db from '../database/connection';
import { Request, Response } from 'express';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
	week_day: number;
	from: string;
	to: string;
}

export default class ClassesController {
	async index(req: Request, res: Response) {
		const filters = req.query;

		const week_day = filters.week_day;
		const time = filters.time as string;
		const subject = filters.subject as string;

		try {
			if (!filters.week_day || !filters.subject || !filters.time) {
				const data = await db('classes')
					.select(['classes.*', 'class_schedule.*', 'users.*'])
					.join('class_schedule', 'class_schedule.class_id', '=', 'classes.id')
					.join('users', 'users.id', '=', 'classes.user_id');
				return res.json(data);
			}
			const timeInMinutes = convertHourToMinutes(time);

			const classes = await db('classes')
				.whereExists(function () {
					this.select('class_schedule.*')
						.from('class_schedule')
						.whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
						.whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
						.whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
						.whereRaw('`class_schedule`.`to` > ??', [timeInMinutes]);
				})
				.select(['classes.*', 'users.*'])
				.where('classes.subject', '=', subject)
				.join('users', 'classes.user_id', '=', 'users.id');
			return res.json(classes);
		} catch (error) {
			return res.status(400).json({
				error: 'Wrong data',
			});
		}
	}

	// criar classes, professores e horários
	async create(req: Request, res: Response) {
		const { subject, cost, schedule } = req.body;

		const trx = await db.transaction();
		try {
			// const insertedUsersIds = await trx('users').insert({
			// 	name,
			// 	avatar,
			// 	whatsapp,
			// 	bio,
			// });

			// const user_id = insertedUsersIds[0];

			// const insertedClassesIds = await trx('classes').insert({
			// 	subject,
			// 	cost,
			// 	user_id,
			// });

			// const class_id = insertedClassesIds[0];

			// const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
			// 	return {
			// 		class_id,
			// 		week_day: scheduleItem.week_day,
			// 		from: convertHourToMinutes(scheduleItem.from),
			// 		to: convertHourToMinutes(scheduleItem.to),
			// 	};
			// });

			// await trx('class_schedule').insert(classSchedule);
			await trx.commit();

			return res.status(201).send();
		} catch (error) {
			await trx.rollback();

			return res.status(400).json({
				error: 'Unexpected error while creating new class',
			});
		}
	}
}
