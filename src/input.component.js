import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { FormikPropTypes } from './propTypes';

export const Input = ({
	formik,
	name,
	value,
	label,
	validate,
	...additionalProps
}) => {
	const handleChange = useCallback(event => {
		const { value } = event.target;
		formik.setFieldValue(name, value);
		
		if (validate) {
			const error = validate(value);
			if (error) {
				return formik.setFieldError(name, error);
			}
		}

	});
	return (
		<div>
			<label>
				{label}
				<input
					name={name}
					value={value || ''}
					onChange={handleChange}
					{...additionalProps}
				/>
			</label>
		</div>
	);
};

Input.propTypes = {
	formik: FormikPropTypes,
	name: PropTypes.string.isRequired,
	value: PropTypes.any,
	label: PropTypes.string.isRequired,
	validate: PropTypes.func,
};
