const projectContainer = document.getElementById("projects-container");
const searchInput = document.getElementById("project-search");
const resultCount = document.getElementById("result-count");
const sortSelect = document.getElementById("sort-select");

function renderProjects(projectArray = projectsData) {

    projectContainer.innerHTML = "";

    projectArray.forEach(project => {

        const card = document.createElement("div");

        card.className =
            "p-6 bg-white rounded-xl shadow-lg space-y-3";

        card.innerHTML = `
            <h3 class="text-2xl font-bold">${project.name}</h3>
            <p class="text-sm font-semibold text-blue-600">${project.category}</p>
            <p>${project.description}</p>
            <p><strong>Tech:</strong> ${project.technologies.join(", ")}</p>
            <p><strong>Status:</strong> ${project.status}</p>
            <p>${project.liveDemo}</p>
            <p>${project.github}</p>
        `;

        projectContainer.appendChild(card);
    });

    resultCount.textContent = `${projectArray.length} project(s) found`;
}

renderProjects();

searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase();

    const filtered = projectsData.filter(project =>
        project.name.toLowerCase().includes(value) ||
        project.description.toLowerCase().includes(value) ||
        project.category.toLowerCase().includes(value)
    );

    renderProjects(filtered);
});

sortSelect.addEventListener("change", () => {

    let sorted = [...projectsData];

    if (sortSelect.value === "name") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortSelect.value === "status") {
        sorted.sort((a, b) => a.status.localeCompare(b.status));
    }

    renderProjects(sorted);
});