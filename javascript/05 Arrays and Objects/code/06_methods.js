const obj1 = {
	name: 'alex',
	age: '34',
	email: 'alex@contact.com',
};

const obj2 = {
    city: 'new york',
    salary: '$40k'
};

const obj3 = { ...obj1, ...obj2};
console.log(obj3);
/*{
    name: 'alex',
    age: '34',
    email: 'alex@contact.com',
    city: 'new york',
    salary: '$40k'
  }
  */

  // another way
  const obj4 = Object.assign({}, obj1, obj2);
  console.log(obj4);


  // array of objects

  const userNames = [
    {id: 'usr1', password: 'usr1@password'},
    {id: 'usr2', password: 'usr2@password'},
    {id: 'usr3', password: 'usr3@password'}
  ];

   let m;

   m = userNames[1];
   console.log(m);
   // { id: 'usr2', password: 'usr2@password' }

   m = userNames[2].password;
   console.log(m);
   // usr3@password


    // to get key properties
   m = Object.keys(obj1);

   // to get no. of key values of an object
   m = Object.keys(obj1).length;


   // to get values of properties
   m = Object.values(obj1);


   // to get both key and value in pair
   m = Object.entries(obj1);

   // boolean to check properties exists or not
   m = obj1.hasOwnProperty('name'); // true
   m = obj1.hasOwnProperty('age'); // true
   m = obj1.hasOwnProperty('status'); // flase



   console.log(m);