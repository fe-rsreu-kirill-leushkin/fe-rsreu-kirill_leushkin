/*jshint esversion: 6 */

var NotificationsView = (function() {
  'use strict';

  function createBookNotify(notify) {
    var date = new Date();
    var elem = document.getElementById('history');
    var HTML = `
      <li class="list list__item_history">
        <div class="item_text-history">
          <span>You added</span> ${notify.book.title} <span>by</span>
          ${notify.book.author} <span>to your</span> Must Read Titles.<br><br>At <time>
          ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</time>
        </div>
      </li>
    `;

    elem.innerHTML += HTML;
  }

  function createRatingNotify(notify) {
    var date = new Date();
    var elem = document.getElementById('history');
    var HTML = `
    <li class="list list__item_history">
      <div class="item_text-history">
        <span>You rated</span> ${notify.book.title} <span>by</span>
        ${notify.book.rating} stars.<br><br>At <time>
        ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</time>
      </div>
    </li>
    `;

    elem.innerHTML += HTML;
  }

  return {
    createBookNotify: createBookNotify,
    createRatingNotify: createRatingNotify,
  };
}());
