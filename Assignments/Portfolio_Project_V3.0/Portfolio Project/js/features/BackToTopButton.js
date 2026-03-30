const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  // show button after scrolling down 300px
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// smooth scroll to top on click
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});