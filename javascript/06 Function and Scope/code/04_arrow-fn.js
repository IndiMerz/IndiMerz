// syntax
const getSum = (a, b) => {
    return a+b;
}

// implicit return
const getPower = (a, b) => a**b;

console.log(getPower(2,5));  // 32


// if only one argument, no need to add ()
const getRoot = a => Math.sqrt(a);

console.log(getRoot(36));  // 6


// returning an onject

const getObj = () => ({
    name: 'Adam',
    age: 28,
    gender: "Male"
});

console.log(getObj());


// 
const numbers = [2,4,1,6,8,3];

numbers.forEach(function(x){
    console.log(x);
});

// using arrow fn for same
numbers.forEach( (n) => console.log(n));
