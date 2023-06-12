const numbers = [2, -30, 50, 20, -12, -9, 7];

// Add all of the positive numbers from the array.

//get all positive number:
const addPositiveNum = numbers
    .filter((positive) => positive > 0)
    // adding numbers
    .reduce((previous, current) => previous + current, 0)


    // checking the output
    console.log(addPositiveNum);