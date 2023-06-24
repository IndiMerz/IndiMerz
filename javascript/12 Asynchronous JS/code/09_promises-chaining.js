const promises = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = false;

		if (!error) {
			resolve({ name: 'Henry', age: 30 });
		} else {
			reject('Error: Something Went Wrong');
		}
	}, 1000);
});

promises
	.then((user) => {
		console.log(user);
		return user.name;
	})
	.then((name) => {
		console.log(name); // it can access return of above then
		return name.length;
	})
	.then((length) => {
		console.log(length);
	})
	.catch((error) => {
		console.log(error);
		return 1234; // we can also return something in catch
	})
	.then((num) => console.log('It will alway run even if it get rejected', num));

// we can chain as may promise as we want

// converting callback hell to promise

function getDataInPromise(endpoint) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open('GET', endpoint);

		xhr.onreadystatechange = function () {
			if (this.readyState === 4) {
				if (this.status === 200) {
					resolve(JSON.parse(this.responseText));
				} else {
					reject('Error: Something Went Wrong');
				}
			}
		};

		setTimeout(() => {
			xhr.send();
		}, Math.round(Math.random() * 3000) + 1000);
	}, 3000);
}

getDataInPromise('./06_movies.json')
	.then((movies) => {
		console.log(movies);
		return getDataInPromise('./07_indian-movies.json');
	})
	.then((indian) => {
		console.log(indian);
	})
	.catch((error) => {
		console.log(error);
	});

// Promise.all()
function getDataInPromiseAll(endpoint) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open('GET', endpoint);

		xhr.onreadystatechange = function () {
			if (this.readyState === 4) {
				if (this.status === 200) {
					resolve(JSON.parse(this.responseText));
				} else {
					reject('Error: Something Went Wrong');
				}
			}
		};

		setTimeout(() => {
			xhr.send();
		}, Math.round(Math.random() * 3000) + 1000);
	}, 4000);
}

const moviePromise = getDataInPromiseAll('./06_movies.json');
const indianPromise = getDataInPromiseAll('./07_indian-movies.json');

// adding another promise in it
const anotherPromise = new Promise((resolve, reject) => {
    resolve('Hello world')
})

Promise.all([moviePromise, indianPromise, anotherPromise])

	.then((data) => {
		console.log(data);
	})

	.catch((error) => {
		console.log(error);
	});
