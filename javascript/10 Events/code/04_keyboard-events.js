const getFirstHead = document.getElementById('searchBox');
// events

// 1. keypress
getFirstHead.addEventListener('keypress', () => {
    console.log('Key got pressed!');
})

// 1. keyup
getFirstHead.addEventListener('keyup', () => {
    console.log('Hold key, nothing will happed, need to release key');
})

// 3. keydown
getFirstHead.addEventListener('keydown', () => {
    console.log('Hold key, it will keep firing event');
})



// Properties

// 1. key
const keyProp = (e) => {
    console.log(e.key);
}

getFirstHead.addEventListener('keyup', keyProp);

// showing key value in document
getFirstHead.addEventListener('keyup', (e) => {
    document.getElementById('event-list').innerText = e.key;
});

// 2. keycode  (depreciated)
document.addEventListener('keyup', (e) => {
    if (e.keyCode === 13){
        alert('You pressed enter')
    }
});


// 3. code

document.addEventListener('keyup', (e) => {
    console.log(e.code);
});

document.addEventListener('keyup', (e) => {
    if (e.code === 'Space'){
        alert('You pressed Space')
    }
});


// 4. repeat
getFirstHead.addEventListener('keydown', (e) => {
    if (e.repeat) {
        console.log('You are Holding Down ' + e.key);
    }

    // gives shift/ctrl/alt is holding or not (true/false)
    console.log('Shift ' + e.shiftKey);
    console.log('Control ' + e.ctrlKey);
    console.log('Alt ' + e.altKey);


    if (e.shiftKey && e.key === 'A'){
        alert('You hit shift + A')
    }
});