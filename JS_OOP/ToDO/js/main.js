var Main = (function(){
  'use strict';

  function Main() {
    this._listController = new ListController();
    this._listModel = new List();
    this._listStorage = new ListStorage();
    this._listView = new ListView();
  }


  return Main;
}());
