import React from 'react';

import Formuj from '../../src/formuj.component';
import InputFormik from './SignupForm/InputFormik';
import required from './validators/required';

const handleSubmit = values => console.log(values);

const SomethingElse = () => {
	return (
		<div>
			<Formuj
				schema={[
					{
						name: 'firstName',
						label: 'First Name',
						component: InputFormik,
					},
					{
						name: 'lastName',
						label: 'Last Name',
						component: InputFormik,
						validators: [required],
					},
				]}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};

export default SomethingElse;
