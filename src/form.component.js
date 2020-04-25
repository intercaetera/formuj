import React from 'react';
import PropTypes from 'prop-types';

import { getIn } from 'formik';

import chainValidators from './utils/chainValidators';

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
