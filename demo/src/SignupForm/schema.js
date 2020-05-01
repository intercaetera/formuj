import InputFormik from './InputFormik';

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
];

export default schema;
