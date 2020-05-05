const sameAs = fieldName => (value, { values }) => {
	if (values[fieldName] !== value) {
		return `Has to be the same as ${fieldName}!`;
	}
};

export default sameAs;
