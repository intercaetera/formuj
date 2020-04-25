import React, { useCallback } from 'react';

export const Input = ({
	formik,
	name,
	value,
}) => {
	const handleChange = useCallback(event => {
		formik.setFieldValue(name, event.target.value);
	});

	return (
		<input name={name} value={value || ''} onChange={handleChange} />
	);
};
