const required = value => {
	if (value === undefined || value.length === 0) {
		return 'This field is required.';
	}
};

export default required;
