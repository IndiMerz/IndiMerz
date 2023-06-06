# Creating Date Objects with Specific Date and Time
> You can create a `Date` object by specifying the year, month, day, hour, minute, second, and millisecond.

## 7 Numbers to Specify Year, Month, Day, Hour, Minute, Second, and Millisecond

```javascript
const customDateTimeMs = new Date(1990, 11, 21, 04, 52, 45, 500);
console.log(customDateTimeMs); // Fri Dec 21 1990 04:52:45 GMT+0530 (India Standard Time)
```

## 6 Numbers to Specify Year, Month, Day, Hour, Minute, and Second

```javascript
const customDateTimeSec = new Date(1990, 11, 21, 04, 52, 45);
console.log(customDateTimeSec); // Fri Dec 21 1990 04:52:45 GMT+0530 (India Standard Time)
```

## 5 Numbers to Specify Year, Month, Day, Hour, and Minute

```javascript
const customDateTimeMin = new Date(1990, 11, 21, 04, 52);
console.log(customDateTimeMin); // Fri Dec 21 1990 04:52:00 GMT+0530 (India Standard Time)
```

## 4 Numbers to Specify Year, Month, Day, and Hour

```javascript
const customDateTimeHr = new Date(1990, 11, 21, 04);
console.log(customDateTimeHr); // Fri Dec 21 1990 04:00:00 GMT+0530 (India Standard Time)
```

## 3 Numbers to Specify Year, Month, and Day

```javascript
const customDateTimeDay = new Date(1990, 11, 21);
console.log(customDateTimeDay); // Fri Dec 21 1990 GMT+0530 (India Standard Time)
```

## 2 Numbers to Specify Year and Month

```javascript
const customDateTimeMn = new Date(1990, 11);
console.log(customDateTimeMn); // Fri Dec 21 1990 GMT+0530 (India Standard Time)
```

Supplying only one parameter will be treated as milliseconds, which is why the month cannot be omitted.

## Interpreting One and Two-Digit Years

*One and two-digit years will be interpreted as 19xx:*

```javascript
let previousCE;

previousCE = new Date(7, 3, 12);
console.log(previousCE); // Tue Apr 12 1907 00:00:00 GMT+0530 (India Standard Time)

previousCE = new Date(34, 6, 16);
console.log(previousCE); // Mon Jul 16 1934 00:00:00 GMT+0530 (India Standard Time)
```

*In the above examples, the years `7` and `34` are interpreted as 1907 and 1934, respectively.*