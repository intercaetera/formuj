import PropTypes from 'prop-types';

export const OptionPropTypes = PropTypes.shape({
	label: PropTypes.string,
	value: PropTypes.any,
});

export const SchemaPropTypes = PropTypes.arrayOf(PropTypes.shape({
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	component: PropTypes.func.isRequired,

	validators: PropTypes.arrayOf(PropTypes.func),

	value: PropTypes.any,

	optionsKey: PropTypes.string,
	options: PropTypes.arrayOf(OptionPropTypes),
}));

export const TouchedPropTypes = function () {
	return PropTypes.oneOfType([
		PropTypes.arrayOf(TouchedPropTypes),
		PropTypes.objectOf(TouchedPropTypes),
		PropTypes.bool,
	]).apply(this, arguments);
};

export const FormikPropTypes = PropTypes.shape({
	values: PropTypes.objectOf(PropTypes.any).isRequired,
	errors: PropTypes.objectOf(PropTypes.string).isRequired,
	touched: PropTypes.objectOf(TouchedPropTypes).isRequired,
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
	setValues: PropTypes.func.isRequired,
	setFieldValue: PropTypes.func.isRequired,
	setTouched: PropTypes.func.isRequired,
	setFieldTouched: PropTypes.func.isRequired,
	setErrors: PropTypes.func.isRequired,
	setFieldError: PropTypes.func.isRequired,
});
