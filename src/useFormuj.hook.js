import { useFormik } from 'formik';
import { useImperativeHandle } from 'react';

import chainValidators from './utils/chainValidators';

export const useFormuj = ({
	schema,
	onSubmit,
	validationContext,
	innerRef,
}) => {
	const filteredInputs = schema.filter(field => !field.readOnly);

	const initialValues = filteredInputs.reduce((initialValues, field) => {
		initialValues[field.name] = field.value !== undefined ? field.value : '';
		return initialValues;
	}, {});

	const validate = values => {
		const errors = filteredInputs.reduce((errors, field) => {
			const fieldValidator = chainValidators(field.validators);
			const fieldError = fieldValidator(values[field.name], field.label, formik, validationContext);

			if (fieldError) {
				errors[field.name] = fieldError;
			}

			return errors;
		}, {});
		
		return errors;
	};

	const formik = useFormik({
		onSubmit,
		initialValues,
		enableReinitialize: true,
		validate,
	});

	useImperativeHandle(innerRef, () => ({
		formik,
		schema,
		validationContext,
	}));

	return formik;
};
