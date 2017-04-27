/*jshint esversion: 6 */
(function () {
	function Calculator() {
		'use strict';

		this.result = 0;

		this.add = function(number) {
			for (let i = 0; i < arguments.length; i++) {
				if (!Utils.isNumber(arguments[i])) {
					throw new Error('parametr(s) should be a number');
				}
			}

			for (let i = 0; i < arguments.length; i++) {
				this.result += arguments[i];
			}

			return this;
		}.bind(this);

		this.subtract = function(number) {
			for (let i = 0; i < arguments.length; i++) {
				if (!Utils.isNumber(arguments[i])) {
					throw new Error('parametr(s) should be a number');
				}
			}

			for (let i = 0; i < arguments.length; i++) {
				this.result -= arguments[i];
			}

			return this;
		};

		this.divide = function(number) {
			for (let i = 0; i < arguments.length; i++) {
				if (!Utils.isNumber(arguments[i])) {
					throw new Error('parametr(s) should be a number');
				}
			}

			for (let i = 0; i < arguments.length; i++) {
				this.result /= arguments[i];
			}

			return this.divide;
		};

		this.multiply = function(number) {
			for (let i = 0; i < arguments.length; i++) {
				if (!Utils.isNumber(arguments[i])) {
					throw new Error('parametr(s) should be a number');
				}
			}

			for (let i = 0; i < arguments.length; i++) {
				this.result *= arguments[i];
			}

			return this;
		};

		this.getResult = function() {
			return this.result;
		};

		this.reset = function() {
			this.result = 0;
			return this;
		}.bind(this);

		this.query = function() {
			this.result = 5;
			console.log('well');
		}.bind(this);

		this.getInitialState = function(callback = this.query) {
			setTimeout(function() {
				callback.apply(this, arguments);
			}.bind(this), 500);
		}.bind(this);
	}

	var calculator = new Calculator();

	calculator.add(2);
	console.log(calculator.getResult());
	calculator.getInitialState(function () {
		return this.result;
	});
	console.log(calculator.getResult());


	// calculator.add(2)(2, 20)(1, 9)(4);
	// console.log(calculator.getResult());
	// calculator.subtract(2)(2,2);
	// console.log(calculator.getResult());
	// calculator.divide(2);
	// console.log(calculator.getResult());
	// calculator.multiply(3, 5);
	// console.log(calculator.getResult());
	// calculator.reset();
	// calculator.add(2);
	// console.log(calculator.getResult());
}());
