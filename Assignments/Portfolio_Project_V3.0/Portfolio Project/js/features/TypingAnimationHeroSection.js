/* ==========================================
   TypingAnimationHeroSection.js
   FULL WORKING STABLE VERSION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const roles = [
        "Developer",
        "Designer",
        "AI Engineer",
        "Problem Solver"
    ];

    const typingElement = document.getElementById("typing-text");

    if (!typingElement) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typingSpeed = 100;
const deletingSpeed = 60;
const pauseAfterWord = 2000;
const pauseBeforeNext = 400;

    /* Prevent text jumping */
    typingElement.style.display = "inline-block";
    typingElement.style.width = "240px";
    typingElement.style.textAlign = "left";
    typingElement.style.verticalAlign = "top";

    function typeEffect() {

        const currentRole = roles[roleIndex];

        if (!isDeleting) {

            charIndex++;
            typingElement.textContent =
                currentRole.substring(0, charIndex);

            if (charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(typeEffect, pauseAfterWord);
                return;
            }

            setTimeout(typeEffect, typingSpeed);

        } else {

            charIndex--;
            typingElement.textContent =
                currentRole.substring(0, charIndex);

            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;

                setTimeout(typeEffect, pauseBeforeNext);
                return;
            }

            setTimeout(typeEffect, deletingSpeed);
        }
    }

    typeEffect();
});