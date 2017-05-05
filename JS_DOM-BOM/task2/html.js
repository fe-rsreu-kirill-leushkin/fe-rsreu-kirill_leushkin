/*jshint esversion: 6 */

(function() {
  'use strict';

  function CreateTag(tag, idName, innerHTML, className = '') {
    var elem = document.createElement(tag);
    elem.id = idName;
    elem.innerHTML = innerHTML;
    elem.className = className;

    return elem;
  }

  var wrapper = new CreateTag('div', 'wrapper', null);
  var ul      = new CreateTag('ul', 'ul', null);
  var li = [
    new CreateTag('li', 'menu1', 'menu1', 'menu'),
    new CreateTag('li', 'menu2', 'menu2', 'menu'),
    new CreateTag('li', 'menu3', 'menu3', 'menu'),
    new CreateTag('li', 'menu4', 'menu4', 'menu'),
    new CreateTag('li', 'menu5', 'menu5', 'menu'),
    new CreateTag('li', 'button', 'Top menu', 'menu')
  ];


  document.body.appendChild(wrapper);
  for (var i = 0; i < li.length; i++) {
    ul.appendChild(li[i]);
  }
  wrapper.appendChild(ul);

}());
