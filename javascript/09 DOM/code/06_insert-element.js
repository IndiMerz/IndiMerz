/*
<beforebegin>
<p>
    <afterbegin>
    foo
    <beforeend>
</p>
<afterend>
*/


// 1. insertAdjacentELement
const insertAdjEle = (value) => {

    // select element where we want to push new element
    const eat = document.querySelector('.eat');

    // create a new element
    const drink = document.createElement('p');
    drink.textContent = value;

    // insert at required position
    eat.insertAdjacentElement('afterend', drink);
}

insertAdjEle('Drink Water');



// 2. insertAdjacentText
const insertAdjText = (text) => {
    const technology = document.querySelector('.tech');

    technology.insertAdjacentText('beforeend', text);
}

insertAdjText('OpenAI')



// 3. insertAdjacentHTML
const insertAdjHTML = (html) => {
    const nodeChild = document.querySelector('.child:nth-child(3)');

    nodeChild.insertAdjacentHTML('afterbegin', html);
}

insertAdjHTML('<h3>MongoDB</h3>')




// Old Methods

// 1. insertBefore
const insertBeforeItem = (value) => {
    const veges = document.querySelector('.child-lists');

    const seeds = document.createElement('li');
    seeds.textContent = value;

    const secPlace = veges.querySelector('li:nth-child(2)')

    // parentElement.insertBefore(node, nextSibling)
    veges.insertBefore(seeds, secPlace);
}

insertBeforeItem('Pulses');



// making custom insertAfter

const insertAfter = (newEl, existingEl) => {
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

// using the function

    const selectele = document.querySelector('.parent');

    const newItem = document.createElement('li');
    newItem.textContent = 'Hellonfe';

    const selectChild = selectele.querySelector('li:nth-child(3)');

    insertAfter(newItem, selectChild);

