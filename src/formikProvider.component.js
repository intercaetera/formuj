import PropTypes from 'prop-types';

import { useFormuj } from './useFormuj.hook';
import { SchemaPropTypes, FormikPropTypes } from './propTypes';

export const FormikProvider = ({
	schema,
	onSubmit,
	validationContext,
	render,
	innerRef,
}) => {
	const formik = useFormuj({
		schema,
		onSubmit,
		validationContext,
		innerRef,
	});

	return render({ formik, schema });
};

FormikProvider.propTypes = {
	schema: SchemaPropTypes,
	onSubmit: PropTypes.func.isRequired,
	validationContext: PropTypes.any,
	render: PropTypes.func.isRequired,
	innerRef: PropTypes.shape({
		current: PropTypes.shape({
			formik: FormikPropTypes,
			schema: SchemaPropTypes,
			validationContext: PropTypes.any,
		}),
	}),
};

export default FormikProvider;
