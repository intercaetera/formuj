import React from 'react';

import { getIn } from 'formik';

import chainValidators from './utils/chainValidators';

import { FormikPropTypes, SchemaPropTypes } from './propTypes';

export const Form = ({ formik, schema }) => {
	const inputs = schema.map(field => {
		const validate = chainValidators(field.validators);

		return React.createElement(field.component, {
			formik,
			validate,
			label: field.label,
			name: field.name,
			value: getIn(formik.values, field.name),
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
