// Fn Declaration

// in this case we can run function before DEFINIG it
function run(value){
    return 'BTC' + value;
}
console.log(run(20));



// Fn Expression

// in this case, we cant. it will through an error
const runAgain = function(value){
    return 'BNB' + value
}
console.log(runAgain(10));