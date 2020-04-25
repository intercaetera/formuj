const chainValidators = validators => value => {
	const erroringValidator =  validators.find(validator => validator(value));
	if (erroringValidator) {
		return erroringValidator(value);
	}

	return false;
};

export default chainValidators;
