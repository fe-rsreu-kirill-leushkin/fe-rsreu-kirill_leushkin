(function(){
	'use strict';
	
	var human = {
		name: 'Petr',
		age: 20,
		gender: 'male',
		x: {
			a: 100,
			b: 200,
			c: {
				q: 1,
				m: 2,
			}
		},
		q: [1,2,3],
	};
	
	function isObject(object) {
		return (object) && typeof object === 'object'
	}
	
	//1. Write a JavaScript program to get the length of a JavaScript object
	
	// including inner objects
	function objLenght(object) {
		if (!isObject(object)) throw new Error('parameter(s) should be an object');
		var lenght = 0;
		
		(function count(obj) {
			for (var key in obj) {
				lenght++;
				if (typeof obj[key] === 'object') {
					count(obj[key]);
				}
			}
			
		})(object);
		
		return lenght;
	}
	
	//2. Write a JavaScript program to list the properties of a JavaScript object
	function properties(object) {
		if (!isObject(object)) throw new Error('parameter(s) should be an object');
		
		for (var key in object){
			console.log(key);
		}
		
		return true;
	}
	
	
	
	console.log(objLenght(human));
	properties(human);
})();