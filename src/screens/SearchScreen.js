import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import ResultsList from '../components/ResultsList';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [searchApi, results] = useResults();

	const filterResultsByPrice = (price) => {
		return results.filter((result) => result.price === price);
	};

	return (
		<>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<ResultsList
					title='Cost Effective'
					results={filterResultsByPrice('$')}
				/>
				<ResultsList title='Bit Pricer' results={filterResultsByPrice('$$')} />
				<ResultsList
					title='Big Spender'
					results={filterResultsByPrice('$$$')}
				/>
			</ScrollView>

			<FlashMessage position='bottom' />
		</>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
