const menuTrigger = document.getElementById('menu-trigger');
const menu = document.getElementById('menu');

menuTrigger.addEventListener('click', () => {
  event.preventDefault();

  menuTrigger.classList.toggle('opened');
  menu.classList.toggle('opened');
});
