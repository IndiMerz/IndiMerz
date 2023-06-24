const toggle = (e) => {
	e.target.classList.toggle('danger');
};

document.getElementById('start').addEventListener('click', toggle);
//toggle is callback
// callback doesnt written with parenthesis;

const techStack = [
	{ title: 'MongoDB', description: 'This is database' },
	{ title: 'React', description: 'This is Frontend' },
];

const addTechStack = (stack) => {
	setTimeout(() => {
		techStack.push(stack);
	}, 5000);
};

const getTechStack = () => {
	setTimeout(() => {
		techStack.forEach((tech) => {
			const newEl = document.createElement('div');
			newEl.innerHTML = `<strong>${tech.title}</strong> ${tech.description}`;
			document.getElementById('container').append(newEl);
		});
	}, 2000);
};

// this will not show as it will take much time to execute, to sovle this issue,
addTechStack({ title: 'Node', description: 'This is a Server' });
getTechStack();

const addTechStack2 = (stack, cb) => {
	setTimeout(() => {
		techStack.push(stack);
		cb();
	}, 5000);
};
addTechStack2({ title: 'Node', description: 'This is Server' }, getTechStack);

// both will take, 5 + 2 seconds to execute






// callback hell

function getData(endpoint){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200){
            // console.log(JSON.parse(this.responseText));
        }
    }

    setTimeout(() => {
        xhr.send();
    }, Math.round(Math.random()*3000)+1000);
} 

getData('./06_movies.json')
getData('./07_indian-movies.json')

// it will not show result in sequence, it will show randomly,


// to fix this:
function getData2(endpoint, cb){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200){
            cb(JSON.parse(this.responseText));
        }
    }

    setTimeout(() => {
        xhr.send();
    }, Math.round(Math.random()*3000)+1000);
} 

getData2('./06_movies.json', (data) => {
    console.log(data);
    getData2('./07_indian-movies.json', (data) => {
        console.log(data);
    })
})
// now firstly, 06_movies.json will execute and then ./07_indian-movies.json




getData2('./07_indian-movies.json', (data) => {
    console.log(data);
    getData2('./06_movies.json', (data) => {
        console.log(data);
    })
})
// in this case, ./07_indian-movies.json > ./06_movies.json

// we can nest as may as we want