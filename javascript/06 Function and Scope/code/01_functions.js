// declare a fn
function sayHi(){
    console.log('Hello World')
}
sayHi()


function add(a, b){
    return a+b;
    	// console.log(sum) (this line will never show, as lines is after return)
}

// for getting value in console\
console.log(add(32, 3))

function sub(a,b){
    return a-b
}
console.log(sub(42, 33))

function mul(a,b){
    return a*b
}
console.log(mul(4, 3))

function div(a,b){
    return a/b
}
console.log(div(4, 3))




// param
function createObj(param1, param2, ...paramN){
    // do something
}
// argument
console.log(createObj(1,3,4))


// setting default param
function checkStatus(usr = 'unknown user'){
  return usr + ' registered succesfully'
}
console.log(checkStatus()); // unknown user registered succesfully
console.log(checkStatus('John'));  // John registered succesfully



function heyy(name, greetText3 = 'greetings from microsoft') {
	console.log(greetText3 + ' ' + name);
}

let name1 = 'david';
let name2 = 'alex';

let greetText3 = 'whats up';

heyy(name1, greetText3); // whats up david
heyy(name2);  // greetings from microsoft alex


// rest param
function passAllArg (...num){
    return num;
}
console.log(passAllArg(3,4,6,35,6,6,2,6,632,));
// [ 3, 4, 6,  35, 6, 6, 2, 6, 632 ]


function addAllNums(...numbers){
    let total =0;

    for(const add of numbers){
        total += add;
    }
    return total
}

console.log(addAllNums(2,4,6,7,8,84,3,24,6));  // 144



// obj as param

function checkUsr(user){
    return `The user ${user.name} with id of ${user.id} has logged in successfully`
}

const user1 = {
    name: 'Kyle',
    id: 343,
}

const user2 = {
    name: 'Alex',
    id: 635,
}

console.log(checkUsr(user1));


// array as param

function getRNfmArr(arr){
    const ranIdx = Math.floor(Math.random() * arr.length);
    const ranNum = arr[ranIdx];
    return ranNum;
}

console.log(getRNfmArr([2,3,6]));