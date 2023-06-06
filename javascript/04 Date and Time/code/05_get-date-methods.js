let methods;
const d = new Date('Mar 11 2105 12:30:28:230');

// getFullYear() : Get year as a four digit number (yyyy)
methods = d.getFullYear();
console.log(methods);  // 2105

// getMonth() :	Get month as a number (0-11)
methods = d.getMonth();
console.log(methods);  // 2

// getDate() : Get day as a number (1-31)
methods = d.getDate();
console.log(methods);  // 11

// getDay() : Get weekday as a number (0-6)
methods = d.getDay();
console.log(methods);  // 3

// getHours() : Get hour (0-23)
methods = d.getHours();
console.log(methods);  // 12

// getMinutes()	: Get minutes (0-59)
methods = d.getMinutes();
console.log(methods);  // 30

// getSeconds()	: Get seconds (0-59)
methods = d.getSeconds();
console.log(methods);  // 28

// getMilliseconds() : Get Milliseconds (0-999)
methods = d.getMilliseconds();
console.log(methods);  // 230

// getTime() : Get time (milliseconds since January 1, 1970)
methods = d.getTime();
console.log(methods);  // 4266198028230



// UTC Date Get Methods

// getFullYear() : Get year as a four digit number (yyyy)
methods = d.getUTCFullYear();
console.log(methods);  // 2105

// getMonth() :	Get month as a number (0-11)
methods = d.getUTCMonth();
console.log(methods);  // 2

// getDate() : Get day as a number (1-31)
methods = d.getUTCDate();
console.log(methods);  // 11

// getDay() : Get weekday as a number (0-6)
methods = d.getUTCDay();
console.log(methods);  // 3

// getHours() : Get hour (0-23)
methods = d.getUTCHours();
console.log(methods);  // 07

// getMinutes()	: Get minutes (0-59)
methods = d.getUTCMinutes();
console.log(methods);  // 00

// getSeconds()	: Get seconds (0-59)
methods = d.getUTCSeconds();
console.log(methods);  // 28

// getMilliseconds() : Get Milliseconds (0-999)
methods = d.getUTCMilliseconds();
console.log(methods);


// getTimezoneOffset() : returns the difference (in minutes) between local time an UTC time
let diff = new Date().getTimezoneOffset();
console.log(diff);


// Get Date by template literals
console.log(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`);  // 2105-2-11


// Date Format for countries
let today = new Date();
methods = Intl.DateTimeFormat('en-US').format(today);
console.log(methods);  // 6/4/2023

methods = Intl.DateTimeFormat('en-IN').format(today);
console.log(methods);  // 4/6/2023

methods = Intl.DateTimeFormat('en-GB').format(today);
console.log(methods);  // 04/06/2023

methods = Intl.DateTimeFormat('en-GB', {month:'long'}).format(today);
console.log(methods);  // June


//Shorter way to format
methods = today.toLocaleString('en-GB', {month:'long'});
console.log(methods);  // June

methods = today.toLocaleString('en-IN');
console.log(methods);  // 4/6/2023, 5:46:14 pm

methods = today.toLocaleString('default');
console.log(methods);  // 4/6/2023, 5:46:14 PM



// date and time formatting options
const options =  {
    year: 'numeric',
    month: 'long',
    weekday: 'long',
    day: 'numeric',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Europe/Moscow',
};

methods = today.toLocaleString('default', options);
console.log(methods); // Sun, June 4, 2023 at 3:33:47 PM