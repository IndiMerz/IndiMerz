// use iife to show the messge when page reloads

((length, width) => {
    const area = length*width;
    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`;
    console.log(output);
})(20,30);
