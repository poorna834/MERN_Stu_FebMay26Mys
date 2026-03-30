// categorized skills data
const skillsData = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
  backend: ['Node.js', 'Express', 'Python'],
  tools: ['Git', 'Docker', 'VS Code']
};

const skillsContainer = document.getElementById('skills');

// render grouped skills
function renderSkills(data) {
  skillsContainer.innerHTML = '';

  Object.keys(data).forEach(category => {
    const section = document.createElement('div');
    section.classList.add('skill-group');

    const title = document.createElement('h3');
    title.textContent = category.toUpperCase();

    section.appendChild(title);

    data[category].forEach(skill => {
      const skillItem = document.createElement('p');
      skillItem.textContent = skill;
      section.appendChild(skillItem);
    });

    skillsContainer.appendChild(section);
  });
}

// initial render (all grouped)
renderSkills(skillsData);