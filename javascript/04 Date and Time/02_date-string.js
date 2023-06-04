// new Date(date string) : creates Specific date using a string

let specificDate;

// ISO Date ('YYYY-MM-DD') or ('YYYY-MM') or ('YYYY')
specificDate = new Date('2005-12-16');
console.log(specificDate); // Sat Dec 17 2005 05:30:00 GMT+0530 (India Standard Time)

specificDate = new Date('2005-12');
console.log(specificDate); // Thu Dec 01 2005 05:30:00 GMT+0530 (India Standard Time)

specificDate = new Date('2005');
console.log(specificDate); // Sat Jan 01 2005 05:30:00 GMT+0530 (India Standard Time)


// Short Date ("MM/DD/YYYY") or (MM-DD-YYYY)
specificDate = new Date('03/12/2016');
console.log(specificDate); // Sat Mar 12 2016 GMT+0530 (India Standard Time)

specificDate = new Date('03-12-2016');
console.log(specificDate); // Sat Mar 12 2016 GMT+0530 (India Standard Time)


// Long Date ('MMM DD YYYY') or (' DD MMM YYYY')
specificDate = new Date('Mar 12 2016');
console.log(specificDate); // Sat Mar 12 2016 GMT+0530 (India Standard Time)

specificDate = new Date('12 Mar 2016');
console.log(specificDate); // Sat Mar 12 2016 GMT+0530 (India Standard Time)

// month can be written in full
specificDate = new Date('12 March 2016');
console.log(specificDate); // Sat Mar 12 2016 GMT+0530 (India Standard Time)


// getting date and time ('YYYY-MM-DDTHH:MM:SSZ')

let specificDateWithTime;

specificDateWithTime = new Date('2025-02-05T13:10:30Z');
console.log(specificDateWithTime); // Wed Feb 05 2025 13:10:30 GMT+0530 (India Standard Time)

specificDateWithTime = new Date('2025/02/05 13:10:30');
console.log(specificDateWithTime); // Wed Feb 05 2025 13:10:30 GMT+0530 (India Standard Time)

// to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead
specificDateWithTime = new Date('2015-03-25T12:00:00-06:30');
console.log(specificDateWithTime); // Thu Mar 26 2015 00:00:00 GMT+0530 (India Standard Time)

specificDateWithTime = new Date('2015-03-25T12:00:00-02:30');
console.log(specificDateWithTime); // Wed Mar 25 2015 20:00:00 GMT+0530 (India Standard Time)

specificDateWithTime = new Date('2015-03-25T12:00:00+02:30');
console.log(specificDateWithTime); // Wed Mar 25 2015 15:00:00 GMT+0530 (India Standard Time)
