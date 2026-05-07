
export function initTypingAnimation() {
  const target = document.getElementById("typing-text");

  if (!target) return;

  const roles = [
    "AI Enthusiast",
    "Full Stack Developer",
    "Cybersecurity Enthusiast",
    "Java Programmer",
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let typingSpeed = 100;

  function animateTyping() {
    const currentWord = roles[wordIndex];

    if (!deleting) {
      target.textContent = currentWord.substring(
        0,
        charIndex++
      );
    } else {
      target.textContent = currentWord.substring(
        0,
        charIndex--
      );
    }

    typingSpeed = deleting ? 50 : 100;

    /* Pause after full word */
    if (!deleting && charIndex === currentWord.length + 1) {
      typingSpeed = 1400;
      deleting = true;
    }

    /* Move to next word */
    if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(animateTyping, typingSpeed);
  }

  animateTyping();
}