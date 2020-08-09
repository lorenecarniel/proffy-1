import db from '../database/connection';
import { Response, Request } from 'express';

export default class UsersController {
	async create(req: Request, res: Response) {
		const { name, lastName, email, password } = req.body;

		const trx = await db.transaction();

		try {
			const user = await trx('users').insert({
				name,
				lastName,
				email,
				password,
			});
			await trx.commit();
			return res.status(201).json(`user_id: ${user}`);
		} catch (error) {
			await trx.rollback();
		}
	}
	async updateUser(req: Request, res: Response) {
		const user_id = req.params.id;
		const data = req.body;

		await db('users').select('users.*').where('id', '=', user_id).update(data);
		res.status(201).send('update successful');
	}
}
