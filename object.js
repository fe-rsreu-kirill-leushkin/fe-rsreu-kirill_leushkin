(function(){
	'use strict';
	
	var human = {
		name: 'Petr',
		age: 20,
		gender: 'male'
	};
	
	function isObject( object ) {
		if( typeof object === 'object' ) return true;
		else return false;
	}
	
	function objLenght( object ) {
		if(!isObject(object)) return console.log('parameter(s) should be an object');
		
		var lenght = 0;
		for(var key in object){
			lenght++;
		}
		
		return lenght;
	}
	
	function properties( object ) {
		if(!isObject(object)) return console.log('parameter(s) should be an object');
		
		for(var key in object){
			console.log(key);
		}
		return true;
	}
	
	
	console.log(objLenght(human));
	properties(human);
})();