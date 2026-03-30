const form = document.getElementById('contact-form');
const inputs = form.querySelectorAll('input, textarea');

// load saved data on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('contactForm');

  if (savedData) {
    const parsedData = JSON.parse(savedData);

    inputs.forEach(input => {
      if (parsedData[input.name]) {
        input.value = parsedData[input.name];
      }
    });
  }
});

// save data on input
inputs.forEach(input => {
  input.addEventListener('input', () => {
    const formData = {};

    inputs.forEach(field => {
      formData[field.name] = field.value;
    });

    localStorage.setItem('contactForm', JSON.stringify(formData));
  });
});