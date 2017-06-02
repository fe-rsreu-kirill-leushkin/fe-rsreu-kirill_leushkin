// ********************************************//

var Request = (function() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', '/getBooks', true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) { // ??
      if (xhr.status === 200) {
        var books = JSON.parse(xhr.responseText);

        Books = books.slice();
        BooksView.viewBooks(Books);
        BooksController.setCurrentBooks(Books);
      } else {
        console.log('something bad happened\nstatus: ' + xhr.readyState + ' ' + xhr.status);
      }
    } else {
     console.log('something bad happened\nstatus: ' + xhr.readyState + ' ' + xhr.status);
    }
  };

  xhr.send();

  function sendBookRequest(newBook) {
    serverPromise(fetch('/addBook', {
        method: 'POST',
        body: JSON.stringify(newBook)
    }))
      .then(function(response) {
        return response.json();
      })
      .then(function(res) {
        BooksController.setCurrentBooks(Books);
        BooksNotification.addBookNotify(newBook);
        BooksView.viewBooks(Books);
      })
      .catch(function(err) {
        throw new Error('server is not response try again later');
      });
  }

  function sendRatingRequest(book, star, stars) {
    serverPromise(fetch('/rateBook', {
        method: 'POST',
        body: JSON.stringify(book)
    }))
      .then(function(res) {
        return res.json();
      })
      .then(function(res) {
        BooksController.updateStars(star, stars);
        BooksNotification.addRatingNotify(book);
      })
      .catch(function(err) {
        throw new Error('server is not response try again later');
      });
  }

  function serverPromise(res) {
    var timer;
    var timeout = new Promise(function(resolve, reject) {
      timer = setTimeout(function() {
        clearTimeout(timer);
        reject('server not response');
      }, 1000);
    });

    res.then(function(timer) {
      clearTimeout(timer);
    });

    return Promise.race([
      res,
      timeout
    ]);
  }

  return {
    sendBookRequest: sendBookRequest,
    sendRatingRequest: sendRatingRequest,
  };
}());

// ********************************************//
