
        // objects

        let employee = {
            name: "alex",
            salary: 20,
            profession: 'developer',
            "space 1 2": 'this is how we give space',
        }
        console.log(employee);

        employee.profession;


        // arrays

        let names = [23, 14, 31, 'henry', undefined];
        console.log(names[2]);


        let name = new Array(3, 29, 11, 'rick', undefined);

        // uses 'new' keyword to make objects
        console.log(name);
        
        console.log(name.length);
        name = name.sort();
        name.push('this is pushed');
        console.log(name);


        let data = new Array(32,23);
        console.log(data)
        data = data.sort();

        // for making array of 35  length
        let len = new Array(35);
        console.log(len)
        len = len.sort();
