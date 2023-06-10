const x = 10;
const y = 15;

if (x>y){
    console.log('x is greater than y');
}

if (x<y){
    console.log('x is lower than y');
}


if (x === y) {
    console.log('both are equal');
}

if (x !== y) {
    const z = 'hello world';
    console.log(z);
}


const hour = new Date(2018, 10, 4, 22, 13, 24).getHours();


if (hour >= 6 && hour < 12 ) {
    console.log('Good Morning');
    if (hour === 6){
        console.log('Wake up man');
    } 
} else if (hour >= 12 && hour <= 16) {
    console.log('Good Afternoon');
} else if (hour > 16 && hour <=19){
    console.log('Good Evening');
} else if (hour > 19 && hour <=23){
    console.log('Good Night');
} else {
    console.log('zzzzzzz');
}

if (hour === 6 || hour === 22){
    console.log('brush your teeth');
}