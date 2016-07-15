const menuOpen = document.getElementById('menu-trigger-wrapper');
const menu = document.getElementById('menu');

menuOpen.addEventListener('click', () => {
  event.preventDefault();

  menu.classList.toggle('opened');
});
