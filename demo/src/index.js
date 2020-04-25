import React, {Component} from 'react';
import {render} from 'react-dom';

import { Form, FormikProvider, Input } from '../../src';
import required from './validators/required';

const schema = [
	{
		name: 'potato',
		label: 'Name',
		component: Input,
		value: 'test',
		validators: [required],
	},
];

const handleSubmit = (values, formik) => {
	console.warn(values);
};

export default class Demo extends Component {
	render() {
		return <div>
			<FormikProvider
				schema={schema}
				onSubmit={handleSubmit}
				render={({ formik, schema }) => {
					return (
						<div>
							<Form formik={formik} schema={schema} />
							<button onClick={formik.handleSubmit} type="submit">
                Submit
							</button>
						</div>
					);
				}}
			/>
		</div>;
	}
}

render(<Demo/>, document.querySelector('#demo'));
