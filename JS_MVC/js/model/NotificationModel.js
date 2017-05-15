var Notification = (function() {
  'use strict';

  function Notification(id, book, date) {
    this.id = id || 0;
    this.book = book || {};
    this.date = date || new Date();
  }

  return Notification;
}());
