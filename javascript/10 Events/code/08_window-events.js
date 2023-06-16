// 1. Page loading

// Firstly DOM will load then page,

// After that this
window.addEventListener('load', ()=>{
    console.log('Page Loaded');
})

// First It will Load
window.addEventListener('DOMContentLoaded', ()=>{
    console.log('DOM Loaded');
})

document.querySelector('aside h1').innerText = 'This page link is on head and still working'



// 2. Resize
window.addEventListener('resize', () => {
    document.getElementById('event-list').innerText = `Dimensions: ${window.innerHeight} x ${window.innerWidth}`
});


// 3. Scroll
window.addEventListener('scroll', () => {
    document.querySelector('.articleHead').innerText = `Scrolled: ${window.scrollX} x ${window.scrollY}`

});


window.addEventListener('scroll', () => {
    document.querySelector('.articleHead').innerText = `Scrolled: ${window.scrollX} x ${window.scrollY}`
    if (scrollY > 60){
        document.body.style.cssText = 'background: green; color: white'
    } else {
        document.body.style.cssText = 'background: white; color: black'

    }
});


// 4. focus
window.addEventListener('focus', () => {
    document.querySelector('.articleHead').style.color = 'violet'

});

// 5. blur
window.addEventListener('blur', () => {
    document.querySelector('.articleHead').style.color = 'blue'

});
