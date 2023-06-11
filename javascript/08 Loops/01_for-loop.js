for (let i = 0; i <=10; i++) {
    console.log(i);
}


// get odd num
for (let i = 1; i <=10; i+=2) {
    console.log('Odd: ' + i);
}

// get even num
for (let i = 1; i <=10; i+=2) {
    console.log('Even: ' + i);
}

// if else in a loop
for(let i=0; i<=10; i++){
    if (i%2 === 0){
        console.log('Even: ' + i);
        
    } else {
        console.log('Odd: ' + i);
    }
}

const names = ['Henry', 'Ross', 'Sarah', 'David', 'Kevin']

for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Sarah' ){
        console.log(`${names[i]} is a girl`);
    } else{
        console.log(names[i]);
    }
}



// break
for (let i = 0; i <= 10; i++){
    if (i === 7){
        console.log('Stopping Now...');
        break
    } else{
        console.log(i);
    }
}
/*
0
1
2
3
4
5
6
Stopping Now...
*/
// it will stop the loop if condition match



// continue
for (let i = 0; i <= 10; i++){
    if (i === 7){
        console.log('Stopping Now...');
        continue
    } else{
        console.log(i);
    }
}
/*
0
1
2
3
4
5
6
Stopping Now...
8
9
10
*/
// it doenst stops if condition match, gives output and resume loop



// nest loops

for (let i = 1; i <= 10; i++){
    console.log('Table of ' + i);

    for (let j = 1; j<=10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}
