import SelectFormik from '../SelectFormik';

import required from '../validators/required';

const alcohols = [
	{ value: 'gin', label: 'Gin' },
	{ value: 'brandy', label: 'Brandy' },
	{ value: 'vodka', label: 'Vodka' },
];

const nonAlcohols = [
	{ value: 'orangeJuice', label: 'Orange Juice' },
	{ value: 'water', label: 'Water' },
	{ value: 'tea', label: 'Tea' },
];

const schema = [
	{
		name: 'isOver18',
		label: 'Are you over 18?',
		component: SelectFormik,
		validators: [required],
		options: [
			{ value: 'true', label: 'Yes' },
			{ value: 'false', label: 'No' },
		],
	},
	{
		name: 'beverage',
		label: 'Beverage',
		component: SelectFormik,
		validators: [required],
		options: [],
		conditions: [
			{
				when: ({ formik: { values: { isOver18 }}}) => isOver18 === 'true',
				then: { options: [ ...alcohols, ...nonAlcohols ] },
				otherwise: { options: nonAlcohols },
			},
		],
	},
];

export default schema;
