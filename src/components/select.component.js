import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { FormikPropTypes, OptionPropTypes } from '../propTypes';

export const Select = ({
	name,
	label,
	value,
	error,
	touched,
	options,
	formik,
	readOnly,
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
	value: PropTypes.string,
	error: PropTypes.string,
	touched: PropTypes.bool,
	formik: FormikPropTypes,
	options: PropTypes.arrayOf(OptionPropTypes),
	readOnly: PropTypes.bool,
};

export default Select;
