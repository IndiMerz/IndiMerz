function capitaliseFirstLetter(str) {
	return str
		.toLowerCase()
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.substr(1))
		.join(' ');
};


export default capitaliseFirstLetter;
