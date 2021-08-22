import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';

import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
	const [result, setResult] = useState(null);
	const id = navigation.getParam('id');

	const getResult = async (id) => {
		const res = await yelp.get(`/${id}`);
		setResult(res.data);
	};

	useEffect(() => {
		getResult(id);
	}, [id]);

	if (!result) return null;
	return (
		<View style={styles.container}>
			<FlatList
				data={result.photos}
				keyExtractor={(p) => p}
				renderItem={({ item }) => {
					return <Image source={{ uri: item }} style={styles.image} />;
				}}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	image: {
		width: 250,
		height: 120,
		borderRadius: 4,
		margin: 20,
	},
});
