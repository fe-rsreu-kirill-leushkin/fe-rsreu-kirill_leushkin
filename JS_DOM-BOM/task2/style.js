/*jshint esversion: 6 */

(function (){
  'use strict';

  var menu = document.querySelectorAll('li');
  var button = document.getElementById('button');

  for (let i = 0; i < menu.length - 1; i++) {
    menu[i].style.cssText = 'width: 100px;' +
      'height: 0px;' +
      'text-align: center;' +
      'line-height: 30px;' +
      'background-color: blue;' +
      'overflow: hidden';
  }

  ul.style.listStyleType = 'none';

  button.style.width = '100px';
  button.style.height = '30px';
  button.style.textAlign = 'center';
  button.style.lineHeight = '30px';
  button.style.backgroundColor = 'blue';
  button.style.borderTop = '2px solid #aaa';
  button.style.borderRadius = '0px 0px 15px 15px';


  function showList() {
    if (menu[0].style.height === '0px') {
      for (let i = 0; i < menu.length - 1; i++) {
        menu[i].style.height = '30px';
      }
    } else {
      for (let i = 0; i < menu.length - 1; i++) {
        menu[i].style.height = '0px';
      }
    }
  }

  function buttonShadow() {
    button.style.cursor = 'pointer';
    button.style.boxShadow = '0px 4px 20px 1px blue';
  }

  function buttonDisableShadow() {
    button.style.boxShadow = 'none';
  }

  function listHover(menuItem) {
    return function () {
        menuItem.style.backgroundColor = '#71D0F0';
    };
  }

  function listHoverOut(menuItem) {
    return function() {
      menuItem.style.backgroundColor = 'blue';
    };
  }

  button.addEventListener('click', showList);
  button.addEventListener('mouseover', buttonShadow);
  button.addEventListener('mouseout', buttonDisableShadow);
  for (let i = 0; i < menu.length - 1; i++) {
    menu[i].addEventListener('mouseover', listHover(menu[i]));
    menu[i].addEventListener('mouseout',  listHoverOut(menu[i]));
  }
}());


/*

menu[i].onmouseover = function() {
  menu[i].style.backgroundColor = '#71D0F0';
};

menu[i].onmouseout = function() {
  menu[i].style.backgroundColor = 'blue';
};

*/
