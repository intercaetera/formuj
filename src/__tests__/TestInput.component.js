// istanbul ignore file
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { FormikPropTypes } from '../propTypes';

const TestInput = ({
	name,
	label,
	value,
	error,
	touched,
	formik,
}) => {
	const handleChange = useCallback(event => {
		const { value } = event.target;
		formik.setFieldValue(name, value);
	}, [formik, name]);

	const handleBlur = useCallback(() => {
		formik.setFieldTouched(name, true);
	}, [formik, name]);

	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input
				id={name}
				onChange={handleChange}
				onBlur={handleBlur}
				value={value}
			/>
			{ touched && error && <div>{error}</div> }
		</div>
	);
};

TestInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	error: PropTypes.string,
	touched: PropTypes.bool,
	formik: FormikPropTypes,
};

export default TestInput;
