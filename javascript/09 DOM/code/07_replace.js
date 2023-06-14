// Replace

const replaceIt = () => {
	const selectFirstHead = document.querySelector('#replace');

	const makeNewItem = document.createElement('h2');
	makeNewItem.textContent = 'Document Object Model';

	selectFirstHead.replaceWith(makeNewItem);
};

replaceIt();

const replaceItByOuterHTML = () => {
	const selectRecreate = document.querySelector('.properties');

	selectRecreate.outerHTML = '<h3>I got Replaced!</h3>';
};

replaceItByOuterHTML();

// replace all
const replaceAllItems = () => {
	const getAllItems = document.querySelectorAll('.vegetable');

	getAllItems.forEach((item) => {
		item.innerHTML = 'Hello!';
	});
};
replaceAllItems();

const replaceAllItemsWithConditions = () => {
	const getAllItems = document.querySelectorAll('.vegetable');

	getAllItems.forEach((item, index) => {
		if (index === 2) {
			item.innerHTML = 'Im Third! Pulses is imposter';
		} else {
			item.innerHTML = 'Hello!';
		}
	});
};
replaceAllItemsWithConditions();


// shorter way
const replaceAllItemsWithTernary = () => {
	const getAllItems = document.querySelectorAll('.vegetable');

	getAllItems.forEach(
		(item, index) =>
			(item.outerHTML =
				index === 1 ? '<li>Im here by Ternary</li>' : '<li>We Too</li>!')
	);
};
replaceAllItemsWithTernary();


// replacing by selecting parent element
const replaceChildbyParent = () => {
    const getSection = document.querySelector('section');
    const getHead = document.querySelector('section h1');

    const createHead = document.createElement('h3')
    createHead.textContent = 'FAANG';


    getSection.replaceChild(createHead, getHead);
}
replaceChildbyParent();