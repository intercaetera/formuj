import InputFormik from '../InputFormik';
import SelectFormik from '../SelectFormik';

export const personalInfoSchema = [
	{
		name: 'firstName',
		label: 'First Name',
		component: InputFormik,
	},
	{
		name: 'lastName',
		label: 'Last Name',
		component: InputFormik,
	},
];

export const carInfoSchema = [
	{
		name: 'carMake',
		label: 'Make',
		component: InputFormik,
	},
	{
		name: 'carModel',
		label: 'Model',
		component: InputFormik,
	},
	{
		name: 'carColor',
		label: 'Color',
		options: [
			{ value: 'red', label: 'Red' },
			{ value: 'black', label: 'Black' },
			{ value: 'silver', label: 'Silver' },
			{ value: 'green', label: 'Green' },
			{ value: 'other', label: 'Other' },
		],
		component: SelectFormik,
	},
];

export default [ ...personalInfoSchema, ...carInfoSchema ];
