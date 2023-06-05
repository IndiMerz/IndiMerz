# Introduction to JavaScript

> JavaScript is a versatile programming language commonly used for web development. It allows you to add interactivity and dynamic behavior to websites.

## What is JavaScript?

> JavaScript is a high-level, interpreted programming language that runs on the client-side (in the browser) as well as on the server-side (with Node.js). It was originally created to make web pages more interactive and provide dynamic functionality.

## Features of JavaScript

**Dynamic:** JavaScript allows you to update and change elements on a web page in real-time, responding to user interactions and events.

**Versatile:** It can be used for a wide range of tasks, from simple form validation to complex web applications and game development.

**Object-Oriented:** JavaScript supports object-oriented programming (OOP) concepts, allowing you to create and work with objects.

**Browser Compatibility:** JavaScript is supported by all major web browsers, making it a reliable choice for web development.

## What Can You Do with JavaScript?

JavaScript can be used for various purposes, including:

- **Web Development:** You can create interactive web pages, build web applications, handle form submissions, manipulate HTML and CSS, and more.

- **Front-End Development:** JavaScript is commonly used for front-end development along with HTML and CSS to enhance user interfaces and provide dynamic content.

- **Back-End Development:** With Node.js, JavaScript can be used for server-side development, allowing you to build web servers and handle requests and data.

- **Mobile App Development:** Frameworks like React Native and Ionic enable JavaScript to be used for developing cross-platform mobile applications.


## Getting Started
> To get started with JavaScript, you'll need a `text editor` and a `web browser`. You can write JavaScript code in any text editor, save the file with a `.js extension`, and open it in a web browser to see the output. Alternatively, you can use `online code editors` and browser developer tools to experiment with JavaScript.

> Refer to the specific topics and tutorials in this repository for detailed explanations and examples.

 

## Comments in Javascript

```bash
a. single line comment:

// Comment Here

b. multiple line comment:

/*
Comment Here
*/
```
## Working with Console

> In JavaScript, the console is a powerful tool that allows you to interact with your code and display information while developing and debugging. The console provides a way to log messages, view errors, and test code snippets directly in the browser or development environment.


```js
console.log('helo world');
```

Output:

`hello world`


## Console Methods
> Apart from console.log(), there are other useful methods available in the console object:

- **console.error():** Logs an error message to the console
- **console.warn():** Logs a warning message to the console
- **console.info():** Logs an informational message to the console
- **console.clear():** Clears the console

## Console Table
> The console.table() method allows you to display data in a tabular format. It takes an object or an array of objects as a parameter and generates a table with the provided data. 

```js
console.table({name: 'Richards', age: '20', country: 'Poland'});
```

## Console Grouping
> You can group console messages together using the console.group() and console.groupEnd() methods. This helps to organize and structure your console output. 

```js
console.group('Smartphone');
console.log('Apple');
console.log('Samsung');
console.log('OnePlus');
console.groupEnd();
```

## Styling Console Output
> You can apply CSS styles to your console messages using the %c placeholder and providing a CSS style string as a parameter to console.log()

```js
const style = 'padding: 10px; background-color: blue; color: green;';
console.log('%cThis is css in console', style);
```
