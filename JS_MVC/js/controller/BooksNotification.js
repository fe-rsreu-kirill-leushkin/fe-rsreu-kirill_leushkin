/*jshint esversion: 6 */
var BooksNotification = (function() {

  function addBookNotify(book) {
    var id = Notifications.length++;
    // TODO: Remove html from controller
    var notify = new Notification(id, book, new Date());

    Notifications.push(notify);
    NotificationsView.createBookNotify(notify);
  }

  function addRatingNotify(book) {
    var id = Notifications.length++;
    var notify = new Notification(id, book, new Date());

    Notifications.push(notify);

    var HTML = NotificationsView.createRatingNotify(book);

    return HTML;
  }

  return {
    addBookNotify: addBookNotify,
    addRatingNotify: addRatingNotify,
  };
}());
