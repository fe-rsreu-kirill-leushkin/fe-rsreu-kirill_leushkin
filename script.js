(function () {
	'use strict';
	
	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	
	function showVariables(a, b) {
		console.log(a, b);
	}

	function trangleArea(bottom, height) {
		if (isNumber(bottom) || isNumber(height)) throw new Error('each element of array should be a value');
		
		if ( bottom < 0 || height < 0 ) {
			throw new Error('each element of array should be a positive number');
		}
		
		return 0.5 * (bottom * height);
	}

	function arrayReverseFor(array) {
		var i = 0;
		var j = array.length - 1;
		var temp;
		
		
		if (!Array.isArray(array)) {
			throw new Error('each element of array should be an array');
		}
		
		for (var i = 0; i < array.length; i++) {
			if (isNumber( array[i] )) throw new Error('each element of array should be a value');
		}
		
		for (i, j; i < j; i++, j--) {
			temp = array[j];
			array[j] = array[i];
			array[i] = temp;
		}
		return array;
	}

	function arrayReverseWhile(array) {
		var i = 0;
		var j = array.length - 1;
		var temp;
		
		
		if (!Array.isArray(array)) {
			return 0;
		}
		
		for (var i = 0; i < array.length; i++) {
			if (isNumber( array[i] )) throw new Error('each element of array should be a value');
		}

		do {
			
			temp = array[j];
			array[j] = array[i];
			array[i] = temp;
			
			i++;
			j--;
			
		} while ( i < j );

		return array;
	}


	function arrayReverseDoWhile(array) {
		var i = 0;
		var j = array.length - 1;
		var temp;
		
		
		if (!Array.isArray(array)) {
			throw new Error('each element of array should be an array');
		}
		
		for (var i = 0; i < array.length; i++) {
			if (isNumber( array[i] )) throw new Error('each element of array should be a value');
		}

		while ( i < j ) {
			temp = array[j];
			array[j] = array[i];
			array[i] = temp;
			
			i++;
			j--;
		}

		return array;
	}

	function differenceIncDec(i) {
		var temp = i;
		
		if (isNumber( i )) throw new Error('each element of array should be a value');
		
		window.console.log('your variable: ' + i);
		window.console.log('variable i after increment: ' + (i++) + '??? the same ???');
		window.console.log('but your variable has changed: ' + i);
		window.console.log('if you used decrement i should be : ' + (++temp));

	}

	function isPosNeg( i ) {
		
		if (isNumber( i )) return 0;
		
		if (i < 0) window.console.log(' negative value');

		else if (i > 0) window.console.log(' positive value');

		else window.console.log(' equal 0');
		
		return 1;
	}

	function askName() {
		var name = prompt('tell me your name');
		alert('hello ' + name);
	}

	function factorial( value ) {
		if (isNumber( value )) return 0;
		
		return (value !== 1) ? value * factorial( value - 1 ) : 1;
	}
	
	var one = 1, two = 2;

	showVariables(one, two);
	window.console.log(trangleArea(3, 4));
	window.console.log(arrayReverseFor([1, 2, 3, 4, 5, 6, 7, 8]));
	window.console.log(arrayReverseWhile([1, 2, 3, 4, 5, 6, 7, 8]));
	window.console.log(arrayReverseDoWhile([1, 2, 3, 4, 5, 6, 7, 8]));
	differenceIncDec(5);
	isPosNeg(1);
	askName();
	window.console.log(factorial(3));
}());