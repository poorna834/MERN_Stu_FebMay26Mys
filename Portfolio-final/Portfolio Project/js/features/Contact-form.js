export function initContactForm() {
  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", handleSubmit);
}



function handleSubmit(event) {
  event.preventDefault();

  const inputs = event.target.querySelectorAll(
    "input, textarea"
  );

  const name = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  const message = inputs[2].value.trim();

  if (!name || !email || !message) {
    showAlert(
      "Please fill in all required fields.",
      "error"
    );
    return;
  }

  if (!isValidEmail(email)) {
    showAlert(
      "Please enter a valid email address.",
      "error"
    );
    return;
  }

  showAlert(
    "Thank you! Your message has been received.",
    "success"
  );

  event.target.reset();
}


function isValidEmail(email) {
  const pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return pattern.test(email);
}


function showAlert(message, type) {
  const existing =
    document.querySelector(".form-alert");

  if (existing) existing.remove();

  const alert = document.createElement("div");
  alert.className = `form-alert ${type}`;
  alert.textContent = message;

  const form = document.getElementById(
    "contact-form"
  );

  form.prepend(alert);

  setTimeout(() => {
    alert.remove();
  }, 3000);
}