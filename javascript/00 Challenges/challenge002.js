// Que: Generate two Random numbers and do Operations on them, show the result on console.

// Getting Random Numbers
const x = Math.floor(Math.random()*100 +1);
const y = Math.floor(Math.random()*50 +1);

// Operation
const sum = x+y;
const difference = x-y;
const product = x*y;
const quotient = x/y;
const remainder = x%y;

// Getting Result on Console
console.log(`
First number is ${x}
Second number is ${y}

${x} + ${y} = ${sum}
${x} - ${y} = ${difference}
${x} * ${y} = ${product}
${x} / ${y} = ${quotient}
${x} % ${y} = ${remainder}
`);