# Creating Date Objects from Milliseconds
> In JavaScript, you can create a `Date` object by specifying the number of milliseconds since January 01, 1970.


## Obtaining the Current Milliseconds
*To obtain the current number of milliseconds, you can use methods like `Date.now()`, `new Date().getTime()`, or `new Date().valueOf()`.*

```javascript
let timestampDate;

// Obtaining the Current Milliseconds
timestampDate = Date.now();
console.log(timestampDate);  // 1685861946995

timestampDate = new Date().getTime();
console.log(timestampDate);  // 1685861946995

timestampDate = new Date().valueOf();
console.log(timestampDate);  // 1685861946995
```

## Obtaining Milliseconds of a Specific Date
*To get the number of milliseconds of a specific date, pass the date string to the `getTime()` method of the `Date` object.*

```javascript
timestampDate = new Date('2003-03-24').getTime();
console.log(timestampDate);  // 1048464000000
```

## Obtaining Date from Milliseconds
*You can also create a `Date` object by providing the number of milliseconds since January 01, 1970.*

```javascript
// Starting Point of Date
timestampDate = new Date(0);
console.log(timestampDate);  // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

// Date After Starting Point
timestampDate = new Date(23456666241559);
console.log(timestampDate);  // Fri Apr 25 2713 10:07:21 GMT+0530 (India Standard Time)

// Date Before Starting Point
timestampDate = new Date(-23456666241559);
console.log(timestampDate);  // Wed Sep 09 1226 01:16:06 GMT+0553 (India Standard Time)
```