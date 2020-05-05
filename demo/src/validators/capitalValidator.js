const capitalValidator = (value, { values }, { capitals }) => {
	const chosenCountry = values.country;
	const correctCapitals = capitals[chosenCountry];

	if (!correctCapitals.includes(value)) {
		return `${value} is not the capital of your chosen country!`;
	}
};

export default capitalValidator;
