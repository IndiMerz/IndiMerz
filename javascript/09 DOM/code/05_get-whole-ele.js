// Quick and Dirty Way
const addItems = (item) => {
    const addList = document.createElement('li');

    // copy paste whole html element
    addList.innerHTML = `${item}
    <button type="button" class="btn btn-primary" >Open</button>`;

    document.querySelector('.add-items').appendChild(addList);
}

addItems('Facebook');
addItems('Apple');


// clean and perfomant

const addItemstoList = (item) => {
    const addList = document.createElement('li');
    addList.appendChild(document.createTextNode(item))

    const getBtn = document.createElement('button');
    const buttonText = document.createTextNode('Open');
    getBtn.appendChild(buttonText);
    getBtn.className = 'btn btn-primary'

    addList.appendChild(getBtn);
    document.querySelector('.add-items').appendChild(addList);
}

addItemstoList('Microsoft')


// making each element as function for reusability

const addItemstoList2 = (item) => {
    const addList = document.createElement('li');
    addList.appendChild(document.createTextNode(item))

    const getBtn = createBtn('btn btn-primary');

    addList.appendChild(getBtn);
    document.querySelector('.add-items').appendChild(addList);
}


const createBtn = (classes) => {
    const getBtn = document.createElement('button');
    
    const buttonText = document.createTextNode('Open');
    getBtn.appendChild(buttonText);
    
    getBtn.className = classes;
    return getBtn
}


addItemstoList2('Adobe')