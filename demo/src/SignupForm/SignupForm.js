import React, { useState } from 'react';
import { Button, Card, CardDeck, CardHeader, CardBody } from 'shards-react';

import { Form, FormikProvider } from '../../../src';

import schema from './schema';
import { capitals } from './helpers';

const SignupForm = () => {
	const [form, setForm] = useState('{}');

	const handleSubmit = values => {
		setForm(JSON.stringify(values, null, 2));
	};

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
		<div>
			<CardDeck>
				<Card>
					<CardHeader>Signup Form</CardHeader>
					<CardBody>
						<FormikProvider 
							schema={schema}
							onSubmit={handleSubmit}
							validationContext={{ capitals }}
							render={renderForm}
						/>
					</CardBody>
				</Card>
				<Card>
					<CardHeader>Result</CardHeader>
					<CardBody><pre style={{ fontSize: '1.5rem', lineHeight: '2rem' }}>{form}</pre></CardBody>
				</Card>
			</CardDeck>
		</div>
	);
};

export default SignupForm;
