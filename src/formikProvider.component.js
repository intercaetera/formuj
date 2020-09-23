import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import chainValidators from './utils/chainValidators';
import { SchemaPropTypes } from './propTypes';

export const FormikProvider = ({
	schema,
	onSubmit,
	validationContext,
	render,
}) => {
	const filteredInputs = schema.filter(field => !field.readOnly);

	const initialValues = filteredInputs.reduce((initialValues, field) => {
		initialValues[field.name] = field.value || ''; // TODO: Add tests for empty values.
		return initialValues;
	}, {});

	const initialTouched = filteredInputs.reduce((initialTouched, field) => {
		initialTouched[field] = false;
		return initialTouched;
	}, {});

	const validate = values => {
		const errors = filteredInputs.reduce((errors, field) => {
			const fieldValidator = chainValidators(field.validators);
			const fieldError = fieldValidator(values[field.name], formik, validationContext, field.label);

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
		initialTouched,
		enableReinitialize: true,
		validate,
	});

	return render({ formik, schema });
};

FormikProvider.propTypes = {
	schema: SchemaPropTypes,
	onSubmit: PropTypes.func.isRequired,
	validationContext: PropTypes.any,
	render: PropTypes.func.isRequired,
};

export default FormikProvider;
