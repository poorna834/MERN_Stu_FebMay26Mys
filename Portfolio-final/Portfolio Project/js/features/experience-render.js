

import { experience } from "../data/experience.js";

export function renderExperience() {
  const container = document.getElementById("experience-container");

  if (!container) return;

  container.innerHTML = "";

  experience.forEach(item => {
    const card = document.createElement("div");
    card.className = "card experience-card";

    card.innerHTML = `
      <h3>${item.company}</h3>
      <p><strong>${item.role}</strong></p>
      <p>${item.description}</p>
    `;

    container.appendChild(card);
  });
}