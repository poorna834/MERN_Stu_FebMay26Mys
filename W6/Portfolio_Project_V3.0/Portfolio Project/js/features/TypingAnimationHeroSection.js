const roles = ['Developer', 'Designer', 'AI Engineer', 'Problem Solver'];

const typingElement = document.getElementById('typing-text');

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    // typing
    typingElement.textContent = currentRole.slice(0, charIndex++);
  } else {
    // deleting
    typingElement.textContent = currentRole.slice(0, charIndex--);
  }

  // speed control
  let speed = isDeleting ? 100 : 200;

  // word completed
  if (!isDeleting && charIndex === currentRole.length + 1) {
    isDeleting = true;
    speed = 1500; // pause before deleting
  }

  // word deleted
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 500; // pause before next word
  }

  setTimeout(typeEffect, speed);
}

// start typing
typeEffect();