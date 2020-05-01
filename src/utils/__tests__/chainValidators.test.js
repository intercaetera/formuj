import chainValidators from '../chainValidators';

const EVEN_ERROR_MESSAGE = 'Value must be even.';
const DIV_BY_FIVE_ERROR_MESSAGE = 'Value must be divisible by five.';

const evenValidator = value => {
	if (value % 2 !== 0) {
		return EVEN_ERROR_MESSAGE;
	}
};

const divisibleByFiveValidator = value => {
	if (value % 5 !== 0) {
		return DIV_BY_FIVE_ERROR_MESSAGE;
	}
};

const validators = [evenValidator, divisibleByFiveValidator];

test('should return a function', () => {
	// given validators
	// when
	const validate = chainValidators(validators);

	// then
	expect(typeof validate).toBe('function');
});

test('should return false if no erroring validator is found', () => {
	// given
	const validate = chainValidators(validators);
	const valueToValidate = 10;

	// when
	const validationResult = validate(valueToValidate);

	// then
	expect(validationResult).toBe(false);
});

test('should return the first offending error', () => {
	// given
	const validate = chainValidators(validators);
	const valueToValidate = 3;

	// when
	const validationResult = validate(valueToValidate);

	// then
	expect(validationResult).toEqual(EVEN_ERROR_MESSAGE);
});

test('should return the correct error if the value satisfies one validator but not others', () => {
	// given
	const validate = chainValidators(validators);
	const valueToValidate = 2;

	// when
	const validationResult = validate(valueToValidate);

	// then
	expect(validationResult).toEqual(DIV_BY_FIVE_ERROR_MESSAGE);
});
