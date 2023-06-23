// set timeoout

setTimeout(()=>{
    console.log('Hello Async JS');
}, 2000)
console.log('Hello Sync Js'); // it will execute first


setTimeout(()=>{
    console.log('Hello Async JS with no time set');
}, 0)  // even no time or 0 time is set, it will execute on last
console.log('Hello Sync Js');


// it also works with name function
const getMsg = () => {
    console.log('Im a named function');
}
const timer = setTimeout(getMsg, 3000);


// clear timeout

document.getElementById('stop').addEventListener('click', () => {
    clearTimeout(timer);
    console.log('Timer Cancelled');
})