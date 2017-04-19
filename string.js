(function () {
	'use strict';
	
	//1. Write a function which defines if a given value is a string. 
	//Use this function in the next tasks to define if a given value is
	//a string;
	function isString(string) {
		return typeof string === 'string';
	}
	
	//2. Write a function which defines if a given value can be casted to a number;
	function canParseToNumber(char) {
		if (!isString(char)) {
			throw new Error('parameter(s) should be a string');
		}
		
		return !isNaN(parseFloat(char)) && isFinite(char);
	}
	
	//3. Write a function which returns a given string length. Do not 
	//forget to check if the given value is a string;
	function stringLenght(string) {
		if (!isString(string)) {
			throw new Error('parameter(s) should be a string');
		}
		
		return string.length;
	}
	
	
	//4. Write a JavaScript function to convert a string into camel case;
	
	// using string built-in methods
	function camelize(string) {
		if (!isString(string)) {
			throw new Error('parameter(s) should be a string');
		}
		
		var output = '';
		var i = 0;
		var temp = 0;
		
		var sliceIndex = function (i) {
			return string.slice(i, string.length).indexOf(' ');
		};
		
		while (sliceIndex(i) + 1) {
			output = output + string[i].toUpperCase() + string.slice(i + 1, i + sliceIndex(i));
			i = i + sliceIndex(i) + 1;
		}
		
		return output;
	}
	
	//5. Write a JavaScript function to capitalize the first letter of a string;
	
	//
	function capitalize(string) {
		if (!isString(string)) {
			throw new Error('parameter(s) should be a string');
		}
		
		return string[0].toUpperCase() + string.slice(1, string.length);
	}
	
	
	//6. Write a JavaScript function which return the number of occurrences of a given substring 
	//in a string.
	function findOccurrences(key, string) {
		if (!isString(key) || !isString(string)) {
			throw new Error('parameter(s) should be a string');
		}
		
		var count = 0;
		var lastindex = -1;
		
		for (var i = 0; i < string.length; i++) {
			if ( string.indexOf(key, i ) + 1 ) {
				if ( lastindex != string.indexOf(key, i )){
					count++;
				}
				lastindex = string.indexOf(key, i );
			}
		}
		
		return count;
	}
	
	console.log(isString('JavaScript'));
	console.log(isString(2));
	console.log(canParseToNumber('2'));
	console.log(canParseToNumber('daa'));
	console.log(stringLenght('JS'));
	console.log(camelize('Java script ja va scr ipt java'));
	console.log(capitalize('javaScript'));
	console.log(findOccurrences('b','javascript'));
})();