// istanbul ignore file
import React from 'react';

import { Form, FormikProvider } from '..';

import TestInput from '../components/input.component';
import TestSelect from '../components/select.component';

const required = value => value === '' ? 'Required!' : undefined;

export const Labels = {
	FIRST_NAME: 'First Name',
	LAST_NAME: 'Last Name',
	SELECT_FROM_SCHEMA: 'Select From Schema',
	SELECT_FROM_CONTEXT: 'Select From Context',
	SUBMIT: 'Submit',
};

export const schema = [
	{
		name: 'firstName',
		label: Labels.FIRST_NAME,
		value: '',
		component: TestInput,
		validators: [required],
	},
	{
		name: 'lastName',
		label: Labels.LAST_NAME,
		value: '',
		component: TestInput,
		validators: [],
	},
];

export const schemaWithNoValues = schema.map(
	({ value, validators, ...element }) => element,
);

export const selectWithOptionsSchema = [
	{
		name: 'selectFromSchema',
		label: Labels.SELECT_FROM_SCHEMA,
		value: '',
		component: TestSelect,
		options: [
			{ label: 'Test', value: 'test' },
		],
		validators: [],
	},
];

export const selectWithOptionsKeySchema = [
	{
		name: 'selectFromContext',
		label: Labels.SELECT_FROM_CONTEXT,
		value: '',
		component: TestSelect,
		optionsKey: 'options',
		validators: [],
	},
];

export const renderForm = (schema, handleSubmit, formContext) => (
	<FormikProvider
		schema={schema}
		onSubmit={handleSubmit}
		render={({ formik, schema }) => (
			<>
				<Form formik={formik} schema={schema} formContext={formContext} />
				<button type="submit" onClick={formik.submitForm}>{Labels.SUBMIT}</button>
			</>
		)}
	/>
);
