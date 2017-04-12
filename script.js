(function () {
	'use strict';

	function showVariables(a, b) {
		window.console.log(a, b);
	}

	function trangleArea(bottom, height) {
		return 0.5 * (bottom * height);
	}

	function arrayReverse(array) {
		var i = 0;
		var j = array.length - 1;
		var temp;
		
		for (i, j; i < j; i++, j--) {
			temp = array[j];
			array[j] = array[i];
			array[i] = temp;
		}
		
		/*
		do {
			
			temp = array[j];
			array[j] = array[i];
			array[i] = temp;
			
			i++;
			j--;
			
		} while ( i < j );
		
		
		while ( i < j ) {
			temp = array[j];
			array[j] = array[i];
			array[i] = temp;
			
			i++;
			j--;
		}
		*/

		return array;
	}

	function differenceIncDec(i) {
		var temp = i;
		window.console.log('your variable: ' + i);
		window.console.log('variable i after increment: ' + (i++) + '??? the same ???');
		window.console.log('but your variable has changed: ' + i);
		window.console.log('if you used decrement i should be : ' + (++temp));

	}

	function isPosNeg() {
		var i = 0;
		for (i; i < arguments.length; i++) {

			if (typeof arguments[i] !== 'number') {
				window.console.log('argument[' + i + '] is NAN');
				continue;
			}

			if (arguments[i] < 0) window.console.log('argument[' + i + '] is negative value');
			
			else if (arguments[i] > 0) window.console.log('argument[' + i + '] is positive value');
			
			else window.console.log('argument[' + i + '] is equal 0');
		}
		
		return 1;
	}

	function askName() {
		var name = prompt('tell me your name');
		alert('hello ' + name);
	}

	function factorial( value ) {
		return (value !== 1) ? value * factorial( value - 1 ) : 1;
	}
	
	
	
	
	var one = 1, two = 2;

	showVariables(one, two);
	window.console.log(trangleArea(3, 4));
	window.console.log(arrayReverse([1, 2, 3, 4, 5, 6, 7, 8]));
	differenceIncDec(5);
	isPosNeg(1, -1, '5', 0.1);
	askName();
	window.console.log(factorial(3));
	
}());




