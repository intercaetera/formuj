import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { FormikPropTypes, OptionPropTypes } from '../propTypes';

const Select = ({
	name,
	label,
	value,
	error,
	touched,
	options,
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
		<div className="formuj-control">
			<label className="formuj-label" htmlFor={name}>{label}</label>
			<select
				className="formuj-select"
				id={name}
				onChange={handleChange}
				onBlur={handleBlur}
				value={value}
			>
				{
					options.map(({ label, value }, index) => (
						<option key={index} value={value}>
							{label}
						</option>
					))
				}
			</select>
			{ touched && error && <div className="formuj-error">{error}</div> }
		</div>
	);
};

Select.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	error: PropTypes.string,
	touched: PropTypes.bool,
	formik: FormikPropTypes,
	options: PropTypes.arrayOf(OptionPropTypes),
};

export default Select;
