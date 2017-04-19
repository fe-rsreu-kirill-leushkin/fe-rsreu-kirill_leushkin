(function(){
	'use strict';
	
	
	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	
	function isString( string ) {
		return typeof string === 'string';
	}
	
	
	function palindrome ( string ) {
		if(!isString) throw new Error('parametr(s) should be a string');
		
		var i = 0;
		var j = string.length - 1;
		for (i, j; i < j; i++, j--){
			if (string[i] == ' ') i++;
			if (string[j] == ' ') j--;
			//console.log(string[i], string[j]);
			if (string[i] != string[j]) return false;
		}
		return true;
	}


	function combinations ( string ) {
		if(!isString) throw new Error('parametr(s) should be a string');
		
		var output = '';
		for (var i = 0; i < string.length; i++) {

			for (var j = i; j < string.length; j++){
				output = output + string[j];
				console.log(output);
			}
			output = '';
		}
		
		return true;
	}

	function alphabetOrder ( string ) {
		if(!isString) throw new Error('parametr(s) should be a string');
		

		var size = string.length;
		var arr = string.split('');
		var output = '';

		for (var i = 0; i < size; i++){

			for (var j = size - 1; j > i; j--){

				if(arr[j] < arr[j - 1]) {
					var temp = arr[j];
					arr[j] = arr[j - 1];
					arr[j - 1] = temp;
				}
			}
		}
		
		for (var i = 0; i < arr.toString().length / 2; i++) {
			if(arr[i] != ',') output += arr[i];
		}
		
		return output;
	}

	function longestWord ( string ) {
		if(!isString) throw new Error('parametr(s) should be a string');
		
		var temp = '';
		var max = '';

		for (var i = 0; i < string.length; i++) {

			if (string[i] != ' ') {
				temp = temp + string[i];

				if (temp.length > max.length) max = temp;

			} else {
				temp = '';
			}	
		}
		return max;
	}

	function extractUnique ( string ) {
		if(!isString) throw new Error('parametr(s) should be a string');
		
		var size = string.length;
		var arr = string.split('');
		var output = '';
		
		for (var i = 0; i < size; i++) {
			for (var j = size; j > 0; j--) {
				if ( (i != j) && (arr[i] == arr[j]) ) arr[j] = '';
			}
		}
	
		for (var i = 0; i < size; i++) {
			if(arr[i] != ',') output += arr[i];
		}
		
		return output;
	}


	console.log(palindrome('a man a plan a canal panama'));
	console.log(palindrome('was it a car or a cat i saw'));
	console.log(palindrome('шалаш'));

	combinations('dog');

	console.log(alphabetOrder('begafdc'));
	console.log(longestWord('who is longest word'));
	console.log(extractUnique('thequickbrownfoxjumpsoverthelazydog'));
}());