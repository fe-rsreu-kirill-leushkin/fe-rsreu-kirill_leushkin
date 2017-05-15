/*jshint esversion: 6 */

var NotificationsView = (function() {
  'use strict';

  function createBookNotify(book) {
    var date = new Date();
    var HTML = `
      <li class="list list__item_history">
        <div class="item_text-history">
          <span>You added</span> ${book.title} <span>by</span>
          ${book.author} <span>to your</span> Must Read Titles.<br><br>At <time>
          ${date.getDate()}:${date.getMinutes()}:${date.getSeconds()}</time>
        </div>
      </li>
    `;

    return HTML;
  }

  function createRatingNotify(book) {
    var date = new Date();
    var HTML = `
    <li class="list list__item_history">
      <div class="item_text-history">
        <span>You rated</span> ${book.title} <span>by</span>
        ${book.rating} stars.<br><br>At <time>
        ${date.getDate()}:${date.getMinutes()}:${date.getSeconds()}</time>
      </div>
    </li>
    `;

    return HTML;
  }

  return {
    createBookNotify: createBookNotify,
    createRatingNotify: createRatingNotify,
  };
}());
