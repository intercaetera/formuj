import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import TestInput from '../components/input.component';

import { renderForm, changeField, Labels, formik } from './helpers';

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

	await changeField(screen.getByLabelText('Predicate'), THEN);

	expect(screen.queryByText(THEN)).toBeInTheDocument();
	expect(screen.queryByText(OTHERWISE)).not.toBeInTheDocument();
	expect(screen.queryByText(NEVER)).not.toBeInTheDocument();
});

test('readOnly fields do not appear in the resulting form submit object', async () => {
	const mockSubmit = jest.fn();
	const VISIBLE = 'Visible';
	const INVISIBLE = 'Invisible';

	const expected = {
		visible: 'visible',
	};
	
	const schema = [
		{
			name: 'visible',
			label: VISIBLE,
			component: TestInput,
		},
		{
			name: 'invisible',
			label: INVISIBLE,
			component: TestInput,
			readOnly: true,
			valueGetter: () => 'Invisible',
		},
	];

	render(renderForm(schema, mockSubmit));

	await changeField(screen.getByLabelText(VISIBLE), expected.visible);

	await waitFor(() => {
		fireEvent.click(screen.getByText(Labels.SUBMIT));
	});

	expect(mockSubmit).toHaveBeenCalledWith(expected, formik);
});
