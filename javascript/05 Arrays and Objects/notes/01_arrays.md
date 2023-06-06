# Arrays
> Arrays used to store multiple values in a single variable. Each value in an array is called an element, and each element is assigned a unique index starting from 0.

## 1. Creating an Array

 - `**Array literal**`
To create an array, you can use an array literal enclosed in square brackets. Each element is separated by a comma. For example:
```javascript
const fruits = ['Apple', 'Mango', 'Banana', 'Orange'];
const numbers = [23, 42, 55, 16, 64, 75];
const ageName = ['John', 28, 'Mike', 46, 'Andrews', 35];
```

 - `**Array Constructor**`
Alternatively, you can create an array using the `Array` constructor. For example:
```javascript
const oddNum = new Array(1, 3, 5, 7, 9);
```

## 2. Accessing Array Elements
*You can access individual elements of an array using the index value. Array indices start from 0.* 

For example:
```javascript
const thirdFruit = fruits[2]; // 'Banana'
const firstNumber = numbers[0]; // 23
```

 - Accessing the First Array Element
```js
let firstArrEle = ageName[0];
console.log(firstArrEle);  // John
```

 - Accessing the Last Array Element
```js
let lastArrEle;
lastArrEle = ageName[ageName.length -1];
console.log(lastArrEle);  // 35
```
 - Shorter way
```js
lastArrEle = ageName.at(-1);
console.log(lastArrEle);  // 35
```



## 3. Modifying Array Elements
*You can change the value of an array element by assigning a new value to it.*

For example:
```javascript
fruits[1] = 'Grapes';
numbers[3] = 10;
```

## 4. Adding Array Elements
*You can add new elements to an array by assigning a value to a specific index* 

For example:
```javascript
const phones = ['redmi', 'samsung', 'realme'];
const series = ['s', 'note', 'm']
const numbers = [10, 6, 8, 20]

let redmiPhone = `${phones[0]} ${series[1]} ${numbers[0]}` ;
console.log(redmiPhone);  // redmi note 10

let samsungPhone = `${phones[1]} ${series[2]}${numbers[3]}` ;
console.log(samsungPhone);  // samsung m20

```

## 5. Array Length
*The length of an array is determined by the number of elements it contains. You can retrieve the length of an array using the `length` property.*

For example:
```javascript
const fruitCount = fruits.length; // 5
const numberCount = numbers.length; // 7
```

## 6. Converting an Array to a String
*You can convert an array to a string using the `toString` method. This method returns a string representation of the array elements separated by commas.* 

For example:
```javascript
const fruitsString = fruits.toString(); // 'Apple,Mango,Banana,Orange'
```