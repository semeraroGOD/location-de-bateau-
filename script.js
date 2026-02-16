const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
    if (navLinks.classList.contains('nav-open')) {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '80px';
      navLinks.style.right = '24px';
      navLinks.style.background = 'rgba(5, 8, 15, 0.95)';
      navLinks.style.padding = '1rem 1.5rem';
      navLinks.style.borderRadius = '1rem';
      navLinks.style.gap = '1rem';
    } else {
      navLinks.removeAttribute('style');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.removeAttribute('style');
      navLinks.classList.remove('nav-open');
    }
  });
}
