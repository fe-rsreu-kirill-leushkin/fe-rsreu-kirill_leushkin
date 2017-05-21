var ListStorage = (function() {
  'use strict';

  function ListStorage() {
    return [
      new List(0, true, 'do something'),
      new List(1, false, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'),
      new List(2, false, 'asdfasdf'),
    ];
  }

  return ListStorage;
}());
