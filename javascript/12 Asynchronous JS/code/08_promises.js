// creating a promise

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Complete Async Task');
		resolve();
	}, 1000);
});

// handle promise

promise.then(() => {
	console.log('Promise Resolved!');
});

// promises are asyncronous, means they will not block the code until it execute, eg
console.log(
	'I am in Global Scope, i will execute first because promise will not block the code'
);

// we dont need to write handle promise separatly
new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Complete Async Task 2');
		resolve();
	}, 1000);
}).then(() => {
	console.log('Promise 2 Resolved!');
});

// Return Data from promise

new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({ name: 'Jae', age: 25 });
	}, 1000);
}).then((user) => {
	console.log(user);
	console.log(user.name);
	console.log(user.age);
});

// handle errors
const getUser = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = true;

		if (!error) {
			resolve({ name: 'Jae', age: 25 });
		} else {
			reject('Error: Something Went Wrong');
		}
	}, 1000);
});

getUser
	.then((user) => console.log(user))  // To return promise

	.catch((error) => console.log(error)) // To catch the error

    .finally(() => console.log('The promise is resolved or rejected')) // it will always execute




// refactor callback into promise

// const techStack = [
// 	{ title: 'MongoDB', description: 'This is database' },
// 	{ title: 'React', description: 'This is Frontend' },
// ];

// const addTechStack = (stack) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             techStack.push(stack);
//             resolve();
//         }, 2000);
//     })
// };

// const getTechStack = () => {
// 	setTimeout(() => {
// 		techStack.forEach((tech) => {
// 			const newEl = document.createElement('div');
// 			newEl.innerHTML = `<strong>${tech.title}</strong> ${tech.description}`;
// 			document.getElementById('container').append(newEl);
// 		});
// 	}, 2000);
// };

// addTechStack({ title: 'Node', description: 'This is a Server' }).then(getTechStack)




// Handling Error
const techStack2 = [
	{ title: 'MongoDB', description: 'This is database' },
	{ title: 'React', description: 'This is Frontend' },
];

const addTechStack2 = (stack) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let error = true; 

            if (!error) {
                techStack2.push(stack);
                resolve();
            } else {
                reject('Error: Someting Went Wrong')
            }

        }, 2000);
    })
};

const getTechStack2 = () => {
	setTimeout(() => {
		techStack2.forEach((tech) => {
			const newEl = document.createElement('div');
			newEl.innerHTML = `<strong>${tech.title}</strong> ${tech.description}`;
			document.getElementById('container').append(newEl);
		});
	}, 2000);
};

const showError = (error) => {
    const errorBox = document.createElement('div')
    errorBox.innerHTML = `<strong>${error}</strong>`;
    document.getElementById('container').append(errorBox);
}
addTechStack2({ title: 'Node', description: 'This is a Server' }).then(getTechStack2).catch(showError);
