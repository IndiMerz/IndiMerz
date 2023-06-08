const library = [
	{
		title: 'The Great Gatsby',
		auther: 'Scott Fitzgerald',
		status: {
			own: true,
			reading: false,
			read: false
		},
	},
	{
		title: 'Pride and Prejudice',
		auther: 'Jane Austen',
		status: {
			own: true,
			reading: false,
			read: false
		},
	},
	{
		title: 'To Kill a Mockingbird',
		auther: 'Harper Lee',
		status: {
			own: true,
			reading: false,
			read: false
		},
	},
];

// changing read to true
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

// destruct first title to firstBook

const {title: firstBook} = library[0];

console.log(firstBook);


const jsonLibrary = JSON.stringify(library);
console.log(jsonLibrary);