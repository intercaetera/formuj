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
	const initialValues = schema.reduce((initialValues, field) => {
		initialValues[field.name] = field.value;
		return initialValues;
	}, {});

	const validate = values => {
		const errors = schema.reduce((errors, field) => {
			const fieldValidator = chainValidators(field.validators);
			const fieldError = fieldValidator(values[field.name], formik, validationContext);

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

	return render({ formik, schema });
};

FormikProvider.propTypes = {
	schema: SchemaPropTypes,
	onSubmit: PropTypes.func.isRequired,
	validationContext: PropTypes.any,
	render: PropTypes.func.isRequired,
};
