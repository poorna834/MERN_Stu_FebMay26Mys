const sortSelect = document.getElementById('sort');

// main sort handler
sortSelect.addEventListener('change', () => {
  const value = sortSelect.value;

  let sortedProjects = [...projects]; // clone to avoid mutating original

  if (value === 'az') {
    sortedProjects.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  } else if (value === 'za') {
    sortedProjects.sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  } else if (value === 'status') {
    sortedProjects.sort((a, b) =>
      a.status.localeCompare(b.status)
    );
  }

  renderProjects(sortedProjects);
  updateResultCount(sortedProjects);
});