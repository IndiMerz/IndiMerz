const listItem = document.querySelectorAll('li');

listItem.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.target.remove();
    })
});


// doing same by event delegation
const list = document.querySelector('ul');

list.addEventListener('click', (e) => {
    e.target.remove();
})

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI')
    e.target.remove();
})


list.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI')
    e.target.style.color = 'blue'
})

