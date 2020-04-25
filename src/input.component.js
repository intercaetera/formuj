import React, { useCallback } from 'react';

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
		
		const error = validate(value);
		if (error ) {
			return formik.setFieldError(name, error);
		}

	});
	return (
		<div>
			<input
				name={name}
				value={value || ''}
				onChange={handleChange}
				{...additionalProps}
			/>
		</div>
	);
};
