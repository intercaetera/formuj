import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'shards-react';

import { Form, FormikProvider } from '../../../src';
import withResults from '../withResults';
import schema from './schema';

const ReadOnlyForm = ({ handleSubmit }) => {
	const renderForm = ({ formik, schema }) => {
		const handleClick = event => {
			event.preventDefault();
			formik.submitForm();
		};

		return (
			<>
				<Form formik={formik} schema={schema} />
				<Button theme="primary" onClick={handleClick}>Submit</Button>
			</>
		);
	};

	return (
		<FormikProvider 
			schema={schema}
			onSubmit={handleSubmit}
			render={renderForm}
		/>
	);
};

ReadOnlyForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
};

export default withResults(ReadOnlyForm);
