function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

var Calculator = (function () {
  'use strict';

  var result = 0;

  function add(number) {
    if (!isNumber(number)) {
    	throw new Error('parametr(s) should be a number');
    }
    result += number;
    return add;
  }

  function subtract(number) {
    if (!isNumber(number)) {
    	throw new Error('parametr(s) should be a number');
    }
    result -= number;
    return subtract;
  }

  function divide(number) {
    if (!isNumber(number) || number == 0) { // || result == 0) {
    	throw new Error('parametr(s) should be a number which biggest than 0');
    }
    }
    result /= number;
    return divide;
  }

  function multiply(number) {
    if (!isNumber(number)) {
    	throw new Error('parametr(s) should be a number');
    }
    result *= number;
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
  }

}());

Calculator.add(1)(2)(1)(4);
console.log(Calculator.getResult());
Calculator.subtract(2);
console.log(Calculator.getResult());
Calculator.divide(2);
console.log(Calculator.getResult());
Calculator.multiply(3);
console.log(Calculator.getResult());