import InputFormik from '../InputFormik';
import SelectFormik from '../SelectFormik';

import required from '../validators/required';
import minLength from '../validators/minLength';
import sameAs from '../validators/sameAs';

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
		name: 'confirmPassword',
		label: 'Confirm Password',
		value: '',
		component: InputFormik,
		validators: [sameAs('password'), required],
		additionalProps: { type: 'password' },
	},
	{
		name: 'country',
		label: 'Country',
		value: '',
		component: SelectFormik,
		validators: [required],
		options: [
			{ label: 'Poland', value: 'pl' },
			{ label: 'Greece', value: 'el' },
			{ label: 'Cyprus', value: 'cy' },
		],
	},
];

export default schema;
