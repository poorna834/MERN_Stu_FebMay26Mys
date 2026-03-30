// ensure each project has a flag
const projects = [
  {
    title: 'AI Voicebot',
    description: 'This is a detailed description of the AI medical voicebot project with multiple features and integrations.',
    expanded: false
  },
  {
    title: 'Portfolio',
    description: 'A personal portfolio showcasing projects, skills, and achievements in web development.',
    expanded: false
  }
];

// render function
function renderProjects(projectList) {
  const container = document.getElementById('projects');
  container.innerHTML = '';

  projectList.forEach((project, index) => {
    const div = document.createElement('div');
    div.classList.add('project');

    const shortText = project.description.slice(0, 60) + '...';
    const fullText = project.description;

    div.innerHTML = `
      <h3>${project.title}</h3>
      <p>
        ${project.expanded ? fullText : shortText}
      </p>
      <button data-index="${index}">
        ${project.expanded ? 'View Less' : 'View More'}
      </button>
    `;

    container.appendChild(div);
  });

  // attach toggle events
  document.querySelectorAll('#projects button').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = btn.getAttribute('data-index');

      projects[i].expanded = !projects[i].expanded;

      renderProjects(projects);
    });
  });
}

// initial render
renderProjects(projects);