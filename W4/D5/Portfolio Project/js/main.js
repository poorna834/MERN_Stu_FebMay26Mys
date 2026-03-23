let showOnlyFavourites = storage.get("showFavourites", false);
let currentSort = storage.get("sortType", "default");
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {

    renderSkills();
    initModal();
    initContactValidation();
    initThemeToggle();

    // Restore UI state
    const favToggleBtn = document.getElementById("fav-toggle");
    if (favToggleBtn) {
        favToggleBtn.textContent = showOnlyFavourites
            ? "Show All Projects"
            : "Show Favorites";
    }

    const sortSelect = document.getElementById("sort-select");
    if (sortSelect) {
        sortSelect.value = currentSort;
    }

    renderProjects();
});


// Click Events
document.addEventListener("click", function (e) {

    
    if (e.target.classList.contains("fav-btn")) {
        const id = Number(e.target.getAttribute("data-id"));
        toggleFavourite(id);
        renderProjects();
    }

    
    if (e.target.id === "fav-toggle") {
        showOnlyFavourites = !showOnlyFavourites;

        storage.set("showFavourites", showOnlyFavourites);

        e.target.textContent = showOnlyFavourites
            ? "Show All Projects"
            : "Show Favorites";

        renderProjects();
    }
});



document.addEventListener("change", function (e) {
    if (e.target.id === "sort-select") {
        currentSort = e.target.value;

        storage.set("sortType", currentSort);

        renderProjects();
    }
});



document.addEventListener("keydown", function (e) {

    const cards = document.querySelectorAll(".project-card");

    
    if (e.key === "/") {
        e.preventDefault();
        document.getElementById("project-search")?.focus();
    }


    if (e.key.toLowerCase() === "f") {
        showOnlyFavourites = !showOnlyFavourites;
        storage.set("showFavourites", showOnlyFavourites);
        renderProjects();
    }

    if (!cards.length) return;

    if (e.key === "ArrowDown") {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % cards.length;
        cards[currentIndex].focus();
    }

    if (e.key === "ArrowUp") {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        cards[currentIndex].focus();
    }

    if (e.key === "Enter") {
        const activeCard = document.activeElement;
        if (activeCard.classList.contains("project-card")) {
            alert("Selected: " + activeCard.innerText);
        }
    }
});