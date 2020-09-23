const findAndMap = (array, callback) => {
	let result;
	
	array.find((element, index) => {
		result = callback(element, index);
		return result;
	});

	if (result) {
		return result;
	}

	return false;
};

export default findAndMap;
