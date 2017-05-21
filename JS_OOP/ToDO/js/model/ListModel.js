var List = (function() {
  'use strict';

  function List(id, condition, text) {
    this.id = id || 0;
    this.condition = condition || false;
    this.text = text || '';
  }

  return List;
}());
