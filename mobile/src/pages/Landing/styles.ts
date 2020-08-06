import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 40,
		justifyContent: 'center',
		backgroundColor: '#9257E5',
	},
	banner: {
		width: '100%',
		resizeMode: 'contain',
	},
	title: {
		fontFamily: 'Poppins_400Regular',
		color: '#FFF',
		fontSize: 20,
		lineHeight: 30,
		marginTop: 80,
	},
	titleBold: {
		fontFamily: 'Poppins_600SemiBold',
	},
});

export default styles;
