(function(){
	'use strict';
	
	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	
	function isNegative ( value ) {
		if (!isNumber) return console.log('parametr(s) should be a number');
		
		return (value < 0) ? true : false;
	}
	
	function isPositive ( value ) {
		if (!isNumber) return console.log('parametr(s) should be a number');
		
		return (value < 0) ? false : true;
	}
	
	function factorial( value ) {
		if (!isNumber) return console.log('parametr(s) should be a number');
			
		return (value !== 1) ? value * factorial( value - 1 ) : 1;
	}
	
	function isPrime ( value ) {
		if (!isNumber) return console.log('parametr(s) should be a number');
		
		if (Math.ceil( value ) == value) return true;
		else return false;
	}
	
	console.log(isNumber("javascript"));
	console.log(isNumber(5));
	console.log(isNegative(2));
	console.log(isNegative(-2));
	console.log(factorial(3));
	console.log(isPrime(20.2));
	console.log(isPrime(10));
})();