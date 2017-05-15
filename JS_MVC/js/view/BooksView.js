/*jshint esversion: 6 */

var BooksView = (function() {
  'use strict';

  function viewBooks(books) {
    if (!books) {
      return;
    }

    var output = '';

    for(let i = 0; i < books.length; i++) {
      output += createBook(Books[i]);
    }

    document.querySelector('.main-content__field').innerHTML = output;
  }

  function createBook(book) {
    var HTML = `
      <div class="content__book" id="bookid${book.id}">
        <div class="book_image">
          <img src="${book.image}" alt="image">
        </div>
        <div class="book_title">${book.title}</div>
        <div class="book_author">${book.author}</div>
        <div class="rating"></div>
      </div>
    `;

    return HTML;
  }

  function onInputSearch() {
    var searchValue = document.querySelector('#search').value.toLowerCase();
    BooksController.search(searchValue);
  }

  function onChangeRating(id, star) {
    return function() {
      var history = document.getElementById('history');
      var bookid = document.getElementById('bookid' + id);
      var stars = bookid.querySelectorAll('.star');
      var book = BooksController.changeRating(id, star, stars);

      history.innerHTML += BooksNotification.addRatingNotify(book);
    };
  }

  function onAddBookClick() {
    var button = document.getElementById('add-book_field');

    if (button.style.display !== 'block') {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }

  function onPopular() {
    var output = BooksController.getMostPopularBooks();

    if (output) {
      document.querySelector('.main-content__field').innerHTML = output;
    } else {
      document.querySelector('.main-content__field').innerHTML = viewError('Not found');
    }

    attachStars();
  }

  function onAddBook() {
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var image = document.getElementById('choose-image').value;
    var elem = document.getElementById('history');

    // TODO: Replace with arguments
    var newBook = BooksController.addBook(
      0,
      image,
      title,
      author,
      0
    );

    var HTML = NotificationsView.createBookNotify(newBook);
    elem.innerHTML += HTML;
  }

  function attachStars() {
    for (let i = 0; i < Books.length; i++) {
      var rating = Books[i].rating;
      var bookid = document.getElementById('bookid' + (i + 1));
      var stars = bookid.querySelector('.rating');

      for (let j = 0; j < 5; j++) {
        var star = document.createElement('div');
        if (rating) {
      		star.className = 'star rating-star__full';
      		rating--;
      	} else {
      		star.className = 'star rating-star__empty';
      	}

        stars.appendChild(star);
        star.addEventListener('click', onChangeRating(i + 1, j + 1));
      }
    }
  }

  function starFull(star) {
    star.className = 'star rating-star__full';
  }

  function starEmpty(star) {
    star.className = 'star rating-star__empty';
  }

  function onAllBooks() {
    // TODO: Replace with View
    viewBooks(Books);
    attachStars();
  }

  function viewError(errtext) {
    document.querySelector('.main-content__field').innerHTML = '<h1 style="color:red;">' + errtext + '</h1>';
  }

    // TODO: Move to initialize method
  function initialize() {
    document.querySelector('#search').addEventListener('input', onInputSearch);
    document.querySelector('#add-book').addEventListener('click', onAddBookClick);
    document.querySelector('#most-popular').addEventListener('click', onPopular);
    document.querySelector('#all-books').addEventListener('click', onAllBooks);
    document.querySelector('#upload-book').addEventListener('click', onAddBook);
  }

  return {
    attachStars: attachStars,
    createBook: createBook,
    onInputSearch: onInputSearch,
    onChangeRating: onChangeRating,
    onAddBookClick: onAddBookClick,
    onPopular: onPopular,
    onAddBook: onAddBook,
    onAllBooks: onAllBooks,
    viewError: viewError,
    viewBooks: viewBooks,
    starEmpty: starEmpty,
    starFull: starFull,
    initialize: initialize,
  };
}());
