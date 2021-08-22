import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer M-dK7HYnk-aHNMa1uE0vHwLNzZJsdbpkCHGr8njuwEPSxywYXjBTH4uygHChv4CS1hElRCnetYa2nkOJ2o5ZTBObYi2ykmnRPLhXEUlC_93wPfAumIF5lX3qpS9vW3Yx',
	},
});
