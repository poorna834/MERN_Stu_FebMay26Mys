const searchInput = document.getElementById('search');
const projectContainer = document.getElementById('projects');

// sample data (you can replace with your own)
const projects = [
  { title: 'AI Voicebot', description: 'Medical assistant bot' },
  { title: 'Portfolio Website', description: 'Personal portfolio' },
  { title: 'E-commerce App', description: 'Online shopping platform' },
  { title: 'Chat Application', description: 'Real-time messaging' }
];

// render function
function renderProjects(filteredProjects) {
  projectContainer.innerHTML = '';

  filteredProjects.forEach(project => {
    const div = document.createElement('div');
    div.classList.add('project');

    div.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;

    projectContainer.appendChild(div);
  });
}

// initial render
renderProjects(projects);

// live search
searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();

  const filtered = projects.filter(project =>
    project.title.toLowerCase().includes(searchText) ||
    project.description.toLowerCase().includes(searchText)
  );

  renderProjects(filtered);
});