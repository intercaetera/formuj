const chainValidators = (validators = []) => (value, formik, validationContext) => {
	const erroringValidator =  validators.find(validator => validator(value, formik, validationContext));
	if (erroringValidator) {
		return erroringValidator(value, formik, validationContext);
	}

	return false;
};

export default chainValidators;
