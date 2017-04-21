function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

var Calculator = (function (initialResult) {
	'use strict';

	var result = initialResult;

	function add() {
		for (var i = 0; i < arguments.length; i++) {
			if (!isNumber(arguments[i])) {
				throw new Error('parametr(s) should be a number');
			}
		}
		
		for (var i = 0; i < arguments.length; i++) {
			result += arguments[i];	
		}
		
		return add;
	}

	function subtract() {
		for (var i = 0; i < arguments.length; i++) {
			if (!isNumber(arguments[i])) {
				throw new Error('parametr(s) should be a number');
			}
		}
		
		for (var i = 0; i < arguments.length; i++) {
			result -= arguments[i];	
		}
		
		return subtract;
	}

	function divide() {
		for (var i = 0; i < arguments.length; i++) {
			if (!isNumber(arguments[i])) {
				throw new Error('parametr(s) should be a number');
			}
		}
		
		for (var i = 0; i < arguments.length; i++) {
			result /= arguments[i];	
		}
		
		return divide;
	}

	function multiply() {
		for (var i = 0; i < arguments.length; i++) {
			if (!isNumber(arguments[i])) {
				throw new Error('parametr(s) should be a number');
			}
		}
		
		for (var i = 0; i < arguments.length; i++) {
			result /= arguments[i];	
		}
		
		return multiply;
	}

	function getResult() {
		return result;
	}

	function reset() {
		return result = 0;
	}

	return {
		add: add,
		subtract: subtract,
		divide: divide,
		multiply: multiply,
		getResult: getResult,
		reset: reset
	};
}(50));

Calculator.add(1, 1)(2, 2)(1, 9)(4);
console.log(Calculator.getResult());
Calculator.subtract(2)(2,2);
console.log(Calculator.getResult());
Calculator.divide(2);
console.log(Calculator.getResult());
Calculator.multiply(3, 1.5);
console.log(Calculator.getResult());