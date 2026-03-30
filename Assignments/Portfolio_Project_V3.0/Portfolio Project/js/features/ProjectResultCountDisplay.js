const resultCount = document.getElementById('result-count');

// update count function
function updateResultCount(filteredProjects) {
  resultCount.textContent = `${filteredProjects.length} project(s) found`;
}