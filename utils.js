var Utils = (function() {
	'use strict';

	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	function isString(string) {
		return typeof string === 'string';
	}

	function isObject(object) {
		return (object) && typeof object === 'object';
	}

	return {
		isNumber: isNumber,
		isString: isString,
		isObject: isObject
	};
}());
