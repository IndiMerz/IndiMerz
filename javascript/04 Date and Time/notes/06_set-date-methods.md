# Date Object Set Methods
> The Date object provides several set methods that allow you to modify specific parts of a date. These methods enable you to set the year, month, day, hour, minute, second, millisecond, and even the entire time of a date object. Here's an overview of the set methods:

## `setFullYear()`
Set the year of a date object (optionally month and day).

```javascript
const d = new Date();

// Set year only
d.setFullYear(1849);
console.log(d);  // Mon Jun 04 1849 18:16:03 GMT+0553 (India Standard Time)

// Set year, month, and day
d.setFullYear(1849, 7, 13);
console.log(d);  // Sun Aug 12 1849 18:19:23 GMT+0553 (India Standard Time)
```

## `setMonth()`
Set the month of a date object (0-11).

```javascript
d.setMonth(4);
console.log(d);
```

## `setDate()`
Set the day of a date object (1-31).

```javascript
d.setDate(6);
console.log(d);
```

## Add Days to a Date
Add days to a date object.

```javascript
d.setDate(d.getDate() + 72);
console.log(d);  // 1849-07-17
```

## `setHours()`
Set the hours of a date object (0-23).

```javascript
d.setHours(7);
console.log(d);
```

## `setMinutes()`
Set the minutes of a date object (0-59).

```javascript
d.setMinutes(34);
console.log(d);
```

## `setSeconds()`
Set the seconds of a date object (0-59).

```javascript
d.setSeconds(12);
console.log(d);
```

## `setMilliseconds()`
Set the milliseconds of a date object (0-999).

```javascript
d.setMilliseconds(149);
console.log(d);
```

## `setTime()`
Set the time of a date object (milliseconds since January 1, 1970).

```javascript
d.setTime(1495323432353);
console.log(d);  // 2017-05-20T23:37:12.353Z
```