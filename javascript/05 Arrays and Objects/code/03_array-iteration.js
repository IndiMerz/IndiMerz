// Array.forEach
const faang = ['facebook', 'apple', 'amazon', 'netflix', 'google'];

// to get one value, elements
faang.forEach((item) => {
	console.log(item);
});

// to get two values, elements and numbers
faang.forEach((item, index) => {
	console.log(`${index} - ${item}`);
});

// to get 3 values, elements and numbers and whole array
faang.forEach((item, index, arr) => {
	console.log(`${index} - ${item} : ${arr}`);
});
/*
0 - facebook : facebook,apple,amazon,netflix,google
1 - apple : facebook,apple,amazon,netflix,google
2 - amazon : facebook,apple,amazon,netflix,google
3 - netflix : facebook,apple,amazon,netflix,google
4 - google : facebook,apple,amazon,netflix,google
*/

// calling by function name
const getFaang = (names) => {
	console.log(names);
};
faang.forEach(getFaang);

// object under array
const searchEngines = [
	{ name: 'Google', url: 'https://www.google.com' },
	{ name: 'Yahoo', url: 'https://www.yahoo.com' },
	{ name: 'Bing', url: 'https://www.bing.com' },
	{ name: 'Ask', url: 'https://www.ask.com' },
];

searchEngines.forEach((allEngine) => {
	console.log(allEngine.url);
});

//  Array.filter

const numbers = [0, 1, 2, 3, 4, 5, , 6, 7, 8, 9, 10];

const getEven = numbers.filter((value) => {
	return value % 2 === 0;
});

console.log(getEven);

// by using forEach
const divOf3 = [];
numbers.forEach((value) => {
	if (value % 3 === 0) {
		divOf3.push(value);
	}
});
console.log(divOf3);

const compaines = [
	{ name: 'Company One', category: 'Finance', start: 1982, end: 2005 },
	{ name: 'Company Two', category: 'Retail', start: 1965, end: 1993 },
	{ name: 'Company Three', category: 'Finance', start: 2002, end: 2007 },
	{ name: 'Company Four', category: 'Technology', start: 1992, end: 2002 },
	{ name: 'Company Five', category: 'Auto', start: 1978, end: 2015 },
	{ name: 'Company Six', category: 'Retail', start: 1981, end: 2012 },
	{ name: 'Company Seven', category: 'Finance', start: 1987, end: 2005 },
	{ name: 'Company Eight', category: 'Technology', start: 1986, end: 2004 },
	{ name: 'Company Nine', category: 'Auto', start: 1962, end: 2009 },
	{ name: 'Company Ten', category: 'Retail', start: 1979, end: 2015 },
	{ name: 'Company Eleven', category: 'Finance', start: 1982, end: 2003 },
	{ name: 'Company Twelve', category: 'Auto', start: 1986, end: 2005 },
	{ name: 'Company Thirteen', category: 'Technology', start: 1963, end: 2000 },
	{ name: 'Company Fourteen', category: 'Retail', start: 1982, end: 1995 },
	{ name: 'Company Fifteen', category: 'Auto', start: 1952, end: 1979 },
];

// get ratail companies
const getRetail = compaines.filter((company) => {
	return company.category === 'Retail';
});

console.log(getRetail);

// get companies which started after 1980 and ended before 2005
const getClosedCompanies = compaines.filter((company) => {
	return company.start >= 1980 && company.end < 2005;
});

console.log(getClosedCompanies);

// lasted 10 or more years
const decadeCompanies = compaines.filter((company) => {
	return compaines.end - compaines.start >= 10;
});
console.log(decadeCompanies);





// Array.map
const oddNums = [1, 3, 5, 7, 9];

const get3x = oddNums.map((number) => {
	return number * 3;
});
console.log(get3x); // [ 3, 9, 15, 21, 27 ]

// by forEach
const getDouble = [];
oddNums.forEach((number) => {
	return getDouble.push(number * 2);
});
console.log(getDouble); // [ 2, 6, 10, 14, 18 ]

const startups = [
	{ name: 'Startup One', category: 'Finance', start: 1982, end: 2005 },
	{ name: 'Startup Two', category: 'Retail', start: 1965, end: 1993 },
	{ name: 'Startup Three', category: 'Finance', start: 2002, end: 2007 },
	{ name: 'Startup Four', category: 'Technology', start: 1992, end: 2002 },
	{ name: 'Startup Five', category: 'Auto', start: 1978, end: 2015 },
	{ name: 'Startup Six', category: 'Retail', start: 1981, end: 2012 },
	{ name: 'Startup Seven', category: 'Finance', start: 1987, end: 2005 },
	{ name: 'Startup Eight', category: 'Technology', start: 1986, end: 2004 },
	{ name: 'Startup Nine', category: 'Auto', start: 1962, end: 2009 },
	{ name: 'Startup Ten', category: 'Retail', start: 1979, end: 2015 },
	{ name: 'Startup Eleven', category: 'Finance', start: 1982, end: 2003 },
	{ name: 'Startup Twelve', category: 'Auto', start: 1986, end: 2005 },
	{ name: 'Startup Thirteen', category: 'Technology', start: 1963, end: 2000 },
	{ name: 'Startup Fourteen', category: 'Retail', start: 1982, end: 1995 },
	{ name: 'Startup Fifteen', category: 'Auto', start: 1952, end: 1979 },
];

// get all startup names in an array
const getNames = startups.map((startup) => {
	return startup.name;
});
console.log(getNames);

// get startup and category
const getStartupNCat = startups.map((startup) => {
	return {
		name: startup.name,
		category: startup.category,
	};
});

console.log(getStartupNCat);

// each startup in year
const timeFrame = startups.map((startup) => {
	return {
		name: startup.name,
		duration: startup.end - startup.start + ' years',
	};
});

console.log(timeFrame);

// chaining
const primeNum = [2, 3, 5, 7, 11, 13];

const rootN2x = primeNum
	.map((value) => {
		return Math.sqrt(value).toFixed(2);
	})
	.map((sqrt) => {
		return sqrt * 2;
	});

console.log(rootN2x);


// shorter way

const doubleNroot = primeNum
    .map((value) => value*2)
    .map((root) => Math.sqrt(root).toFixed(2));

    console.log(doubleNroot);



// chaining different methods
const getSingleDigiNumNDoubleIt = primeNum
    .filter((singleDigit) => {
        return singleDigit < 10;
    })

    .map((doubleIt) => {
        return doubleIt * 2;
    })


    console.log(getSingleDigiNumNDoubleIt);



    // Array.reduce 
    const price = [13, 42, 21, 41, 54, 64 ];

    const getTotal = price.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0)
    console.log(getTotal);


    // by using for loop
    const getSum = () => {
        let acc = 0;
        for (const curr of price){
            acc += curr
        }
        return acc;
    }

    console.log(getSum());



    const cart = [
        {id: 1, name: 'Phone', price: 249},
        {id: 2, name: 'Earbuds', price: 99},
        {id: 3, name: 'Laptop', price: 799},
        {id: 4, name: 'Chair', price: 148}
    ];

    const getTotalPrice = cart.reduce((acc, curr)=>{
        return acc + curr.price;
    }, 0)

    console.log(getTotalPrice);