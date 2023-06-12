const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];

  // get name and email of young peoples who are under 25

  const listing = people.filter((list) => {
    return list.age <= 25;
  });

  const youngPeeps = listing.map((details) => {
    return {
        name: `${details.firstName} ${details.lastName}`,
        email: details.email
    }

  });

  console.log(youngPeeps);

  
  // by chaining 

  const youngPeoples = people
  .filter((list)=> list.age <= 25)

  .map((details) => {
    return {
        name: `${details.firstName} ${details.lastName}`,
        email: details.email
    }
  })
  console.log(youngPeoples);