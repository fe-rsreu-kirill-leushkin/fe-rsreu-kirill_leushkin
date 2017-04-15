(function(){
	'use strict';
	
	function daysDiff( date1, date2 ) {
		return date2.getDate() - date1.getDate();
	}
	
	function currentDate() {
		return Date();
	}
	
	function formatDate( date ) {
		var dateString = date.toString();
		var output = '';
		var c = 0;
		
		for(var i = 4; i < dateString.length; i++) {
			if (dateString[i] === ':') c++;
			if (c == 2) return output;
			
			output = output + dateString[i];
		}
		return false;
	}
	
	console.log(daysDiff(new Date(2001, 2, 1), new Date(2017, 11, 20)));
	console.log(currentDate());
	console.log(formatDate(new Date()));
})();