import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'shards-react';

import { useFormuj, Form } from '../../../src';

import withResults from '../withResults';

import schema from './schema';

const SignupForm = ({
	handleSubmit,
}) => {
	const formik = useFormuj({
		schema,
		onSubmit: handleSubmit,
	});

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

SignupForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
};

export default withResults(SignupForm);
