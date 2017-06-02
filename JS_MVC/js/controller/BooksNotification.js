/*jshint esversion: 6 */
var BooksNotification = (function() {

  function addBookNotify(book) {
    var id = Notifications.length;
    var notify = new Notification(id, book, new Date());
    NotificationsView.createBookNotify(notify);
    Notifications.push(notify);

    setTimeout(function () {
      var history = document.getElementById('history');
      var del = history.querySelector('.list:first-child');

      Notifications.pop();
      history.removeChild(del);
    }, 3000);
  }

  function addRatingNotify(book) {
    var id = Notifications.length;
    var notify = new Notification(id, book, new Date());
    NotificationsView.createRatingNotify(notify);
    Notifications.push(notify);

    setTimeout(function () {
      var history = document.getElementById('history');
      var del = history.querySelector('.list:first-child');

      Notifications.pop();
      history.removeChild(del);
    }, 3000);
  }

  // function addNofity('type', book) {}

  return {
    addBookNotify: addBookNotify,
    addRatingNotify: addRatingNotify,
  };
}());
