// Animate Car
const oldCar = document.querySelector('#old-car-sketch');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('moveInLeft');
    }
  });
});

observer.observe(oldCar);

// Show or Remove testimonials modal
const testimonialsPic = document.querySelectorAll('.testimonials__pic');
const testimonialsModal = document.querySelector('.testimonials__modal');

testimonialsPic.forEach((pic) => {
  pic.addEventListener('mouseover', () => {
    testimonialsModal.classList.add('testimonials__modal--visible');
  });

  pic.addEventListener('mouseout', () => {
    testimonialsModal.classList.remove('testimonials__modal--visible');
  });
});

// Show or hide navbar modal
const closeNavbarModal = document.getElementById('close-navbar-modal');
const navbarModal = document.getElementById('navbar-modal');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  navbarModal.style.display = 'flex';
});

closeNavbarModal.addEventListener('click', () => {
  navbarModal.style.display = 'none';
});
