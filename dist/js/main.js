'use strict';

var menuTrigger = document.getElementById('menu-trigger');
var menu = document.getElementById('menu');

menuTrigger.addEventListener('click', function () {
  event.preventDefault();

  menuTrigger.classList.toggle('opened');
  menu.classList.toggle('opened');
});