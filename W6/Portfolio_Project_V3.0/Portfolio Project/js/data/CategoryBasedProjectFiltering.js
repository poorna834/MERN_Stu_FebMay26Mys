const filterButtons = document.querySelectorAll('.filter-btn');

// example project structure (ensure category exists)
const projects = [
  { title: 'AI Voicebot', category: 'backend' },
  { title: 'Portfolio Website', category: 'frontend' },
  { title: 'E-commerce App', category: 'fullstack' },
  { title: 'Chat App', category: 'backend' }
];

let currentCategory = 'all';

// filter function
function filterProjects() {
  let filtered = projects;

  if (currentCategory !== 'all') {
    filtered = projects.filter(project =>
      project.category.toLowerCase() === currentCategory
    );
  }

  renderProjects(filtered);
  updateResultCount(filtered);
}

// button click handling
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // get category from data attribute
    currentCategory = button.getAttribute('data-category').toLowerCase();

    filterProjects();
  });
});