import React from 'react';
import PropTypes from 'prop-types';

import { getIn } from 'formik';

import { FormikPropTypes, SchemaPropTypes } from './propTypes';

export const Form = ({
	formik,
	schema: rawSchema,
	formContext,
}) => {
	const schema = rawSchema.map(field => {
		return !field.conditions ? field
			: field.conditions.reduce((options, condition) => {
				if(condition.when({ formik, formContext }))
					return { ...field, ...condition.then };
				else
					return { ...field, ...condition.otherwise };
			}, field);
	});

	const inputs = schema.map(field => {
		const optionsFromKey = field.optionsKey ? formContext[field.optionsKey] : [];
		const optionsFromField = field.options;

		const options = optionsFromField || optionsFromKey || undefined;

		return React.createElement(field.component, {
			formik,
			label: field.label,
			name: field.name,
			options,
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
	formik: FormikPropTypes.isRequired,
	schema: SchemaPropTypes.isRequired,
	formContext: PropTypes.object,
};

Form.defaultProps = {
	formContext: {},
};

export default Form;
