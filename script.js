'use strict'

function showVariables(a,b) {
	console.log(a,b);
}

function trangleArea(bottom, height) {
	return 0.5 * (bottom * height);
}

function arrayReverse(array) {
	for(var i = 0, j = array.length - 1; i < j; i++, j--) { // цикл с двух концов, когда встретятся то прекратить, j = array.length - 1 из-за нумерации с 0. Не магия но комента стоит 
		var temp = array[j];
		array[j] = array[i];
		array[i] = temp;
	}
	return array;
}

function differenceIncDec( i ) {
	var temp = i;
	console.log('your variable: ' + i);
	console.log('variable i after increment: ' + (i++) + '??? the same ???');
	console.log('but your variable has changed: ' + i);
	console.log('if you used decrement i should be : ' + (++temp));
	
}

function isPosNeg () {
	for (var i = 0; i < arguments.length; i++) {
		
		if(typeof arguments[i] != 'number')
			return 0;
		
		if (arguments[i] < 0)
			console.log('argument[' + i + '] is negative value');
		else if (arguments[i] > 0)
			console.log('argument[' + i + '] is positive value');
		else 
			console.log('argument[' + i + '] is equal 0');
	}
	return 1;
}

function askName() {
	var name = prompt('tell me your name');
	alert('hello ' + name);
}

function factorial( value ) {
	return ( value != 1 ) ? value * factorial( value - 1 ) : 1;
}

var one = 1, two = 2;

showVariables(one, two);
console.log(trangleArea(3,4));
console.log(arrayReverse([1,2,3,4,5,6,7,8]));
differenceIncDec(5);
isPosNeg(1,2,3,4,-55,-4,2,0);
askName();
console.log(factorial(3));
