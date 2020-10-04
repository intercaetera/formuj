import findAndMap from './findAndMap';

const chainValidators = (validators = []) => (value, label, formik, validationContext) => {
	const error = findAndMap(validators, validator => validator(value, label, formik, validationContext));
	if (error) {
		return error;
	}

	return false;
};

export default chainValidators;
