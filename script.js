(function(){
	'use strict';
	
	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	
	function isString( string ) {
		if (typeof string === 'string') {
			return true;
		}
		return false;
	}
	
	
	function max(a, b) {
		if(!isNumber) return console.log('parametr(s) should be a number');
		
		return (a > b) ? a : b;
	}

	for (var i = 0; i < 9; i++){
		if (i % 2) console.log( i + ' is odd');
		else console.log( i + ' is even');
	}

	function isBlank (string) {
		if(!isString) return console.log('parametr(s) should be a string');
		
		for(var i = 0; i < string.length; i++){
			if (string[i] != ' ') return false;
		}
		return true;
	}

	max(10, -10);
	console.log(isBlank(''));
	console.log(isBlank('   '));
	console.log(isBlank('  asdasd '));
}());