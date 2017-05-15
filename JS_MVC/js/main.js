var Main = (function() {
  'use strict';

  function update() {
    BooksView.viewBooks(Books);
    BooksView.attachStars();
    BooksView.initialize();
  }

  return {
    update: update,
  };
}());
