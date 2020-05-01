const minLength = length => value => {
	if (!value || value.length < length) {
		return `This field has to be at least ${length} characters long.`;
	}
};

export default minLength;
