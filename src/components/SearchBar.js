import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name='search' style={styles.iconStyle} />
			<TextInput
				placeholder='Search'
				style={styles.inputStyle}
				onChangeText={onTermChange}
				value={term}
				autoCorrect={false}
				autoCapitalize='none'
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

export default SearchBar;

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: '#f0eeee',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		marginBottom: 10,
		flexDirection: 'row',
		marginTop: 15,
	},
	inputStyle: {
		flex: 1,
		fontSize: 18,
	},
	iconStyle: {
		fontSize: 30,
		color: 'black',
		alignSelf: 'center',
		marginHorizontal: 15,
	},
});
