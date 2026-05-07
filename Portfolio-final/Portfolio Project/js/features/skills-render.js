
import { skills } from "../data/skills.js";

export function renderSkills() {
  const container = document.getElementById("skills-container");

  if (!container) return;

  container.innerHTML = "";

  skills.forEach(skill => {
    const percentage = getSkillPercentage(skill.level);

    const card = document.createElement("div");
    card.className = "card skill-card";

    card.innerHTML = `
      <h3>${skill.name}</h3>
      <p>${skill.level}</p>

      <div class="skill-progress">
        <div 
          class="skill-progress-fill"
          style="width:${percentage}%">
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

/* =========================
   LEVEL TO PERCENTAGE
========================= */
function getSkillPercentage(level) {
  switch (level.toLowerCase()) {
    case "advanced":
      return 90;

    case "intermediate":
      return 70;

    case "beginner":
      return 45;

    default:
      return 60;
  }
}