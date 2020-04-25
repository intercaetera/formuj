import React from 'react';
import PropTypes from 'prop-types';

import { getIn } from 'formik';

export const Form = ({ formik, schema }) => {
	const inputs = schema.map(field => {
		return React.createElement(field.component, {
			formik,
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
