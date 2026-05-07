

export function initBackToTopButton() {
  const button = document.getElementById("backToTop");

  if (!button) return;

  /* Show / Hide on Scroll */
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      button.style.display = "flex";
      button.style.alignItems = "center";
      button.style.justifyContent = "center";
    } else {
      button.style.display = "none";
    }
  });

  /* Smooth Scroll to Top */
  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}