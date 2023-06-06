# Creating Specific Dates Using a String
> You can create a `Date` object representing a specific date by using a date string in different formats.

## ISO Date Format
*The ISO date format follows the pattern `YYYY-MM-DD`, `YYYY-MM`, or `YYYY`.*
For example:

```javascript
let specificDate;

specificDate = new Date('2005-12-16');
console.log(specificDate);
// Output: Sat Dec 17 2005 05:30:00 GMT+0530 (India Standard Time)

specificDate = new Date('2005-12');
console.log(specificDate);
// Output: Thu Dec 01 2005 05:30:00 GMT+0530 (India Standard Time)

specificDate = new Date('2005');
console.log(specificDate);
// Output: Sat Jan 01 2005 05:30:00 GMT+0530 (India Standard Time)
```

## Short Date Format
*The short date format can be represented as `"MM/DD/YYYY"` or `"MM-DD-YYYY"`.*

For example:

```javascript
specificDate = new Date('03/12/2016');
console.log(specificDate);
// Output: Sat Mar 12 2016 GMT+0530 (India Standard Time)

specificDate = new Date('03-12-2016');
console.log(specificDate);
// Output: Sat Mar 12 2016 GMT+0530 (India Standard Time)
```

## Long Date Format
*The long date format follows the pattern `'MMM DD YYYY'` or `'DD MMM YYYY'`. The month can be written in full.* 

For example:

```javascript
specificDate = new Date('Mar 12 2016');
console.log(specificDate);
// Output: Sat Mar 12 2016 GMT+0530 (India Standard Time)

specificDate = new Date('12 Mar 2016');
console.log(specificDate);
// Output: Sat Mar 12 2016 GMT+0530 (India Standard Time)

specificDate = new Date('12 March 2016');
console.log(specificDate);
// Output: Sat Mar 12 2016 GMT+0530 (India Standard Time)
```

## Date and Time Format
> The date and time format follows the pattern `'YYYY-MM-DDTHH:MM:SSZ'`. You can also specify the date and time using a different separator like `'/'` or `' '` and without the `Z` at the end. 

For example:

```javascript
let specificDateWithTime;

specificDateWithTime = new Date('2025-02-05T13:10:30Z');
console.log(specificDateWithTime);
// Output: Wed Feb 05 2025 13:10:30 GMT+0530 (India Standard Time)

specificDateWithTime = new Date('2025/02/05 13:10:30');
console.log(specificDateWithTime);
// Output: Wed Feb 05 2025 13:10:30 GMT+0530 (India Standard Time)

specificDateWithTime = new Date('2015-03-25T12:00:00-06:30');
console.log(specificDateWithTime);
// Output: Thu Mar 26 2015 00:00:00 GMT+0530 (India Standard Time)

specificDateWithTime = new Date('2015-03-25T12:00:00-02:30');
console.log(specificDateWithTime);
// Output: Wed Mar 25 2015 20:00:00 GMT+0530 (India Standard Time)

specificDateWithTime = new Date('2015-03-25T12:00:00+02:30');
console.log(specificDateWithTime);
// Output: Wed Mar 25 2015 15:00:00 GMT+0530 (India Standard Time)
```