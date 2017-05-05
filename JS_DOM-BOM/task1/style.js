/*jshint esversion: 6 */

(function() {
  'use strict';

  var wraper = document.querySelector('#wraper');
  var main = document.querySelector('#main');
  var header = document.querySelector('#header');
  var arrow = document.querySelector('#arrow');
  var content = document.querySelector('#content');
  console.log(arrow);

  wrapper.style.cssText = 'widht: 100%; height: 100%;';

  main.style.cssText = `box-sizing: border-box;
    border: 10px solid black;
    border-radius: 10px;
    margin: 0px auto;
    overflow: hidden;
    background-color: aqua;
    position: relative;`;

  header.style.cssText = `box-sizing: border-box;
    margin-bottom: 10px;
    padding-left: 10px;
    width: 100%;
    color: black;
    background-color: yellow;
    position: relative;`;

  arrow.style.cssText = `position: absolute;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-top: 20px solid yellow;`;

  content.style.cssText = 'padding: 0px 10px 0px 10px';

  function changeSize() {
    var w = window.outerWidth / 2;
    var h = window.outerHeight / 2;

    main.style.width = w + 'px';
    main.style.height = h + 'px';
    main.style.fontSize = (h + w) / 30 + 'px';
    header.style.height = w / 10 + 'px';
    header.style.lineHeight = w / 10 + 'px';
    arrow.style.top = header.style.height;
    arrow.style.left = w / 20 + 'px';
    arrow.style.borderLeft = w / 35 + 'px solid transparent';
    arrow.style.borderTop = w / 35 + 'px solid yellow';
    arrow.style.borderRight = w / 35 + 'px solid transparent';
  }

  changeSize();

  window.addEventListener('resize', changeSize);
}());
