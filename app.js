let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); // Use the correct class selector

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-x');
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    }
  });

  let header = document.querySelector('header'); // Correct the typo
  header.classList.toggle('sticky', window.scrollY > 100); // Correct the typo

  menuIcon.classList.remove('fa-x');
  navbar.classList.remove('active');
};

document.addEventListener('DOMContentLoaded', function() {
  // Your ScrollReveal code here
  const sr = ScrollReveal({
    reset: true,
    distance: '180px',
    duration: 2000,
    delay: 200
  });

  sr.reveal('.home-content, .heading', { origin: 'top' });
  sr.reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
  sr.reveal('.home-content h1, .about-img', { origin: 'left' });
  sr.reveal('.home-content p, .about-content', { origin: 'right' });
});
