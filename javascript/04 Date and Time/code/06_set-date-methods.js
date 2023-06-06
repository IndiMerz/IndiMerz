// Set Date methods are used for setting a part of a date
const d = new Date();


// 1. setFullYear() : Set the year (optionally month and day)
d.setFullYear(1849);
console.log(d);  // Mon Jun 04 1849 18:16:03 GMT+0553 (India Standard Time)

// month and day)
d.setFullYear(1849, 7, 13);
console.log(d);  // Sun Aug 12 1849 18:19:23 GMT+0553 (India Standard Time)


// 2. The setMonth() method sets the month of a date object (0-11):
d.setMonth(4);
console.log(d);

// 3. The setDate() method sets the day of a date object (1-31):
d.setDate(6);
console.log(d);

//  add days to a date
d.setDate(d.getDate() + 72);
console.log(d);  // 1849-07-17


// 3. The setDate() method sets the day of a date object (1-31):
d.setDate(6);
console.log(d);


// 4. The setHours() method sets the hours of a date object (0-23):
d.setHours(7);
console.log(d);


// 5. The setMinutes() method sets the minutes of a date object (0-59):
d.setMinutes(34);
console.log(d);


// 6. The setSeconds() method sets the seconds of a date object (0-59):
d.setSeconds(12);
console.log(d);


// 7. setMilliseconds()	Set the milliseconds (0-999)
d.setMilliseconds(149);
console.log(d);


// 8. Set the time (milliseconds since January 1, 1970)
d.setTime(1495323432353);
console.log(d);  // 2017-05-20T23:37:12.353Z