/*jshint esversion:6*/

var ListController = (function() {
  'use strict';

  function ListController() {

  }

  ListController.prototype.search = function(searchValue) {
    var output = ListStorage.filter(function(list) {
      return list.text.toLowerCase().indexOf(searchValue) != -1;
    });

    if (output.length) {
      ListView.viewList(output);
    } else {
      ListView.viewError('Not found');
    }

    return output;
  };

  // ListController.prototype.onYesClick = function () {
  //   var input = document.getElementById('main-content__add-input').value;
  //   var id = ListStorage.length + 1;
  //   var list = new List(id, false, input);
  //
  //   ListStorage.push(list);
  //   ListView.hideElements(document.getElementById('add-input'));
  //   ListView.viewList(ListStorage);
  // };

  ListView.prototype.viewList(ListStorage());

  return ListController;
}());
