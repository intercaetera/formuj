const sameAs = fieldName => (value, _label, { values }) => {
	if (values[fieldName] !== value) {
		return `Has to be the same as ${fieldName}!`;
	}
};

export default sameAs;
