// find max and min number from an array

const minMax = (arr) => {
    return {
       min: Math.min(...arr),
       max: Math.max(...arr)
    }
}

console.log(minMax([2,3,4,5,6,24,6,7]));
