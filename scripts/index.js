const navBar = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navBar.classList.add('nav--dark');
  } else {
    navBar.classList.remove('nav--dark');
  }
});
