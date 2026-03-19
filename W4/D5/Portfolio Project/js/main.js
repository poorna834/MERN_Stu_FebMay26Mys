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

    // ⭐ Favourite
    if (e.target.classList.contains("fav-btn")) {
        const id = Number(e.target.getAttribute("data-id"));
        toggleFavourite(id);
        renderProjects();
    }

    // 🎯 Toggle favourites view
    if (e.target.id === "fav-toggle") {
        showOnlyFavourites = !showOnlyFavourites;

        storage.set("showFavourites", showOnlyFavourites);

        e.target.textContent = showOnlyFavourites
            ? "Show All Projects"
            : "Show Favorites";

        renderProjects();
    }
});


// 🔄 Sorting
document.addEventListener("change", function (e) {
    if (e.target.id === "sort-select") {
        currentSort = e.target.value;

        storage.set("sortType", currentSort);

        renderProjects();
    }
});


// ⌨️ Keyboard Navigation
document.addEventListener("keydown", function (e) {

    const cards = document.querySelectorAll(".project-card");

    // Shortcut: focus search
    if (e.key === "/") {
        e.preventDefault();
        document.getElementById("project-search")?.focus();
    }

    // Shortcut: toggle favourites
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