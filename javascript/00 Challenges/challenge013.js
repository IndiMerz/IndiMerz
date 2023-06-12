//Capitalize the first letter of each word.

const words = ['coder', 'programmer', 'developer'];

const capitalizeFirstWord = words.map((word) => {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
});

console.log(capitalizeFirstWord);