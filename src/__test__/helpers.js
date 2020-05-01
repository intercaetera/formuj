import React from 'react';

import { Form, FormikProvider } from '..';

import TestInput from './TestInput.component';

const required = value => value === '' ? 'Required!' : undefined;

export const schema = [
	{
		name: 'firstName',
		label: 'First Name',
		value: '',
		component: TestInput,
		validators: [required],
	},
	{
		name: 'lastName',
		label: 'Last Name',
		value: '',
		component: TestInput,
		validators: [],
	},
];

export const renderForm = (schema, handleSubmit) => (
	<FormikProvider
		schema={schema}
		onSubmit={handleSubmit}
		render={({ formik, schema }) => (
			<>
				<Form formik={formik} schema={schema} />
				<button type="submit" onClick={formik.submitForm}>Submit</button>
			</>
		)}
	/>
);
