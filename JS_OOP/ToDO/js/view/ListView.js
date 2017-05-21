/*jshint esversion: 6*/

var ListView = (function() {
  'use strict';

  function ListView() {
    // this._btn = document.getElementById('button-add');
    // this._yes = document.getElementById('button-yes');
    // this._addInput = document.getElementById('add-input');
    // this._no = document.getElementById('button-no');
  }

  ListView.prototype.createList = function(list) {
    var HTML = `
      <li class="item" id="itemid${list.id}">
        <div class="circle ${list.condition}"></div>
        <div class="text">${list.text}</div>
        <div class="delete"></div>
      </li>
    `;

    return HTML;
  };

  ListView.prototype.viewList = function(list) {
    if (!list) {
      return;
    }

    var output = list.reduce(function(sum, curr){
      return sum += ListView.prototype.createList(curr);
    }, '');

    document.getElementById('todolist').innerHTML = output;
    ListView.prototype.attachEvents(output);
  };

  ListView.prototype.viewError = function(errtext) {
    document.querySelector('#todolist').innerHTML = `
      <h1 style="
        color: #ff0000;
        font-size: 2em;
        text-align: center;
        padding-top: 20px;
        ">${errtext}</h1>
    `;
  };


  //
  // ListView.prototype.onNoClick = function () {
  //   ListView.prototype.hideElements(this.yes, this.no, this.addInput);
  //   ListView.prototype.showElements(this.btn);
  // };

  ListView.prototype.hideElements = function(...element) {
    element.forEach(function(item, i, arr){
      arr[i].style.display = 'none';
    });
  };

  ListView.prototype.showElements = function(...element) {
    element.forEach(function(item, i, arr){
      arr[i].style.display = 'block';
    });
  };

  ListView.prototype.onInputSearch = function() {
    var searchValue = document.querySelector('#main-content__search').value.toLowerCase();
    ListController.search(searchValue);
  };

  // ListView.prototype.changeCondition = function(elem, id) {
  //   return function() {
  //     elem.classList.toggle('true');
  //     if (ListStorage()[id].condition === true) {
  //       ListStorage()[id].condition = false;
  //     } else {
  //       ListStorage()[id].condition = true;
  //     }
  //   };
  // };

  // ListView.prototype.onAddClick = function() {
  //   ListView.prototype.showElements(this.yes, this.no, this.addInput);
  //   ListView.prototype.hideElements(this.btn);
  // };
  //
  // ListView.prototype.onDeleteClick = function(elem, id) { // ???????????????????????
  //   return function() {
  //     ListView.prototype.hideElements(elem.closest('.item'));
  //     ListStorage().splice(id, 1);
  //     ListView.prototype.viewList(ListStorage());
  //   };
  // };
  //
  // ListView.prototype.attachEvents = function() { // ???????????????????????
  //   var circles = document.querySelectorAll('.circle');
  //   circles.forEach((item, i, arr) => arr[i].addEventListener('click', ListView.prototype.changeCondition(arr[i], i)));
  //
  //   var deletes = document.querySelectorAll('.delete');
  //   deletes.forEach((item, i, arr) => arr[i].addEventListener('click', ListView.prototype.onDeleteClick(arr[i], i)));
  //
  //   document.getElementById('button-add').addEventListener('click', ListView.prototype.onAddClick);
  //   document.getElementById('button-no').addEventListener('click', ListView.prototype.onNoClick);
  //   document.getElementById('main-content__search').addEventListener('input', ListView.prototype.onInputSearch);
  // };

  return ListView;
}());
