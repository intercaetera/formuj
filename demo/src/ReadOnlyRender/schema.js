import InputFormik from '../InputFormik';

const schema = [
	{
		name: 'visible',
		label: 'Visible',
		component: InputFormik,
	},
	{
		name: 'visibleCapitals',
		label: 'VISIBLE',
		component: InputFormik,
		readOnly: true,
		valueGetter: ({ formik }) => formik.values.visible.toUpperCase(),
		additionalProps: { disabled: true },
	},
];

export default schema;
