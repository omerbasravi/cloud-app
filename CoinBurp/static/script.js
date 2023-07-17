const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const aboutUsLink = document.querySelector('.about-us-link');
const aboutUsForm = document.getElementById('about-us-form');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

aboutUsLink.addEventListener('click', () => {
  aboutUsForm.style.display = 'block';
});
