const removeBtn = () => {
    const getBtn = document.querySelector('#button');
    getBtn.remove();
};

removeBtn();

const removeListItem = () => {
    const getParent = document.querySelector('#fruits')
    const getitem = document.querySelector('.item:nth-child(1)');

    getParent.removeChild(getitem);
}
removeListItem()


// remove specific item
const removeSpecificItem = (index) => {
    document.querySelectorAll('.child')[index].remove();
}
removeSpecificItem(1);


// to ommit 0 index
const removeSpecificItem2 = (index) => {
    document.querySelectorAll('.child')[index -1].remove();
}
removeSpecificItem2(3);
