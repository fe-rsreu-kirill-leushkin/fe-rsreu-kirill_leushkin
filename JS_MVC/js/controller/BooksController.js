/*jshint esversion: 6 */
var BooksController = (function() {
  'use strict';

  function search(searchValue) {
    var output = [];

    for (var i = 0; i < Books.length; i++) {
      var book = Books[i];
      var isTitleFound = book.title.toLowerCase().indexOf(searchValue) === -1;
      var isAuthorFound = book.author.toLowerCase().indexOf(searchValue) === -1;

      if (isTitleFound || isAuthorFound) {
        output.push(book);
      }
    }

    if (output.length) {
      BooksView.viewBooks(output);
    } else {
      BooksView.viewError('Not found');
    }

    return output;
  }

  function getMostPopularBooks() {
    var output = '';

    for (let i = 0; i < Books.length; i++) {
      if (Books[i].rating === 5) {
        output += BooksView.createBook(Books[i]);
      }
    }

    return output;
  }

  function changeRating(id, star, stars) {
    var book = {};

    for (let i = 0; i < Books.length; i++) {
      if (Books[i].id == id) {
        book = Books[i];
        Books[i].rating = star;
        for (let j = 0; j < 5; j++) {
          if (star) {
            // TODO: Move to view
            BooksView.starFull(stars[j]);
            star--;
          } else {
            BooksView.starEmpty(stars[j]);
          }
        }
      }
    }

    return book;
  }

  function addBook(id, image, title, author, rating) {
    id = Books[Books.length - 1].id + 1;
    var newBook = new Book(id, image, title, author, rating);
    Books.push(newBook);
    Main.update();

    return newBook;
  }

  Main.update();

  return {
    search: search,
    getMostPopularBooks: getMostPopularBooks,
    changeRating: changeRating,
    addBook: addBook,
  };
}());
