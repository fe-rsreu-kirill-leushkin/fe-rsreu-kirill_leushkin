(function () {
	'use strict';
	
	//1. Write a function which defines if a given value is a number. 
	//Use this function in the next tasks to define if a given value 
	//is a number;
	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	
	//2. Write a function which defines if a given number is negative 
	//or not. Do not forget to check if the given value is a number.
	function isNegative(value) {
		if (!isNumber(value)) {
			throw new Error('parametr(s) should be a number');
		}
		
		return value < 0;
	}
	
	//3. Write a function which defines if a given number is positive or not.
	//Do not forget to check if the given value is a number.
	function isPositive(value) {
		if (!isNumber(value)) {
			throw new Error('parametr(s) should be a number');
		}
		
		return value > 0;
	}
	
	//4. Write a function which calculates a factorial for a given number
	//(use recursion in your algorithm). Do not forget to check if the given value is a number.
	function factorial(value) {
		if (!isNumber(value) && !isPositive(value)) {
			throw new Error('parametr(s) should be a number');
		}
			
		return (value !== 0) ? value * factorial(value - 1) : 1;
	}
	
	//5. Write a function which returns if the number is prime or not. 
	//Do not forget to check if the given value is a number.
	function isPrime(value) {
		if (!isNumber(value)) {
			throw new Error('parametr(s) should be a number');
		}
		
		for (var j = 2; j < value; j++) {
			if (value % j == 0) return false;
		}
		
		return true;
	}
	
	console.log(isNumber('javascript'));
	console.log(isNumber(5));
	console.log(isNegative(2));
	console.log(isNegative(-2));
	console.log(isPositive(2));
	console.log(isPositive(-2));
	console.log(factorial(3));
	console.log(isPrime(7));
	console.log(isPrime(10));
})();