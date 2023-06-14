const clearBtn = document.querySelector('.btn');


// JS event listner
clearBtn.onclick = () => {
    console.log('I will Delete All');
};

// by add event listner (we can make as many events as we want by addevent listener)
clearBtn.addEventListener('click', () => {
    alert('I will Delete All')
})

clearBtn.addEventListener('click', () => {
    console.log('I will Delete Everything')
})


// we can also use named fn, eg

const consoleMsg = () => {
    console.log('Hi, Im a named Function');
}
clearBtn.addEventListener('click', consoleMsg);


// remove event listener

clearBtn.removeEventListener('click', consoleMsg);

// adding settimeout
setTimeout(() => {
    clearBtn.removeEventListener('click', consoleMsg);
}, 5000);


// clear list items
clearBtn.addEventListener('click', () => {
    const getItems = document.querySelector('ul');
    getItems.innerHTML = '';
});

// another way (good to use)
clearBtn.addEventListener('click', () => {
    const getItemList = document.querySelector('ul');
    const getEachItem = getItemList.querySelectorAll('li');

    getEachItem.forEach((item) => item.remove());
});


// using while loop
clearBtn.addEventListener('click', () => {
    const getItemList = document.querySelector('ul');

    while (getItemList.firstChild) {
        getItemList.removeChild(getItemList.firstChild)
    }
});


// more mouse events
const getAside = document.querySelector('.changeBg');
const getP = document.querySelector('p');

//functions
const doubleClick = () => {
   if (document.body.style.background !== 'rgb(0, 179, 179)') {
         document.body.style.cssText = 'background: #00b3b3; color: #5500ff';
    } else {
       document.body.style.cssText = 'background: white; color: black';
    }
}

const onRightClick = () => getP.style.fontSize = '2em';
const onMouseDown = () => getP.style.color = 'violet';
const onMouseUp = () => getP.style.color = 'green';
const onMouseWheel = () => getP.style.background = 'red';
const onMouseOver = () => getP.style.border = '2px solid red';
const onMouseOut = () => getP.style.border = 'none';
const onDragStart = () => getP.style.background = 'orange';
const onDrag = () => getP.style.background = 'pink';
const onDragEnd = () => getP.style.background = 'white';


// event listners
getAside.addEventListener('dblclick', doubleClick);
getAside.addEventListener('contextmenu', onRightClick);
getAside.addEventListener('mousedown', onMouseDown);
getAside.addEventListener('mouseup', onMouseUp);
getAside.addEventListener('mouseover', onMouseOver);
getAside.addEventListener('mouseout', onMouseOut);
getAside.addEventListener('dragstart', onDragStart);
getAside.addEventListener('drag', onDrag);
getAside.addEventListener('dragend', onDragEnd);