import React from 'react';

import { getIn } from 'formik';

import { FormikPropTypes, SchemaPropTypes } from './propTypes';

export const Form = ({ formik, schema }) => {
	const inputs = schema.map(field => {
		return React.createElement(field.component, {
			formik,
			label: field.label,
			name: field.name,
			value: getIn(formik.values, field.name),
			error: getIn(formik.errors, field.name),
			touched: getIn(formik.touched, field.name),
			key: field.name,
			...field.additionalProps,
		});
	}); 

	return (
		<form>{inputs}</form>
	);
};

Form.propTypes = {
	formik: FormikPropTypes,
	schema: SchemaPropTypes,
};
