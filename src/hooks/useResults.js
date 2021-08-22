import React, { useState, useEffect } from 'react';
import { showMessage } from 'react-native-flash-message';

import yelp from '../api/yelp';

const useResults = () => {
	const [results, setResults] = useState([]);

	const searchApi = async (keyword) => {
		try {
			const res = await yelp.get('/search', {
				params: { term: keyword, location: 'CA', limit: 50 },
			});
			setResults(res.data.businesses);
		} catch (error) {
			showMessage({
				message: 'Something went wrong!',
				type: 'danger',
			});
		}
	};

	useEffect(() => {
		searchApi('pasta');
	}, []);

	return [searchApi, results];
};

export default useResults;
