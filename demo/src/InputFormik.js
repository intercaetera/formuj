import React, {useCallback} from 'react';
import PropTypes from 'prop-types';

import {FormGroup, FormInput} from 'shards-react';

import { FormikPropTypes } from '../../src';

const InputFormik = ({ 
	name,
	label,
	value,
	error,
	touched,
	formik,
	readOnly = false,
	...rest
}) => {
	const handleChange = useCallback(event => {
		const { value } = event.target;
		readOnly || formik.setFieldValue(name, value);
	}, [formik, name, readOnly]);

	const handleBlur = useCallback(() => {
		readOnly || formik.setFieldTouched(name, true);
	}, [formik, name, readOnly]);

	const isError = touched && !!error;
	const isValid = touched && !error;

	return (
		<FormGroup>
			<label htmlFor={name}>{label}</label>
			<FormInput 
				id={name}
				onChange={handleChange}
				onBlur={handleBlur}
				value={value}
				valid={isValid}
				invalid={isError}
				{...rest}
			/>
			{ isError && <div className="invalid-feedback">{error}</div> }
		</FormGroup>
	);
};

InputFormik.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	readOnly: PropTypes.bool,
	error: PropTypes.string,
	touched: PropTypes.bool,
	formik: FormikPropTypes,
};

export default InputFormik;
