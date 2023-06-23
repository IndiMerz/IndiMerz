// getting dates
const seconds = () => {
	const getDate = Date.now();
	const date = new Date(getDate);
	document.getElementById('date').innerText = date;
};

let timeID;

const startTime = () => {
	if (!timeID) {
		timeID = setInterval(seconds, 1000);
	}
};

const stopTime = () => {
	clearInterval(timeID);
	timeID = null;
};

document.getElementById('stop').addEventListener('click', stopTime);
document.getElementById('start').addEventListener('click', startTime);

// change background
const getColors = () => {
	if (document.body.style.backgroundColor !== 'black') {
		document.body.style.cssText = 'background-color: black; color: white';
	} else {
		document.body.style.cssText = 'background-color: white; color: black';
	}
};

let colorID;

const generateColors = () => {
	if (!colorID) {
		colorID = setInterval(getColors, 1000);
	}
};

const stopGenerating = () => {
	if (colorID) {
		clearInterval(colorID);
		colorID = null;
	}
};

document.getElementById('generate').addEventListener('click', generateColors);
document
	.getElementById('stopGenerate')
	.addEventListener('click', stopGenerating);

// change random background
const changeRandomColor = () => {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	document.body.style.backgroundColor = `#${randomColor}`;
};

let randColorID;

const generateRandColors = () => {
	if (!randColorID) {
		randColorID = setInterval(changeRandomColor, 1000);
	}
};

const stopRandColor = () => {
	randColorID = clearInterval(randColorID);
	randColorID = null;
};

document
	.getElementById('generateRand')
	.addEventListener('click', generateRandColors);
document
	.getElementById('stopGenerate')
	.addEventListener('click', stopRandColor);
