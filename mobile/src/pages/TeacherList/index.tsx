import React, { useState } from 'react';
import styles from './styles';
import { View, ScrollView, Text, TextInput } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {
	const [isFilterVisible, setIsFilterVisible] = useState(true);
	const [favorites, setFavorites] = useState<number[]>([]);
	const [teachers, setTeachers] = useState([]);
	const [subject, setSubject] = useState('');
	const [week_day, setWeekDay] = useState('');
	const [time, setTime] = useState('');

	function loadFavorites() {
		AsyncStorage.getItem('favorites').then((res) => {
			if (res) {
				const favoriteTeachers = JSON.parse(res);
				const favoriteTeachersIds = favoriteTeachers.map((teacher: Teacher) => teacher.id);

				setFavorites(favoriteTeachersIds);
			}
		});
	}

	useFocusEffect(() => {
		React.useCallback(() => {
			loadFavorites();
		}, []);
	});

	function handleToggleFiltersVisible() {
		setIsFilterVisible(!isFilterVisible);
	}

	async function handleFiltersSubmit() {
		loadFavorites();
		const res = await api.get('classes', {
			params: {
				week_day,
				subject,
				time,
			},
		});
		setIsFilterVisible(false);
		setTeachers(res.data);
	}

	return (
		<View style={styles.container}>
			<PageHeader
				title='Proffys disponíveis'
				after={
					<BorderlessButton onPress={handleToggleFiltersVisible}>
						<Feather name='filter' size={20} color='#fff' />
					</BorderlessButton>
				}
			>
				{isFilterVisible && (
					<View style={styles.searchForm}>
						<Text style={styles.label}>Matéria</Text>
						<TextInput
							placeholderTextColor='#c1bccc'
							style={styles.input}
							placeholder='Qual a matéria?'
							value={subject}
							onChangeText={(text) => {
								setSubject(text);
							}}
						/>

						<View style={styles.inputGroup}>
							<View style={styles.inputBlock}>
								<Text style={styles.label}>Dia da semana</Text>
								<TextInput
									placeholderTextColor='#c1bccc'
									style={styles.input}
									placeholder='Qual o dia?'
									value={week_day}
									onChangeText={(text) => {
										setWeekDay(text);
									}}
								/>
							</View>
							<View style={styles.inputBlock}>
								<Text style={styles.label}>Horário</Text>
								<TextInput
									placeholderTextColor='#c1bccc'
									style={styles.input}
									placeholder='Qual horário?'
									value={time}
									onChangeText={(text) => {
										setTime(text);
									}}
								/>
							</View>
						</View>
						<RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
							<Text style={styles.submitButtonText}>Fitrar</Text>
						</RectButton>
					</View>
				)}
			</PageHeader>
			<ScrollView
				style={styles.teacherList}
				contentContainerStyle={{
					paddingBottom: 16,
					paddingHorizontal: 16,
				}}
			>
				{teachers.map((teacher: Teacher) => (
					<TeacherItem
						key={teacher.id}
						teacher={teacher}
						isFavorite={favorites.includes(teacher.id)}
					/>
				))}
			</ScrollView>
		</View>
	);
}

export default TeacherList;
