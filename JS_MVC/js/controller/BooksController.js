/*jshint esversion: 6 */
var BooksController = (function() {
  'use strict';

  var currentBooks = Books.slice();

  function getCurrentBooks() {
    return currentBooks;
  }

  function setCurrentBooks(books) {
    currentBooks = books.slice();
  }

  function search(searchValue) {
    var output = [];

    for (var i = 0; i < currentBooks.length; i++) {
      var book = currentBooks[i];
      var isTitleFound = book.title.toLowerCase().indexOf(searchValue) !== -1;
      var isAuthorFound = book.author.toLowerCase().indexOf(searchValue) !== -1;

      if (isTitleFound || isAuthorFound) {
        output.push(book);
      }
    }

    if (output.length) {
      BooksView.viewBooks(output);
      setCurrentBooks(output);
    } else {
      BooksView.viewError('Not found');
    }

    return output;
  }

  function getMostPopularBooks() {
    var output = [];
    var books = getCurrentBooks();

    for (let i = 0; i < books.length; i++) {
      if (books[i].rating === 5) {
        output.push(books[i]);
      }
    }

    return output;
  }

  function changeRating(id, star, stars) {
    var book = Books[id - 1];
    book.rating = star;

    setTimeout(function() {
      Request.sendRatingRequest(book, star, stars);
    }, 5000);

    return book;
  }

  function updateStars(star, stars) {
    for (var j = 0; j < 5; j++) {
      if (star) {
        BooksView.drawFullStar(stars[j]);
        star--;
      } else {
        BooksView.drawEmptyStar(stars[j]);
      }
    }
  }

  function addBook(id, image, title, author, rating) {
    id = Books[Books.length - 1].id + 1;
    var newBook = new Book(id, image, title, author, rating);

    setTimeout(function(){
      Request.sendBookRequest(newBook);
    }, 5000);

    return newBook;
  }

  BooksView.initialize();

  return {
    getMostPopularBooks: getMostPopularBooks,
    setCurrentBooks: setCurrentBooks,
    getCurrentBooks: getCurrentBooks,
    changeRating: changeRating,
    updateStars: updateStars,
    addBook: addBook,
    search: search,
  };
}());
