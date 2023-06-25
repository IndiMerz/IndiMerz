// this will still show the success message, even if it it bad request or not found
fetch('http://httpstat.us/404')
	.then((response) => {
		return response;
	})
	.then(() => {
		console.log('Request Success!');
	});


// this will not catch the error, it can only catch if url is not correct
fetch('http://httpstat.us/400')
	.then((response) => {
		return response;
	})
	.then(() => {
		console.log('Request Success!');
	})
	.catch((error) => {
		console.log(error);
	});


// it will throw a TypeError: Failed to fetch
fetch('http://demo.aja')
	.then((response) => {
		return response;
	})
	.then(() => {
		console.log('Request Success!');
	})
	.catch((error) => {
		console.log(error);
	});


// to handle error: test with response.ok
fetch('http://httpstat.us/402')
	.then((response) => {
		if (!response.ok) {
			throw new Error('Request Failed to Load');
		}
		return response;
	})
	.then(() => {
		console.log('Request Success!');
	})
	.catch((error) => {
		console.log(error);
	});


// to check specific code
fetch('http://httpstat.us/403')
	.then((response) => {
		if (response.status === 404) {
			throw new Error('Page is Missing');
		} else if (response.status === 402) {
			throw new Error('Please make payment first');
		} else if (response.status === 400) {
			throw new Error('You made bad request');
		} else if (response.status === 500) {
			throw new Error('Server not Found');
		} else if (response.status !== 200) {
			throw new Error('Failed to fetch your request');
		}
		return response;
	})
	.then(() => {
		console.log('Request Success!');
	})
	.catch((error) => {
		console.log(error);
	});