/*jshint esversion: 6 */
(function(){
  'use strict';

  /*
  1)Create an object called shape that has the type property and a getType(),
  getPerimeter() and draw() method. Draw method shows in console that (*name is drawn)
  */

  // TODO: Add setters
  // TODO: Use ES6 classes
  class Shape1 {
    constructor(type, name) {
      this.type = type || '';
      this.name = name || '';
    }

    setType(type) {
      if (typeof type === 'string') {
        this.type = type;
      } else {
        throw new Error('type should be a string');
      }
    }

    getType() {
      return this.type;
    }

    draw() {
      return [this.type, this.name];
    }

    getPerimetr() {
      var per = 0;
      for (let i = 0; i < arguments.length; i++) {
        per += arguments[i];
      }

      return per;
    }
  }

  // TODO: Use private variables
  function Shape(type, name) {
    var _type;
    var _name;

    this.getType = function () {
      return _type;
    };

    this.setType = function(newType) {
      if (typeof newType !== 'string') {
        throw new Error('type must be a string');
      } else {
        _type = newType;
      }
    };

    this.getName = function() {
      return _name;
    };

    this.setName = function(newName) {
      if (typeof newType !== 'string') {
        throw new Error('type must be a string');
      } else {
        _name = newName;
      }
    };

    this.setType(type);
    this.setName(name);
  }

  Shape.prototype.getPerimetr = function() {
    var per = 0;
    for (let i = 0; i < arguments.length; i++) {
      per += arguments[i];
    }

    return per;
  };

  Shape.prototype.draw = function() {
    return console.log(this.name);
  };

  /*
  2)Define a Triangle() constructor function whose prototype is shape.
  Objects created with Triangle() should have three own properties—a, b, and c,
  representing the lengths of the sides of a triangle
  */

  // TODO: Use Object.defineProperties() for getters and setters
  function Traingle(a, b, c) {
    Shape.apply(this, ['traingle']);

    Object.defineProperties(this, {
      a: {
        get: function() {
          return a;
        },
        set: function(a) {
          if (a < 0) {
            throw new Error('traingles side must be a positive number');
          } else if (typeof a !== 'number') {
            throw new Error('traingle side must be a number');
          }
        }
      },

      b: {
        get: function() {
          return b;
        },
        set: function(b) {
          if (b < 0) {
            throw new Error('traingles side must be a positive number');
          } else if (typeof b !== 'number') {
            throw new Error('traingle side must be a number');
          }
        }
      },
    });

    this.a = a || 0;
    this.b = b || 0;
    this.c = c || 0;
  }

  Traingle.prototype = Object.create(Shape.prototype);
  Traingle.constructor = Traingle;


  /*
  3)Define a Square() constructor function whose prototype is shape.
  Objects created with Square() should have three own properties—a, b, c,
  and d representing the lengths of the sides of a square.
  */

  function Square(d) {
    Shape.apply(this, ['traingle']);
    Traingle.apply(this, arguments);
    this.d = d || 0;
  }

  Square.prototype = Object.create(Shape.prototype);
  Traingle.constructor = Traingle;

  /*
  4)Add one more Shape that inherits Triangle or Square or some other shape
  (in this case you should add it too) and has some specific method and properties
  */

  function Shape2(v) {
    Traingle.apply(this, arguments);
    this.v = v || 0;
  }

  Shape2.prototype.showPer = function() {
    var per = 0;
    for (let i = 0; i < arguments.length; i++) {
      per += arguments[i];
    }

    return console.log(per);
  };

  var s = new Shape({}); 
  var square = new Square();
  var traingle = new Traingle();
  console.log(square.getPerimetr(1,2,3,4), traingle.getPerimetr(1,2,3));

  traingle.b = -100;
}());