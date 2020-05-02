import InputFormik from './InputFormik';
import SelectFormik from './SelectFormik';

import required from '../validators/required';
import minLength from '../validators/minLength';

const schema = [
	{
		name: 'username',
		label: 'Username',
		value: '',
		component: InputFormik,
		validators: [required],
	},
	{
		name: 'password',
		label: 'Password',
		value: '',
		component: InputFormik,
		validators: [required, minLength(6)],
		additionalProps: { type: 'password' },
	},
	{
		name: 'country',
		label: 'Country',
		value: 'el',
		component: SelectFormik,
		validators: [required],
		options: [
			{ label: 'Poland', value: 'pl' },
			{ label: 'Greece', value: 'el' },
			{ label: 'Cyprus', value: 'cy' },
		],
	},
	{
		name: 'movie',
		label: 'Favourite Studio Ghibli Movie',
		value: '',
		component: SelectFormik,
		optionsKey: 'ghibliMovies',
		validators: [],
	},
];

export default schema;
