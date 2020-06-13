import React from 'react';
import PropTypes from 'prop-types';

import Form from './form.component';
import FormikProvider from './formikProvider.component';

import { SchemaPropTypes, FormikPropTypes } from './propTypes';

// TODO: Move the submit button to schema.
const renderForm = ({ formik, schema, formContext }) => {
	return (
		<>
			<Form
				formik={formik}
				schema={schema}
				formContext={formContext}
			/>

			<button
				className="formuj-submit"
				type="submit"
				onClick={formik.handleSubmit}
			>
				Submit
			</button>
		</>
	);
}; 

renderForm.propTypes = {
	formik: FormikPropTypes,
	schema: SchemaPropTypes,
	formContext: PropTypes.object,
};

export const Formuj = ({
	schema,
	onSubmit,
	validationContext,
	formContext,
}) => {
	return (
		<FormikProvider
			schema={schema}
			onSubmit={onSubmit}
			validationContext={validationContext}
			formContext={formContext}
			render={renderForm}
		/>
	);
};

Formuj.propTypes = {
	schema: SchemaPropTypes.isRequired,
	onSubmit: PropTypes.func.isRequired,
	validationContext: PropTypes.any,
	formContext: PropTypes.object,
};

export default Formuj;
