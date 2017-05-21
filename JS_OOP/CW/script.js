/*jshint esversion: 6 */

(function() {
  'use strict';

  /*
  1)Create an object called shape that has the type property and a getType(),
  getPerimeter() and draw() method. Draw method shows in console that (*name is drawn)
  */

  function Shape(type, name) {
    this.type = type || '';
    this.name = name || '';
  }

  Shape.prototype.getType = function() {
    return this.type;
  };

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

  function Traingle(a, b, c) {
    this.a = a || 0;
    this.b = b || 0;
    this.c = c || 0;

    // setters and getters
    // private variables
    // Object.defineProperties()

  }

  Traingle.prototype = Object.create(Shape.prototype);


  /*
  3)Define a Square() constructor function whose prototype is shape.
  Objects created with Square() should have three own properties—a, b, c,
  and d representing the lengths of the sides of a square.
  */

  function Square(d) {
    Traingle.apply(this, arguments);
    this.d = d || 0;
  }

  Square.prototype = Object.create(Shape.prototype);

  /*
  4)Add one more Shape that inherits Triangle or Square or some other shape
  (in this case you should add it too) and has some specific method and properties
  */

  var square = new Square();
  var traingle = new Traingle();
  console.log(square.getPerimetr(1,2,3,4), traingle.getPerimetr(1,2,3));
  console.dir(Shape);
}());
