import { View, Image, Text } from 'react-native';
import styles from './styles';

function TeacherItem() {
	return (
		<View style={styles.container}>
			<View style={styles.profile}>
				<Image style={styles.avatar} source={{ uri: 'https://github.com/jvzaniolo.png' }} />
				<View style={styles.profileInfo}>
					<Text style={styles.name}>João Vitor</Text>
					<Text style={styles.subject}></Text>
				</View>
			</View>
		</View>
	);
}

export default TeacherItem;
