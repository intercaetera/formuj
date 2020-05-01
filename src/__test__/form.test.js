import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';

import { schema, renderForm } from './helpers';

test('renders a basic form', () => {
	const mockSubmit = () => {};
	render(renderForm(schema, mockSubmit));

	expect(screen.queryByText('First Name')).toBeInTheDocument();
	expect(screen.queryByText('Last Name')).toBeInTheDocument();
});

test('when the form is filled in with correct data, it returns an object of values', async () => {
	const mockSubmit = jest.fn();
	const values = { firstName: 'Anna', lastName: 'Komnene' };

	render(renderForm(schema, mockSubmit));

	await waitFor(() => {
		fireEvent.change(screen.getByLabelText('First Name'), {
			target: { value: values.firstName },
		});
	});

	await waitFor(() => {
		fireEvent.change(screen.getByLabelText('Last Name'), {
			target: { value: values.lastName },
		});
	});

	await waitFor(() => {
		fireEvent.click(screen.getByText('Submit'));
	});

	expect(mockSubmit).toHaveBeenCalledWith(values, expect.any(Object));
});

test('when the form is missing data, it is not submitted and displays the errors', async () => {
	const mockSubmit = jest.fn();
	
	render(renderForm(schema, mockSubmit));

	await waitFor(() => {
		fireEvent.click(screen.getByText('Submit'));
	});

	expect(screen.getByText('Required!')).toBeInTheDocument();
	expect(mockSubmit).not.toHaveBeenCalled();
});
