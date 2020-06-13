import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FormSelect, FormGroup } from 'shards-react';
import { FormikPropTypes, OptionPropTypes } from '../../src';

const renderOptions = options => options.map(({ value, label }, index) => (
	<option key={index} value={value}>{label}</option>
));

const SelectFormik = ({
	name,
	label,
	value,
	error,
	touched,
	formik,
	options,
	...rest
}) => {
	const optionsWithNull = [{ label: '', value: '' }].concat(options);

	useEffect(() => {
		const values = optionsWithNull.map(({ value }) => value);
		if (!values.includes(value)) 
			formik.setFieldValue(name, '');
	}, [formik, name, optionsWithNull, value]);

	const handleChange = useCallback(event => {
		const { value } = event.target;
		formik.setFieldValue(name, value);
	}, [formik, name]);

	const handleBlur = useCallback(() => {
		formik.setFieldTouched(name, true);
	}, [formik, name]);

	const isError = touched && !!error;
	const isValid = touched && !error;

	return (
		<FormGroup>
			<label htmlFor={name}>{label}</label>
			<FormSelect
				id={name}
				onChange={handleChange}
				onBlur={handleBlur}
				value={value}
				valid={isValid}
				invalid={isError}
				{...rest}
			>
				{renderOptions(optionsWithNull)}
			</FormSelect>
			{ isError && <div className="invalid-feedback">{error}</div> }
		</FormGroup>
	);
};

SelectFormik.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	error: PropTypes.string,
	touched: PropTypes.bool,
	formik: FormikPropTypes,
	options: PropTypes.arrayOf(OptionPropTypes),
};

export default SelectFormik;
