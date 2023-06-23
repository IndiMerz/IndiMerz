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