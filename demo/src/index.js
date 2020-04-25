import React, {Component} from 'react';
import {render} from 'react-dom';

import { Form, FormikProvider, Input } from '../../src';

const schema = [
	{
		name: 'potato',
		label: 'Name',
		component: Input,
		value: 'test',
	},
];

export default class Demo extends Component {
	render() {
		return <div>
			<FormikProvider
				schema={schema}
				onSubmit={console.log}
				render={({ formik, schema }) => {
					return (
						<div>
							<Form formik={formik} schema={schema} />
							<button onClick={formik.handleSubmit}>
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
