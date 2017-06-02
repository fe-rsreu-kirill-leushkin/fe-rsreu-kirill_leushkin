/*jshint esversion: 6 */

var BooksView = (function() {
  'use strict';

  function viewBooks(books) {
    if (!books) {
      return;
    }

    document.querySelector('.main-content__field').innerHTML = '';
    for (let i = 0; i < books.length; i++) {
      createBook(books[i]);
    }
  }

  function createTag(tag = '', className = '', id = '', innerHTML = '') {
    var element = document.createElement(tag);
    element.className = className;
    element.id = id;
    element.innerHTML = innerHTML;

    return element;
  }

  function createBook(book) {
    var fragment = document.createDocumentFragment();
    var el = document.getElementById('main-field');
    var contentBook = createTag('div', 'content__book', 'bookid' + book.id);
    var bookImage = createTag('div', 'book_image');
    var image = createTag('img');
    var bookTitle = createTag('div', 'book_title', '', book.title);
    var bookAuthor = createTag('div', 'book_author', '', book.author);
    var rating = createTag('div', 'rating');

    image.setAttribute('src', book.image);
    bookImage.appendChild(image);
    contentBook.appendChild(bookImage);
    contentBook.appendChild(bookTitle);
    contentBook.appendChild(bookAuthor);
    contentBook.appendChild(rating);
    fragment.appendChild(contentBook);

    var bookRating = book.rating;
    for (let j = 0; j < 5; j++) {
      var star = {};
      if (bookRating) {
        star = createTag('div', 'star rating-star__full');
        bookRating--;
      } else {
        star = createTag('div', 'star rating-star__empty');
      }

      rating.appendChild(star);
      star.addEventListener('click', onChangeRating(book.id, j + 1));
    }

    el.appendChild(fragment);
  }

  function onInputSearch() {
    var searchValue = document.querySelector('#search').value.toLowerCase();
    BooksController.search(searchValue);
  }

  function onChangeRating(id, star) {
    return function() {
      var bookid = document.getElementById('bookid' + id);
      var stars = bookid.querySelectorAll('.star');
      BooksController.changeRating(id, star, stars);
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

    if (output.length) {
      viewBooks(output);
      BooksController.setCurrentBooks(output);
    } else {
      document.getElementById('main-field').innerHTML = viewError('Not found');
    }
  }

  function onAddBook(event) {
    event.preventDefault();

    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var image = document.getElementById('choose-image').value.substring(12);
    var elem = document.getElementById('history');

    if (!title || !author || !image) {
      return;
    }

    BooksController.addBook(0, image, title, author, 0);
    BooksController.setCurrentBooks(Books);
  }

  function drawFullStar(star) {
    star.className = 'star rating-star__full';
  }

  function drawEmptyStar(star) {
    star.className = 'star rating-star__empty';
  }

  function onAllBooks() {
    viewBooks(Books);
    BooksController.setCurrentBooks(Books);
  }

  function viewError(errtext) {
    document.querySelector('.main-content__field').innerHTML = '<h1 style="color:red;">' + errtext + '</h1>';
  }

  function initialize() {
    document.querySelector('#search').addEventListener('change', onInputSearch);
    document.querySelector('#add-book').addEventListener('click', onAddBookClick);
    document.querySelector('#most-popular').addEventListener('click', onPopular);
    document.querySelector('#all-books').addEventListener('click', onAllBooks);
    document.querySelector('#upload-book').addEventListener('click', onAddBook);
  }

  return {
    createBook: createBook,
    onInputSearch: onInputSearch,
    onChangeRating: onChangeRating,
    onAddBookClick: onAddBookClick,
    onPopular: onPopular,
    onAddBook: onAddBook,
    onAllBooks: onAllBooks,
    viewError: viewError,
    viewBooks: viewBooks,
    drawEmptyStar: drawEmptyStar,
    drawFullStar: drawFullStar,
    initialize: initialize,
  };
}());
