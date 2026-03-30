const projectCards = document.querySelectorAll('.project');
const recentContainer = document.getElementById('recent-projects');

// load existing data
let recentProjects =
  JSON.parse(localStorage.getItem('recentProjects')) || [];

// handle project click
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const project = {
      title: card.getAttribute('data-title'),
      description: card.getAttribute('data-description')
    };

    // avoid duplicates
    const exists = recentProjects.some(p => p.title === project.title);

    if (!exists) {
      recentProjects.unshift(project); // add to top

      // optional: limit to last 5
      if (recentProjects.length > 5) {
        recentProjects.pop();
      }

      localStorage.setItem(
        'recentProjects',
        JSON.stringify(recentProjects)
      );

      renderRecentProjects();
    }
  });
});

// render function
function renderRecentProjects() {
  recentContainer.innerHTML = '';

  recentProjects.forEach(project => {
    const div = document.createElement('div');
    div.classList.add('recent-item');

    div.innerHTML = `
      <h4>${project.title}</h4>
      <p>${project.description}</p>
    `;

    recentContainer.appendChild(div);
  });
}

// initial render
renderRecentProjects();