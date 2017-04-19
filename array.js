(function () {
	'use strict';
	
	function isString(string) {
		return typeof string === 'string';
	}
	
	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	
	
	//1. Write a function which defines if a given value is an array. 
	//Use this function in the next tasks to define if a given value is 
	//an array;
	function isArray(array) {
		return Array.isArray(array);
	}
	
	//2. Write a JavaScript function to remove. 'null', '0', '""', 'false',
	//'undefined' and 'NaN' values from an array
	function remover(array) {
		if (!isArray(array)) {
			throw new Error('parameter(s) should be an array');
		}
		
		for (var i = 0; i < array.length; i++) {
			if (!array[i]) {	
				array.splice(i,1);	
			}
		}
		
		return array;
	}
	
	//3. Write a JavaScript function to find the highest value in an array
	function max(array) {
		if (!isArray(array)) {
			throw new Error('parameter(s) should be an array');
		}
		
		var max = array[0];
		
		for (var i = 1; i < array.length; i++) {
			if (array[i] > max) {
				max = array[i];
			}
		}
		
		return max;
	}
	
	//4. Write a JavaScript function to find the lowest value in an array
	function min(array) {
		if (!isArray(array)) {
			throw new Error('parameter(s) should be an array');
		}
		
		var min = array[0];
		
		for(var i = 1; i < array.length; i++) {
			if (array[i] < min) {
				min = array[i];
			}
		}
		
		return min;
	}
	
	//5. Write a JavaScript function to split a string and convert it into an array of words;
	function convert(string) {
		if (!isString(string)) {
			throw new Error('parameter(s) should be a string');
		}
		
		return string.split(' ');
	}
	
	
	//6. Write a JavaScript function to find the most frequent item of an array.
	function mostFreq(array) {
		if (!isArray(array)) {
			throw new Error('parameter(s) should be an array');
		}
		
		var count = 0;
		var max = 0;
		var output = '';
		
		for (var i = 0; i < array.length; i++) {
			for (var j = 0; (j < array.length) && (i != j); j++) {
				if (array[i] === array[j]) {
					count++;
				}
				
			}
			
			if (max < count) {
				max = count;
				output = array[i];
			}
		}
		
		return output;
	}
	
	// 7. Write a JavaScript function to clone an array
	
	//
	function cloneArray(array) {
		if (!isArray(array)) {
			throw new Error('parameter(s) should be an array');
		}
		
		return array.slice();
	}
	
	// 8. Write a JavaScript program to remove duplicate strings from a string array
	//(ignore case sensitivity)
	function removeDuplicate(array) {
		if (!isArray(array)) {
			throw new Error('parameter(s) should be an array');
		}
		
		for (var i = 0; i < array.length; i++) {
			for (var j = 0; (j < array.length) && (i != j); j++) {
				if (array[i] === array[j]) {
					array.splice(i,1);
					array.splice(j,1);
				}
			}
		}
		
		return array;
	}
	
	// 9. Write a JavaScript function to merge two arrays and 
	//removes all duplicates elements
	function mergeArrays(arr1, arr2) {
		if (!isArray(arr1) || !isArray(arr2)) {
			throw new Error('parameter(s) should be an array');
		}
		
		return removeDuplicate(arr1.concat(arr2));
	}
	
	
	//10. Write a JavaScript function to remove a specific element
	//from an array
	
	
	// completely remove
	function removeSpec(array, key) {
		if (!isArray(array) || !isString(key)) {
			throw new Error('parameter(s) should be an array');
		}
		
		while (array.indexOf(key) + 1) {
			array.splice(array.indexOf(key), 1);
		}
		
		return array;
	}

	var library = [
		{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
		{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
		{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
	];
	
	
	//11. Write a JavaScript function to sort the following array of objects by title 
	//value using ‘sort’ method
	function sort(array) {
		if (!isArray(array)) {
			throw new Error('parameter(s) should be an array');
		}
		
		return array.sort((obj1, obj2) => obj1.title.charCodeAt(0) - obj2.title.charCodeAt(0));
	}
	
	
	console.log(isArray([]));
	console.log(isArray(2));
	console.log(remover([null, 0, 'asdf', false, undefined, NaN, 1, '']));
	console.log(max([2,3,-1]));
	console.log(min([2,3,-1]));
	console.log(convert('HTML CSS JS ANGULAR NODEJS REACT'));
	console.log(mostFreq([1,'1','s','s','b']));
	console.log(cloneArray([1,2,3]));
	console.log(removeDuplicate(['java','script','Java']));
	console.log(mergeArrays([1,2,3],[4,5,6]));
	console.log(removeSpec([1, 2, 'la', 3, 'la'], 'la'));
	console.log(sort(library));
})();