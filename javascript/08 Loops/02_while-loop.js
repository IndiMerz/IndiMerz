let i = 0;

while (i<=10) {
    console.log(i);
    i++;
}

// loop on array
const arr = [10, 12, 43, 31];
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

// nesting in while loop
i=1;
while (i <= 3) {
	console.log('Table of ' + i);

	let j = 1;
	while (j <= 10) {
		console.log(`${i} x ${j} = ${i * j}`);
		j++;
	}
	i++;
}


// do while loop: runs atleast once even condition is false

i = 2;
do {
    console.log('Number: ' + i);
    i++;
} while (i < 10);
/*
Number: 2
Number: 3
Number: 4
Number: 5
Number: 6
Number: 7
Number: 8
Number: 9
*/

i = 11;
do {
    console.log('Number: ' + i);
    i++;
} while (i < 10);
// Number: 11
