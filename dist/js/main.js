'use strict';

var menuOpen = document.getElementById('menu-trigger-wrapper');
var menu = document.getElementById('menu');

menuOpen.addEventListener('click', function () {
  event.preventDefault();

  menu.classList.toggle('opened');
});