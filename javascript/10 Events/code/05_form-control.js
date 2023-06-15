const getHead = document.getElementById('event-list');
const getInput = document.getElementById('textbox');
const getQuantity = document.getElementById('quantity');
const getCheckbox = document.getElementById('checkbox');
const getBtn = document.getElementById('submitBtn');


// 1. input
getInput.addEventListener('input', (e) => {
    console.log(e.target.value);
    getHead.innerHTML = e.target.value;
})

getQuantity.addEventListener('input', (e) => {
    getHead.innerHTML = e.target.value;
})


getCheckbox.addEventListener('input', (e) => {
    const isChecked = e.target.checked;
    getHead.textContent = isChecked ? 'Checked' : 'Not Checked'
})



// 2. change
getQuantity.addEventListener('change', (e) => {
    getHead.innerHTML = e.target.value;
})


// 3. focus
getInput.addEventListener('focus', () => {
    getInput.style.outline = '2px solid red'

})


// 4. blur
getInput.addEventListener('blur', () => {
    getInput.style.outline = '2px solid blue'

})



// 5. submit
const getForm = document.getElementById('myForm');

getForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const item = document.getElementById('textbox').value;
    const quantity = document.getElementById('quantity').value;

    if (item === '' || quantity === '0'){
        alert('Please Fill all Field');
        return;
    }

    console.log(item, quantity);
})


// 6. another way by 'get'

getForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(getForm);

    const item = formData.get('itemName');
    const quantity = formData.get('quantityList');

    console.log(item, quantity);
})


getForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(getForm);

    const entries = formData.entries();


    for (let entry of entries){
        console.log(entry[0]);
        console.log(entry[1]);
    }
})