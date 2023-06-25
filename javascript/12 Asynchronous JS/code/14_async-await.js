const names = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({ name: 'Steven', age: 71 });
	}, 1000);
});

async function getNames() {
	const respond = await names;
	console.log(respond);
}

getNames();

// by using same with .then:
names.then((data) => {
	console.log(data);
});


// getting users by async await
async function getUsers() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json();
	console.log(data);
}
getUsers();

// by using .then
const getPosts = () => {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
		});
};
getPosts();


// async await by arrow function

const getAlbums = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/albums');
	const data = await response.json();
	console.log(data);
};
getAlbums();



// try catch

try {
	console.log(x);
} catch (error) {
	console.log('Error:' + error);
}

// getting try catch error
const doubleNum = (num) => {
	if (isNaN(num)) {
		throw new Error(num + ' is not a number');
	}
	return num * 2;
};

try {
	const enterNum = doubleNum('fetch');
	console.log(enterNum);
} catch (error) {
	console.log(error);
}



// async await error handling
const getUserData = async () => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};
getUserData();


const getEndPoints = async () => {
	try {
		const response = await fetch('https://httpstat.us/402');

		if (!response.ok) {
			throw new Error('Request Cant Fulfilled');
		}
		const data = await response.text();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

getEndPoints();