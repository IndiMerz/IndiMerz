// new Date(year,month,day,hours,minutes,seconds,ms)
// JavaScript counts months from 0 to 11

// a. 7 numbers specify year, month, day, hour, minute, second, and millisecond:
const customDateTimeMs = new Date(1990, 11, 21, 04, 52, 45, 500);
console.log(customDateTimeMs); // Fri Dec 21 1990 04:52:45 GMT+0530 (India Standard Time)


// b. 6 numbers specify year, month, day, hour, minute and second
const customDateTimeSec = new Date(1990, 11, 21, 04, 52, 45);
console.log(customDateTimeSec); // Fri Dec 21 1990 04:52:45 GMT+0530 (India Standard Time)


// c. 5 numbers specify year, month, day, hour and minute
const customDateTimeMin = new Date(1990, 11, 21, 04, 52);
console.log(customDateTimeMin); // Fri Dec 21 1990 04:52:00 GMT+0530 (India Standard Time)


// c. 4 numbers specify year, month, day and hour
const customDateTimeHr = new Date(1990, 11, 21, 04);
console.log(customDateTimeHr); // Fri Dec 21 1990 04:00:00 GMT+0530 (India Standard Time)


// c. 3 numbers specify year, month and day
const customDateTimeDay = new Date(1990, 11, 21);
console.log(customDateTimeDay); // Fri Dec 21 1990 GMT+0530 (India Standard Time)


// c. 2 numbers specify year and month
const customDateTimeMn = new Date(1990, 11);
console.log(customDateTimeMn); // Fri Dec 21 1990 GMT+0530 (India Standard Time)

// supplying only one parameter will be treated as milliseconds, thats why month cant be omited


// One and two digit years will be interpreted as 19xx:
let previousCE;

previousCE = new Date(7, 3, 12);
console.log(previousCE); // Tue Apr 12 1907 00:00:00 GMT+0530 (India Standard Time)

previousCE = new Date(34, 6, 16);
console.log(previousCE); // Mon Jul 16 1934 00:00:00 GMT+0530 (India Standard Time)