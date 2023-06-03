        let now = new Date();
        console.log(now);

        //this prints the reference date
        let dt = new Date(3000);
        console.log(dt);

        let newDate = new Date("2081-08-18");
        console.log(newDate);

        // let newdt = new Date(year, month, date, hour, minutes, seconds, milliseconds)

        let newdt = new Date(2031, 3, 13, 7, 12, 23, 31);
        console.log(newdt);

        let year = newDate.getFullYear();
        console.log("The Year is ", year);

        let month = newDate.getMonth();
        console.log("The Month is ", month);

        let date = newDate.getDate();
        console.log("The Date is ", date);

        let hour = newDate.getHours();
        console.log("The Hour is ", hour);


        // setting date and hr 
        newDate.setDate(6);
        newDate.setHours(22);
        console.log(newDate);


        // making clock on webpage
         setInterval(clock, 1000);

         function clock(){
            time.innerHTML = new Date();
         }
