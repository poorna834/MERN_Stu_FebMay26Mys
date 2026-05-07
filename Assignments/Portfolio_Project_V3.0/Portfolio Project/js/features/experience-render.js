function displayExperience() {
  const container = document.getElementById("experience-container");

  // Create the grid wrapper
  container.className = "grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto";

  container.innerHTML = experiences.map(exp => `
    <div class="experience-card bg-white border border-gray-200 p-6 rounded-xl shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between">
      <div>
        <span class="duration-tag text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded mb-4 inline-block">
          ${exp.duration}
        </span>
        <h3 class="text-xl font-bold text-gray-900 mb-1">${exp.role}</h3>
        <h4 class="text-md font-medium text-blue-500 mb-3">${exp.company}</h4>
        <p class="text-gray-600 text-sm leading-relaxed">${exp.description}</p>
      </div>
    </div>
  `).join('');
}

// Call the function to render on page load
displayExperience();