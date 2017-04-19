(function(){
	'use strict';
	
	//1. Write a JavaScript function to get difference between two dates in days.
	function daysDiff(date1, date2) {
		return date2.getDate() - date1.getDate();
	}
	
	//2. Write a JavaScript function gets the current date.
	function currentDate() {
		return Date();
	}
	
	
	//3. Write a JavaScript function which displays the current day and time 
	//in the following format. Apr 18 2017, 21:10
	function formatDate(date) {
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		
		return `${months[date.getMonth()]} ${date.getDay()} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
	}
	
	console.log(daysDiff(new Date(2001, 2, 1), new Date(2017, 11, 20)));
	console.log(currentDate());
	console.log(formatDate(new Date()));
})();