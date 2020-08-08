import React, { useState } from 'react';
import styles from './styles';
import { View, ScrollView, Text, TextInput } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

function TeacherList() {
	const [isFilterVisible, setIsFilterVisible] = useState(true);

	function handleToggleFiltersVisible() {
		setIsFilterVisible(!isFilterVisible);
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
						/>

						<View style={styles.inputGroup}>
							<View style={styles.inputBlock}>
								<Text style={styles.label}>Dia da semana</Text>
								<TextInput
									placeholderTextColor='#c1bccc'
									style={styles.input}
									placeholder='Qual o dia?'
								/>
							</View>
							<View style={styles.inputBlock}>
								<Text style={styles.label}>Horário</Text>
								<TextInput
									placeholderTextColor='#c1bccc'
									style={styles.input}
									placeholder='Qual horário?'
								/>
							</View>
						</View>
						<RectButton style={styles.submitButton}>
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
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
			</ScrollView>
		</View>
	);
}

export default TeacherList;
