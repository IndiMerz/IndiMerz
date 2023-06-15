const getObjBtn = document.querySelector('.objects');


// 1. target : the element that triggered the event
getObjBtn.addEventListener('click', (e) => console.log(e.target));
getObjBtn.addEventListener('click', (e) => e.target.style.color = 'red');

// 2. currentTarget : the element that the event listner attached too

getObjBtn.addEventListener('click', (e) => e.currentTarget.style.color = 'red');

// difference between target and currentTarget
document.body.addEventListener('click', (e) => console.log(e.currentTarget));
document.body.addEventListener('click', (e) => console.log(e.target));


// 3. type : type of event which was triggered
getObjBtn.addEventListener('click', (e) => console.log(e.type));;  // click


// 4. type : time that event was triggered
getObjBtn.addEventListener('click', (e) => console.log(e.timeStamp));  // 1591


// 5. clientX : postition of cursor on x axis on windows when event triggered
getObjBtn.addEventListener('click', (e) => console.log(e.clientX));

// 6. clientY : postition of cursor on y axis on windows when event triggered
getObjBtn.addEventListener('click', (e) => console.log(e.clientY));


// 7. offsetX : postition of cursor on x axis on that element when event triggered
getObjBtn.addEventListener('click', (e) => console.log(e.offsetX));

// 8. offsetY : postition of cursor on y axis on that element when event triggered
getObjBtn.addEventListener('click', (e) => console.log(e.offsetY));

// 9. pageX : postition of cursor on x axis of page when event triggered
getObjBtn.addEventListener('click', (e) => console.log(e.pageX));

// 10. pageY : postition of cursor on y axis of page when event triggered
getObjBtn.addEventListener('click', (e) => console.log(e.pageY));

// 11. screenX : postition of cursor on x axis of screen when event triggered
getObjBtn.addEventListener('click', (e) => console.log(e.screenX));

// 12. screenY : postition of cursor on y axis of screen when event triggered
getObjBtn.addEventListener('click', (e) => console.log(e.screenY));


// preventing default behaviour

const getGoogle = document.querySelector('.link');
getGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Google is not happy with you :( You cant access it');
})


// dragging image and gettind x,y values

const getImg = document.querySelector('.image');
getImg.addEventListener('drag', (e) => {
    document.querySelector('.articleHead').innerText = `X: ${e.clientX} | Y: ${e.clientY}`;
})