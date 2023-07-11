const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
	it('Should be a function', () => {
		expect(typeof fizzbuzz).toEqual('function');
	});

	it('Should return the number is not divisible by 3 or 5', () => {
		expect(fizzbuzz(2)).toEqual(2);
		expect(fizzbuzz(7)).toEqual(7);
		expect(fizzbuzz(29)).toEqual(29);
		expect(fizzbuzz(19)).toEqual(19);
		expect(fizzbuzz(97)).toEqual(97);
	});

	it('Should return Fizz if number is divisible by 3', () => {
		expect(fizzbuzz(3)).toEqual('Fizz');
		expect(fizzbuzz(6)).toEqual('Fizz');
		expect(fizzbuzz(12)).toEqual('Fizz');
		expect(fizzbuzz(33)).toEqual('Fizz');
	});

	it('Should return Buzz if number is divisible by 5', () => {
		expect(fizzbuzz(5)).toEqual('Buzz');
		expect(fizzbuzz(55)).toEqual('Buzz');
		expect(fizzbuzz(65)).toEqual('Buzz');
		expect(fizzbuzz(80)).toEqual('Buzz');
	});

	it('Should return FizzBuzz if number is divisible by 3 & 5', () => {
		expect(fizzbuzz(15)).toEqual('FizzBuzz');
		expect(fizzbuzz(30)).toEqual('FizzBuzz');
		expect(fizzbuzz(45)).toEqual('FizzBuzz');
		expect(fizzbuzz(90)).toEqual('FizzBuzz');
	});
});
