import React, { useState, useEffect } from 'react';
import { Button, Card, CardDeck, CardHeader, CardBody } from 'shards-react';

import { Form, FormikProvider } from '../../../src';

import schema from './schema';
import {fetchGhibliMovies} from './helpers';

const SignupForm = () => {
	const [form, setForm] = useState('{}');
	const [ghibliMovies, setGhibliMovies] = useState([]);

	useEffect(() => {
		(async () => {
			setGhibliMovies(await fetchGhibliMovies());
		})();
	}, []);

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
				<Form formik={formik} schema={schema} formContext={{ ghibliMovies }} />
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
							render={renderForm}
						/>
					</CardBody>
				</Card>
				<Card>
					<CardHeader>Result</CardHeader>
					<CardBody><pre>{form}</pre></CardBody>
				</Card>
			</CardDeck>
		</div>
	);
};

export default SignupForm;
