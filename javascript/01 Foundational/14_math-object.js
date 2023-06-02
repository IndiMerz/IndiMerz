

        //printing the math object
        let m = Math;
        console.log(m);

        //printing the constrants from math object
        console.log("The value of Math.E is ", Math.E)
        console.log("The value of Math.PI is ", Math.PI)
        console.log("The value of Math.LN2 is ", Math.LN2)
        console.log("The value of Math.SQRT1_2 is ", Math.SQRT1_2)
        console.log("The value of Math.LOG2E is ", Math.LOG2E)


        //printing functions from math object
        
        let a = 26.894304
        let b = 42

        console.log("The value of a and b is ", a, b);
        console.log("The value of rounded a and b is ", Math.round(a), Math.round(b));


        console.log("3 raise to power 4 is ", Math.pow(3,4));
        console.log("8 raise to power 6 is ", Math.pow(8,6));

        console.log("square root of 33 is ", Math.sqrt(33));
        
        //ceil and floor
        console.log("3.4 rounded up to nearest integer is ", Math.ceil(3.4));
        console.log("3.4 rounded down to nearest integer is ", Math.floor(3.4));

        //abs fn
        console.log("absolute value of 4.87 is ", Math.abs(4.87))
        console.log("absolute value of -4.87 is ", Math.abs(-4.87))
        
        // trignometric fn 
        console.log("value of sin(PI) is ", Math.sin(Math.PI))
        console.log("value of cos(PI) is ", Math.cos(Math.PI))
        console.log("value of tan(PI) is ", Math.tan(Math.PI))
        

    
        //min max fn
        console.log("Minimum value of 43, 34, 29, 42 is ", Math.min(43, 34, 29, 42));
        console.log("Maximum value of 43, 34, 29, 42 is ", Math.max (43, 34, 29, 42));


        //generating random number

        let r = Math.random();
        console.log('The random number is ', Math.round(r))
        console.log('The random number is ', r)
        //by default it generates number b/w 0 to 1



        // TO generate no. b/w specific number line
        // random number b/w (a,b) = a + (b-a)*Math.random

        let p = 50;
        let q = 60;

        let r_50_60 = p+(q-p)*Math.random();
        console.log("The Random no. b/w 50 to 60 is ", r_50_60);
        console.log("The Random no. b/w 50 to 60 is ", Math.round(r_50_60));