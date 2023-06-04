// Date objects are created with the 'new Date()' constructor
// creates a date object with the current date and time

const currentDate = new Date();
console.log(currentDate);  // Sun Jun 04 2023 11:34:07 GMT+0530 (India Standard Time)


// Displaying Dates
// by default output dates is in full text string format

// displaying a date object in HTML automatically converted dates to a string, with the toString() method
console.log(new Date().toString());


// toDateString() method converts a date to a more readable format
console.log(new Date().toDateString());


// toUTCString() method converts a date to a string using the UTC standard
console.log(new Date().toUTCString());