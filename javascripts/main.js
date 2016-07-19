const menuTrigger = document.getElementById('menu-trigger');
const menu = document.getElementById('menu');

menuTrigger.addEventListener('click', (event) => {
  event.preventDefault();

  menuTrigger.classList.toggle('opened');
  menu.classList.toggle('opened');
});

if (document.location.hostname !== 'gerrypass.com') {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-80985911-1', 'auto');
  ga('send', 'pageview');
}

const checkboxTypes = ['projects', 'books', 'jobs', 'classes', 'miscellaneous']

checkboxTypes.forEach((type) => {
  const selector = document.getElementById(type);

  if (selector) {
    selector.addEventListener('click', () => {
      const relevantBlocks = document.getElementsByClassName(type);

      // TODO: Figure out why relevantBlocks.forEach doesn't work
      for (let i = 0; i < relevantBlocks.length; i++) {
        const block = relevantBlocks[i];

        const hasOut = block.classList.contains('out');
        const hasIn = block.classList.contains('in');

        if (!hasOut && !hasIn) {
          block.classList.add('out');
          block.classList.remove('in');
        }
        else {
          block.classList.toggle('in');
          block.classList.toggle('out');
        }
      }
    });
  }
});
