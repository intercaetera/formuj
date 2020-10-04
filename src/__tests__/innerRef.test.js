/* eslint-disable react/prop-types */
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import TestInput from '../components/input.component';
import FormikProvider from '../formikProvider.component';
import Form from '../form.component';
import { Labels, formik } from './helpers';

const schema = [
	{
		name: 'input',
		label: 'Input',
		value: 'before',
		component: TestInput,
	},
];

const TestForm = ({ onSubmit, innerRef }) => (
	<FormikProvider
		schema={schema}
		onSubmit={onSubmit}
		innerRef={innerRef}
		render={({ formik, schema }) => (
			<>
				<Form formik={formik} schema={schema} />
				<button type="submit" onClick={formik.submitForm}>{Labels.SUBMIT}</button>
			</>
		)}
	/>
);

const RefHandler = ({ innerRef }) => { 
	const handleClick = () => {
		innerRef.current.formik.setFieldValue('input', 'after');
	};

	return (
		<button onClick={handleClick}>{Labels.HANDLE_REF}</button>
	);
};

test('exports formik via an inner ref which can be used outside of the form', async () => {
	const mockSubmit = jest.fn();
	const ref = React.createRef();

	const initialValues = { input: 'before' };
	const valuesAfterUpdate = { input: 'after' };

	render(
		<div>
			<TestForm onSubmit={mockSubmit} innerRef={ref} />
			<RefHandler innerRef={ref} />
		</div>,
	);

	await waitFor(() => {
		fireEvent.click(screen.getByText(Labels.SUBMIT));
	});

	expect(mockSubmit).toHaveBeenCalledWith(initialValues, formik);

	await waitFor(() => {
		fireEvent.click(screen.getByText(Labels.HANDLE_REF));
	});

	await waitFor(() => {
		fireEvent.click(screen.getByText(Labels.SUBMIT));
	});

	expect(mockSubmit).toHaveBeenCalledWith(valuesAfterUpdate, formik);
});
