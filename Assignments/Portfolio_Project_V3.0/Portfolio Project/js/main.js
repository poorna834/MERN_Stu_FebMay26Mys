
let showOnlyFavourites = storage.get("showFavourites", false);
let currentSort = storage.get("sortType", "default");
let currentIndex = 0;



document.addEventListener("DOMContentLoaded", function () {

    renderSkills();
    initModal();
    initContactValidation();
    initThemeToggle();

    initGreeting();
    initTyping();
    initGeolocation();
    initScrollProgress();
    initScrollSpy();
    initBackToTop();
    initFormAutoSave();

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
    renderRecentProjects();
});


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



// Scroll Progress
function initScrollProgress() {
    const bar = document.getElementById("scroll-progress");

    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const percent = (scrolled / height) * 100;
        if (bar) bar.style.width = percent + "%";
    });
}


// Scroll Spy
function initScrollSpy() {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 150) {
                current = sec.id;
            }
        });

        links.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });
}


// Back To Top
function initBackToTop() {
    const btn = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        btn?.classList.toggle("hidden", window.scrollY < 300);
    });

    btn?.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


// Greeting
function initGreeting() {
    const el = document.getElementById("greeting");
    if (!el) return;

    const hour = new Date().getHours();
    el.textContent =
        hour < 12 ? "Good Morning" :
        hour < 18 ? "Good Afternoon" :
        "Good Evening";
}


// Typing Animation
function initTyping() {
    const el = document.getElementById("typing-text");
    if (!el) return;

    const roles = ["Developer","AI Engineer","Problem Solver"];
    let i = 0, j = 0, del = false;

    function type() {
        const word = roles[i];
        el.textContent = word.slice(0, j);

        if (!del) {
            j++;
            if (j === word.length) {
                del = true;
                setTimeout(type, 1000);
                return;
            }
        } else {
            j--;
            if (j === 0) {
                del = false;
                i = (i + 1) % roles.length;
            }
        }

        setTimeout(type, del ? 50 : 100);
    }

    type();
}


// Geolocation
function initGeolocation() {
    const el = document.getElementById("location");
    if (!el || !navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(async (pos) => {
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&format=json`
            );
            const data = await res.json();

            el.textContent =
                "You are browsing from " +
                (data.address.city || data.address.town || "your area");
        } catch {
            el.textContent = "Location detected";
        }
    });
}


// Form Auto Save
function initFormAutoSave() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const inputs = form.querySelectorAll("input, textarea");

    const saved = JSON.parse(localStorage.getItem("formData")) || {};
    inputs.forEach(i => i.value = saved[i.name] || "");

    inputs.forEach(input => {
        input.addEventListener("input", () => {
            const data = {};
            inputs.forEach(i => data[i.name] = i.value);
            localStorage.setItem("formData", JSON.stringify(data));
        });
    });
}


// Recently Viewed Projects
function renderRecentProjects() {
    const container = document.getElementById("recent-projects");
    if (!container) return;

    const recent = JSON.parse(localStorage.getItem("recentProjects")) || [];

    container.innerHTML = "";

    recent.forEach(p => {
        const div = document.createElement("div");
        div.innerHTML = `<p>${p.title}</p>`;
        container.appendChild(div);
    });
}