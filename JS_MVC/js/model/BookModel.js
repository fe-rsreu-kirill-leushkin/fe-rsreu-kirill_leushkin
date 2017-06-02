var Book = (function() {
  'use strict';

  var PATH = 'images/books/';

  function Book(id, image, title, author, rating) {
    this.id = id || 0;
    this.image  = PATH + image;
    this.title  = title || '';
    this.author = author || '';
    this.rating = rating || 0;
  }

  return Book;
}());
