# Getting Date and Time Information from a Date Object
> You can use various methods to retrieve specific date and time information from a `Date` object.


## `getFullYear()`
Get year as a four-digit number (yyyy).

```javascript
const d = new Date('Mar 11 2105 12:30:28:230');
const year = d.getFullYear();
console.log(year);  // 2105
```

## `getMonth()`
Get month as a number (0-11).

```javascript
const month = d.getMonth();
console.log(month);  // 2
```

## `getDate()`
Get day as a number (1-31).

```javascript
const day = d.getDate();
console.log(day);  // 11
```

## `getDay()`
Get weekday as a number (0-6).

```javascript
const weekday = d.getDay();
console.log(weekday);  // 3
```

## `getHours()`
Get hour (0-23).

```javascript
const hours = d.getHours();
console.log(hours);  // 12
```

## `getMinutes()`
Get minutes (0-59).

```javascript
const minutes = d.getMinutes();
console.log(minutes);  // 30
```

## `getSeconds()`
Get seconds (0-59).

```javascript
const seconds = d.getSeconds();
console.log(seconds);  // 28
```

## `getMilliseconds()`
Get milliseconds (0-999).

```javascript
const milliseconds = d.getMilliseconds();
console.log(milliseconds);  // 230
```

## `getTime()`
Get time in milliseconds since January 1, 1970.

```javascript
const time = d.getTime();
console.log(time);  // 4266198028230
```

## `getUTCFullYear()`
Get UTC year as a four-digit number (yyyy).

```javascript
const utcYear = d.getUTCFullYear();
console.log(utcYear);  // 2105
```

## `getUTCMonth()`
Get UTC month as a number (0-11).

```javascript
const utcMonth = d.getUTCMonth();
console.log(utcMonth);  // 2
```

## `getUTCDate()`
Get UTC day as a number (1-31).

```javascript
const utcDay = d.getUTCDate();
console.log(utcDay);  // 11
```

## `getUTCDay()`
Get UTC weekday as a number (0-6).

```javascript
const utcWeekday = d.getUTCDay();
console.log(utcWeekday);  // 3
```

## `getUTCHours()`
Get UTC hour (0-23).

```javascript
const utcHours = d.getUTCHours();
console.log(utcHours);  // 7
```

## `getUTCMinutes()`
Get UTC minutes (0-59).

```javascript
const utcMinutes = d.getUTCMinutes();
console.log(utcMinutes);  // 0
```

## `getUTCSeconds()`
Get UTC seconds (0-59).

```javascript
const utcSeconds = d.getUTCSeconds();
console.log(utcSeconds);  // 28
```

## `getUTCMilliseconds()`
Get UTC milliseconds (0-999).

```javascript
const utcMilliseconds = d.getUTCMilliseconds();
console.log(utcMilliseconds);  // 230
```

## `getTimezoneOffset()`
Returns the difference (in minutes) between local time and UTC time.

```javascript
const diff = new Date().getTimezoneOffset();
console.log(diff);
```

## Get Date using Template Literals
Get date formatted using template literals.

```javascript
const formattedDate = `${d.getFullYear()}-${d

.getMonth()}-${d.getDate()}`;
console.log(formattedDate);  // 2105-2-11
```

## Date Format for Different Countries
Format date according to different country formats.

```javascript
let today = new Date();
let formattedDate = Intl.DateTimeFormat('en-US').format(today);
console.log(formattedDate);  // 6/4/2023

formattedDate = Intl.DateTimeFormat('en-IN').format(today);
console.log(formattedDate);  // 4/6/2023

formattedDate = Intl.DateTimeFormat('en-GB').format(today);
console.log(formattedDate);  // 04/06/2023

formattedDate = Intl.DateTimeFormat('en-GB', { month: 'long' }).format(today);
console.log(formattedDate);  // June
```

## Shorter Way to Format Date
Format date using `toLocaleString()`.

```javascript
formattedDate = today.toLocaleString('en-GB', { month: 'long' });
console.log(formattedDate);  // June

formattedDate = today.toLocaleString('en-IN');
console.log(formattedDate);  // 4/6/2023, 5:46:14 pm

formattedDate = today.toLocaleString('default');
console.log(formattedDate);  // 4/6/2023, 5:46:14 PM
```

## Date and Time Formatting Options
Format date and time with specified options.

```javascript
const options = {
    year: 'numeric',
    month: 'long',
    weekday: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Europe/Moscow',
};

formattedDate = today.toLocaleString('default', options);
console.log(formattedDate); // Sunday, June 4, 2023 at 3:33:47 PM
```