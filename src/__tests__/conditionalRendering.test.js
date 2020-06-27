import { render, waitFor, fireEvent, screen } from '@testing-library/react';

import TestInput from '../components/input.component';

import { renderForm } from './helpers';

test('conditionally applies schema attributes (when/then/otherwise)', async () => {
	const mockSubmit = () => {};
	const THEN = 'then';
	const OTHERWISE = 'otherwise';
	const NEVER = 'never';

	const schema = [
		{
			name: 'predicate',
			label: 'Predicate',
			component: TestInput,
		},
		{
			name: 'result',
			label: NEVER,
			component: TestInput,
			conditions: [{
				when: ({ formik }) => formik.values.predicate === THEN,
				then: { label: THEN },
				otherwise: { label: OTHERWISE },
			}],
		},
	];

	render(renderForm(schema, mockSubmit));

	expect(screen.queryByText(THEN)).not.toBeInTheDocument();
	expect(screen.queryByText(OTHERWISE)).toBeInTheDocument();
	expect(screen.queryByText(NEVER)).not.toBeInTheDocument();

	await waitFor(() => {
		fireEvent.change(screen.getByLabelText('Predicate'), {
			target: { value: THEN },
		});
	});

	expect(screen.queryByText(THEN)).toBeInTheDocument();
	expect(screen.queryByText(OTHERWISE)).not.toBeInTheDocument();
	expect(screen.queryByText(NEVER)).not.toBeInTheDocument();
});
