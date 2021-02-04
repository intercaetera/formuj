import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { FormikPropTypes } from '../propTypes';

export const Input = ({
	name,
	label,
	value,
	error,
	touched,
	formik,
	readOnly,
	...additionalProps
}) => {
	const handleChange = useCallback(event => {
		const { value } = event.target;
		readOnly || formik.setFieldValue(name, value);
	}, [formik, name, readOnly]);

	const handleBlur = useCallback(() => {
		readOnly || formik.setFieldTouched(name, true);
	}, [formik, name, readOnly]);

	return (
		<div className="formuj-control">
			<label className="formuj-label" htmlFor={name}>{label}</label>
			<input
				className="formuj-input"
				id={name}
				onChange={handleChange}
				onBlur={handleBlur}
				value={value}
				{...additionalProps}
			/>
			{ touched && error && <div className="formuj-error">{error}</div> }
		</div>
	);
};

Input.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	readOnly: PropTypes.bool,
	error: PropTypes.string,
	touched: PropTypes.bool,
	formik: FormikPropTypes,
};

export default Input;
