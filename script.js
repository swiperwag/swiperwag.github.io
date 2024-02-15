let intro = document.querySelector('.intro');

addEventListener('DOMContentLoaded', function() {
  intro.style.display = 'grid';


  setTimeout(() => {
    intro.style.display = 'none';
  }, 1400);
});

