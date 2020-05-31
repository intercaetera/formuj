import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';

import Input from '../components/input.component';
import Formuj from '../formuj.component';

import { Labels } from './helpers';

const formik = expect.any(Object);

test('renders a form that accepts inputs and can be submitted (readme demo test)', async () => {
	const mockSubmit = jest.fn();
	const schema = [
		{ name: 'firstName', label: Labels.FIRST_NAME, component: Input },
		{ name: 'lastName', label: Labels.LAST_NAME, component: Input },
	];
	const values = { firstName: 'Anna', lastName: '' };
	
	render(
		<Formuj
			schema={schema}
			onSubmit={mockSubmit}
		/>,
	);

	await waitFor(() => {
		fireEvent.change(screen.getByLabelText(Labels.FIRST_NAME), {
			target: { value: values.firstName },
		});
	});

	await waitFor(() => {
		fireEvent.click(screen.getByText(Labels.SUBMIT));
	});

	expect(mockSubmit).toHaveBeenCalledWith(values, formik);
});
