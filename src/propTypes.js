import PropTypes from 'prop-types';

export const SchemaPropTypes = PropTypes.arrayOf(PropTypes.shape({
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	component: PropTypes.node.isRequired,
	
	value: PropTypes.any,
	validators: PropTypes.arrayOf(PropTypes.func),
}));

export const FormikPropTypes = PropTypes.shape({
	values: PropTypes.objectOf(PropTypes.any).isRequired,
	errors: PropTypes.objectOf(PropTypes.string).isRequired,
	touched: PropTypes.objectOf(PropTypes.bool).isRequired,
	isSubmitting: PropTypes.bool.isRequired,
	isValidating: PropTypes.bool.isRequired,
	submitCount: PropTypes.number.isRequired,
	initialValues: PropTypes.objectOf(PropTypes.any).isRequired,
	initialErrors: PropTypes.objectOf(PropTypes.string).isRequired,
	initialTouched: PropTypes.objectOf(PropTypes.bool).isRequired,
	isValid: PropTypes.bool.isRequired,
	dirty: PropTypes.bool.isRequired,
	validateOnBlur: PropTypes.bool.isRequired,
	validateOnChange: PropTypes.bool.isRequired,
	validateOnMount: PropTypes.bool.isRequired,
});
