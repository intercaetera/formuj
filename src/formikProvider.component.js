import { useFormik } from 'formik';

import chainValidators from './utils/chainValidators';

export const FormikProvider = ({
	schema,
	onSubmit,
	render,
}) => {
	const initialValues = schema.reduce((initialValues, field) => {
		initialValues[field.name] = field.value;
		return initialValues;
	}, {});

	const validate = values => {
		const errors = schema.reduce((errors, field) => {
			const fieldValidator = chainValidators(field.validators);
			const fieldError = fieldValidator(values[field.name]);

			if (fieldError) {
				errors[field.name] = fieldError;
			}

			return errors;
		}, {});
		
		console.error(errors);
		return errors;
	};

	const formik = useFormik({
		onSubmit,
		initialValues,
		enableReinitialize: true,
		validate,
	});

	return render({ formik, schema });
};
