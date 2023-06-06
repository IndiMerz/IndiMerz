# Date Object
> Date objects are used to work with dates and times. They provide a way to create, manipulate, and display dates. Here are some key aspects of working with dates in JavaScript:

## Creating a Date Object
> Date objects can be created using the `new Date()` constructor. When called without any arguments, it creates a date object representing the current date and time.

```javascript
const currentDate = new Date();
```

## Displaying Dates
> By default, when you output a date object using `console.log()`, it is converted to a full text string format.

*To display a date object in a more readable format, you can use the following methods:*

- `toString()`: Converts a date object to a string representation.
  ```javascript
  const currentDate = new Date();
  const dateToString = currentDate.toString();
  ```

- `toDateString()`: Converts a date object to a more readable format.
  ```javascript
  const currentDate = new Date();
  const dateToDateString = currentDate.toDateString();
  ```

- `toUTCString()`: Converts a date object to a string using the UTC standard.
  ```javascript
  const currentDate = new Date();
  const dateToUTCString = currentDate.toUTCString();
  ```

### Manipulating Dates
> You can also manipulate date objects to extract specific components of the date, such as the year, month, day, and day of the week. Here are some examples:

```javascript
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const dayOfWeek = date.getDay();
```

- **`getFullYear()`** returns the year
- **`getMonth()`**  returns the month (0-11, where 0 represents January)
- **`getDate()`**  returns the day of the month
- **`getDay()`**  returns the day of the week (0-6, where 0 represents Sunday)