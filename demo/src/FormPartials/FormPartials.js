import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody, Collapse, Button } from 'shards-react';

import { Form, useFormuj } from '../../../src';
import withResults from '../withResults';
import schema, { personalInfoSchema, carInfoSchema } from './schema';

const FormPartials = ({ handleSubmit }) => {
	const formik = useFormuj({
		schema,
		onSubmit: handleSubmit,
	});

	const [isPersonalInfoOpen, setPersonalInfoOpen] = useState(false);
	const [isCarInfoOpen, setCarInfoOpen] = useState(false);

	const handleTogglePersonalInfo = () => setPersonalInfoOpen(!isPersonalInfoOpen);
	const handleToggleCarInfo = () => setCarInfoOpen(!isCarInfoOpen);

	const handleClick = event => {
		event.preventDefault();
		formik.submitForm();
	};

	return (
		<>
			<Card>
				<CardHeader>
					<Button onClick={handleTogglePersonalInfo}>Toggle</Button>
					<span style={{ paddingLeft: '1rem' }}>Who are you?</span>
				</CardHeader>

				<Collapse open={isPersonalInfoOpen}>
					<CardBody>
						<Form formik={formik} schema={personalInfoSchema} />
					</CardBody>
				</Collapse>
			</Card>

			<Card>
				<CardHeader>
					<Button onClick={handleToggleCarInfo}>Toggle</Button>
					<span style={{ paddingLeft: '1rem' }}>What do you drive?</span>
				</CardHeader>

				<Collapse open={isCarInfoOpen}>
					<CardBody>
						<Form formik={formik} schema={carInfoSchema} />
					</CardBody>
				</Collapse>
			</Card>

			<Button theme="primary" onClick={handleClick}>Submit</Button>
		</>
	);
};

FormPartials.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
};

export default withResults(FormPartials);
