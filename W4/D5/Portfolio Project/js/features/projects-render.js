function renderProjects(){

    const projectContainer = document.getElementById("projects-container");

    if(!projectContainer){
        console.log("Projects Container Not Found");
        return;
    }

    projectContainer.innerHTML = "";

    let projectsToRender = [...projectsData];
    const favourites = getFavourites();

    // 🎯 Filter
    if (showOnlyFavourites) {
        projectsToRender = projectsToRender.filter(project =>
            favourites.includes(project.id)
        );
    }

    // 🔄 Sorting
    const statusOrder = { "Live": 1, "Demo": 2 };

    switch(currentSort){
        case "name":
            projectsToRender.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
            break;

        case "status":
            projectsToRender.sort((a, b) =>
                statusOrder[a.status] - statusOrder[b.status]
            );
            break;

        case "category":
            projectsToRender.sort((a, b) =>
                a.category.localeCompare(b.category)
            );
            break;
    }

    // 🎨 Render
    projectsToRender.forEach(function(project){

        const card = document.createElement("div");
        card.className = "project-card p-8 text-center bg-purple-200 rounded-3xl shadow-lg";
        card.setAttribute("tabindex", "0");

        const favBtn = document.createElement("button");
        favBtn.className = "fav-btn text-xl mt-2";
        favBtn.setAttribute("data-id", project.id);
        favBtn.textContent = favourites.includes(project.id) ? "★" : "☆";

        const projectName = document.createElement("h3");
        projectName.className = "text-xl font-bold mb-2";
        projectName.textContent = project.name;

        const projectCategory = document.createElement("p");
        projectCategory.className = "text-sm font-semibold";
        projectCategory.textContent = project.category;

        const projectDescription = document.createElement("p");
        projectDescription.className = "text-sm";
        projectDescription.textContent = project.description;

        const projectTechnologies = document.createElement("p");
        projectTechnologies.className = "text-sm";
        projectTechnologies.textContent = project.technologies.join(", ");

        const projectStatus = document.createElement("p");
        projectStatus.className = "text-sm";
        projectStatus.textContent = project.status;

        const projectLiveDemo = document.createElement("p");
        projectLiveDemo.className = "text-sm";
        projectLiveDemo.textContent = project.liveDemo;

        const projectGithub = document.createElement("p");
        projectGithub.className = "text-sm";
        projectGithub.textContent = project.github;

        card.appendChild(projectName);
        card.appendChild(projectCategory);
        card.appendChild(projectDescription);
        card.appendChild(projectTechnologies);
        card.appendChild(projectStatus);
        card.appendChild(projectLiveDemo);
        card.appendChild(projectGithub);
        card.appendChild(favBtn);

        projectContainer.appendChild(card);
    });
}