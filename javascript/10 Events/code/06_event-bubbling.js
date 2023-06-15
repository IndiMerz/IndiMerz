const getBtn = document.querySelector('form button');
const getDiv = document.querySelector('form div');
const getForm = document.querySelector('form');

getBtn.addEventListener('click', (e) => {
    alert('Button was Clicked');
    e.stopPropagation();
});

getDiv.addEventListener('click', () => {
    alert('Div was Clicked')
});

getForm.addEventListener('click', () => {
    alert('Form was Clicked')
});

document.body.addEventListener('click', () => {
    alert('Body was Clicked')
});

// to prevent bubbling add stopPropagation on the main triggerd object, which is button in this case