(function(){
	'use strict';
	
	function isString( string ) {
		if (typeof string === 'string') {
			return true;
		}
		return false;
	}
	
	
	function canParseToNumber( char ) {
		if(!isString(char)) return console.log('parameter(s) should be a string');
		
		if( !isNaN(parseFloat(char)) && isFinite(char) ){
			return true;
		}
		return false;
	}
	
	function stringLenght( string ) {
		if(!isString(string)) return console.log('parameter(s) should be a string');
		return string.length;
	}
	
	function camelize( string ) {
		if(!isString(string)) return console.log('parameter(s) should be a string');
		
		var output = '';
		
		for (var i = 0; i < string.length; i++) {
			if( string[i] != ' ' ) {
				output = output + string[i];
			}
			else {
				output = output + string[i+1].toUpperCase();
				i++;
			}
		}
		return output;
	}
	
	function capitalize( string ) {
		if(!isString(string)) return console.log('parameter(s) should be a string');
		
		var output = string[0].toUpperCase();
		for (var i = 1; i < string.length; i++) {
			output = output + string[i];
		}
		return output;
	}
	
	function findOccurrences( key, string ) {
		if(!isString(string)) return console.log('parameter(s) should be a string');
		
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
	console.log(camelize('Java script'));
	console.log(capitalize('javaScript'));
	console.log(findOccurrences('b','javascript'));
})();

