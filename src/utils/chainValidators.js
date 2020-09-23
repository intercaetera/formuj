import findAndMap from './findAndMap';

const chainValidators = (validators = []) => (value, formik, validationContext, label) => {
	const error = findAndMap(validators, validator => validator(value, formik, validationContext, label));
	if (error) {
		return error;
	}

	return false;
};

export default chainValidators;
