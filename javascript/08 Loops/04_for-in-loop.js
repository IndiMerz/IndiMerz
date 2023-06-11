// loop in object
const brand = {
    b1: 'apple',
    b2: 'google',
    b3: 'microsoft',
    b4: 'adobe',
    b4: 'facebook'
}

for (const key in brand){
    console.log(key);
} // b1 b2 b3 b4


for (const name in brand){
    console.log(brand[name]);
} // apple google microsoft facebook



// loop in array

const brandName = ['apple', 'google', 'microsoft'];
for (const key in brandName){
    console.log(key);
}  // 0 1 2


for (const key in brandName){
    console.log(brandName[key]);
}  // apple google microsoft


// loop in string
const product = 'Apple Watch';
for (const key in product){
    console.log(key);
}  // 0 1 2 3 4 5 6 7 8 9 10


for (const key in product){
    console.log(product[key]);
}  // A p p l e  W a t c h
