// global scope
const x = 'im in global variable';

function checkGlobalScopeInFn(){
    return x;
}
console.log(checkGlobalScopeInFn());

if(true){
    console.log(x + ' in block scope');
}


// function scope
function fnScope(){
    const y = 'im restrited in this fn only, cant execute me outside this fn';
    return y;
}
console.log(fnScope());


function fnScope2(){
    const y = 'im restrited in this fn only, cant execute me outside this fn';
    return {x,y};
    //x will retrive from global scope
}
console.log(fnScope2());


function fnScope3(){
    const x = 'i will overwrite global x';
    const y = 'im restrited in this fn only, cant execute me outside this fn';
    return {x,y};
}
console.log(fnScope3());


// block scope
const a = 20;

if (true){
    const b = 30;
    console.log(a+b);  // 50 , b is block scope, will not work outside this, but it can access a from outside
}

if (true){
    const p = 20;
    let q = 30;
    var r = 40;
}

// console.log(p); wont work const is block scope
// console.log(q); wont work let is block scope
console.log(r); // 40, it will work, var is fn scoped


function run () {
    var check = 150;
    return check;
}

// console.log(check); even it is defined by var, it wont work, as var is fn scoped, we can access a var outside, which is defined under a fn


var hello = ('decalaring var in global add the variable in windows, which is not good thing');



// nested scope

function parent(){
    const x = 5;
    
    function child(){
        const y = 10;
        console.log(x+y);
        console.log(x);
    }
    child();
    
    // console.log(y); we cant access chile variables in parent, but we can access parent in child
}

// child fn wont execute if we wont run parent fn
parent();


// we can run this fn outside
// child();



// same applies as fn for control flow
if (true){
    const x = 20;

    if (x==20){
        const y = 50;
        console.log(x+y);
    }
    // console.log(y); wont work
}



