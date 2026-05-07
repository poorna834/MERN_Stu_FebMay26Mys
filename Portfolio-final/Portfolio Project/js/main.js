import { initThemeToggle } from "./features/theme-toggle.js";
import { initTypingAnimation } from "./features/TypingAnimationHeroSection.js";
import { initBackToTopButton } from "./features/BackToTopButton.js";
import { initActiveNavigation } from "./features/ActiveNavigation.js";
import { initScrollProgressIndicator } from "./features/ScrollProgressIndicator.js";
import { renderProjects } from "./features/projects-render.js";
import { renderSkills } from "./features/skills-render.js";
import { renderExperience } from "./features/experience-render.js";
import { initModal } from "./features/modal.js";
import { initContactForm } from "./features/contact-form.js";
import { initFavourites } from "./features/favourites.js";


document.addEventListener("DOMContentLoaded", () => {
  bootPortfolio();
});

function bootPortfolio() {
  /* Render Dynamic Content */
  renderSkills();
  renderProjects();
  renderExperience();

  /* UI Features */
  initThemeToggle();
  initTypingAnimation();
  initBackToTopButton();
  initActiveNavigation();
  initScrollProgressIndicator();
  initModal();
  initContactForm();

  /* After project render */
  initFavourites();

  /* Console Signature */
  console.log(
    "Poornashree Portfolio Loaded Successfully"
  );
}