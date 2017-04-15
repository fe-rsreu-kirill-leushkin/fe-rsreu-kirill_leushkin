(function () {
	'use strict';
	
	function isString( string ) {
		if (typeof string === 'string') {
			return true;
		}
		return false;
	}
	
	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	
	function isArray( array ) {
		return Array.isArray(array);
	}
	
	function remover( array ) {
		if (!isArray(array)) return console.log('parameter(s) should be an array');
		
		var key = [null, 0, '', false, undefined, NaN];
		
		for(var i = 0; i < array.length; i++) {
			
			for(var j = 0; j < key.length; j++) {
				
				if ( (array[i] === key[j]) || (typeof array[i] === 'number' && !isNumber(array[i])) ) {	
					array[i] = 'unexpected value';		
				}
			}
		}
		return array;
	}
	
	function max( array ) {
		if (!isArray(array)) return console.log('parameter(s) should be an array');
		
		var max = array[0];
		
		for(var i = 0; i < array.length; i++) {
			if (array[i] > max) max = array[i];
		}
		
		return max;
	}
	
	function min( array ) {
		if (!isArray(array)) return console.log('parameter(s) should be an array');
		
		var min = array[0];
		
		for(var i = 0; i < array.length; i++) {
			if (array[i] < min) min = array[i];
		}
		
		return min;
	}
	
	function convert ( string ) {
		if(!isString(string)) return console.log('parameter(s) should be a string');
		return string.split(' ');
	}
	
	function mostFreq ( array ) {
		if (!isArray(array)) return console.log('parameter(s) should be an array');
		
		var count = 0;
		var max = 0;
		var output = '';
		
		for (var i = 0; i < array.length; i++) {
			for (var j = 0; (j < array.length) && (i != j); j++) {
				if (array[i] === array[j]) count++;
				
			}
			if (max < count) {
				max = count;
				output = array[i];
			}
		}
		return output;
	}
	
	function cloneArray( array ) {
		if (!isArray(array)) return console.log('parameter(s) should be an array');
		
		var output = array;
		return output;
	}
	
	function removeDuplicate( array ) {
		if (!isArray(array)) return console.log('parameter(s) should be an array');
		
		for (var i = 0; i < array.length; i++) {
			for (var j = 0; (j < array.length) && (i != j); j++) {
				if (array[i].toUpperCase() === array[j].toUpperCase())	array[i] = array[j] = '';
			}
		}
		return array;
	}
	
	function mergeArrays( arr1, arr2 ) {
		if (!isArray(arr1) || !isArray(arr2)) return console.log('parameter(s) should be an array');
		
		return arr1.concat(arr2);
	}
	
	function removeSpec( array, key ) {
		if (!isArray(array) || !isArray(key)) return console.log('parameter(s) should be an array');
		
		for(var i = 0; i < array.length; i++) {
			if (array[i] == key) delete array[i];
		}
		return array;
	}

	var library = [
		{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
		{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
		{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
	];
	
	
	
	function sort( array ) {
		if (!isArray(array)) return console.log('parameter(s) should be an array');
		
		var strcmp = function ( obj1, obj2) {
			return  obj1.title.charCodeAt(0) - obj2.title.charCodeAt(0);
		}
		
		array.sort( strcmp );
		return array;
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
	console.log(removeSpec([1,2,3,'la'],'la' ));
	console.log(sort(library));
	
})();