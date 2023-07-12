// Solution 1
const reverseStr = (str) => {
    return str.split('').reverse().join('');
}
// Solution 2
const reverseStr2 = (str) => {
    let reversed = '';

    for (let char of str){
        reversed = char + reversed;
    }
    return reversed;
}

// Solution 3
const reverseStr3 = (str) => {
    return str.split('').reduce((reversed, char) => char + reversed);
}
module.exports = reverseStr3;