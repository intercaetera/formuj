import { render, fireEvent, screen, waitFor } from '@testing-library/react';

import { 
	schema,
	schemaWithNoValues,
	selectWithOptionsSchema,
	selectWithOptionsKeySchema,
	renderForm,
	formik,
	Labels,
} from './helpers';

test('renders a basic form', () => {
	const mockSubmit = () => {};
	render(renderForm(schema, mockSubmit));

	expect(screen.queryByText('First Name')).toBeInTheDocument();
	expect(screen.queryByText('Last Name')).toBeInTheDocument();
});

test('if value is not provided, defaults to empty string', async () => {
	const mockSubmit = jest.fn();
	const values = { firstName: '', lastName: '' };

	render(renderForm(schemaWithNoValues, mockSubmit));

	await waitFor(() => {
		fireEvent.click(screen.getByText(Labels.SUBMIT));
	});

	expect(mockSubmit).toHaveBeenCalledWith(values, formik);
});

test('when the form is filled in with correct data, it returns an object of values', async () => {
	const mockSubmit = jest.fn();
	const values = { firstName: 'Anna', lastName: 'Komnene' };

	render(renderForm(schema, mockSubmit));

	await waitFor(() => {
		fireEvent.change(screen.getByLabelText(Labels.FIRST_NAME), {
			target: { value: values.firstName },
		});
	});

	await waitFor(() => {
		fireEvent.change(screen.getByLabelText(Labels.LAST_NAME), {
			target: { value: values.lastName },
		});
	});

	await waitFor(() => {
		fireEvent.click(screen.getByText(Labels.SUBMIT));
	});

	expect(mockSubmit).toHaveBeenCalledWith(values, formik);
});

test('when the form is missing data, it is not submitted and displays the errors', async () => {
	const mockSubmit = jest.fn();
	
	render(renderForm(schema, mockSubmit));

	await waitFor(() => {
		fireEvent.click(screen.getByText(Labels.SUBMIT));
	});

	expect(screen.getByText('Required!')).toBeInTheDocument();
	expect(mockSubmit).not.toHaveBeenCalled();
});

test('handles selects from schema options properly', async () => {
	const mockSubmit = jest.fn();

	render(renderForm(selectWithOptionsSchema, mockSubmit));

	await waitFor(() => {
		fireEvent.change(screen.getByLabelText(Labels.SELECT_FROM_SCHEMA), {
			target: { value: 'test' },
		});
	});

	await waitFor(() => {
		fireEvent.click(screen.getByText(Labels.SUBMIT));
	});

	expect(mockSubmit).toHaveBeenCalledWith({ selectFromSchema: 'test' }, formik);
});

test('when using a select with options key from form context, it submits the selected values', async () => {
	const mockSubmit = jest.fn();
	const formContext = {
		options: [
			{label: 'Test', value: 'test' },
		],
	};

	render(renderForm(selectWithOptionsKeySchema, mockSubmit, formContext));

	await waitFor(() => {
		fireEvent.change(screen.getByLabelText(Labels.SELECT_FROM_CONTEXT), {
			target: { value: 'test' },
		});
	});

	await waitFor(() => {
		fireEvent.click(screen.getByText(Labels.SUBMIT));
	});

	expect(mockSubmit).toHaveBeenCalledWith({ selectFromContext: 'test' }, formik);

});
