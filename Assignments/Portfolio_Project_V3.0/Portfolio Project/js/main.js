
let showOnlyFavourites = storage.get("showFavourites", false);
let currentSort = storage.get("sortType", "default");
let currentIndex = 0;


document.addEventListener("DOMContentLoaded", function () {

    safeRun(renderSkills, "renderSkills");
    safeRun(initModal, "initModal");
    safeRun(initContactValidation, "initContactValidation");
    safeRun(initThemeToggle, "initThemeToggle");

    safeRun(initGreeting, "initGreeting");
    safeRun(initTyping, "initTyping");
    safeRun(initGeolocation, "initGeolocation");
    safeRun(initScrollProgress, "initScrollProgress");
    safeRun(initScrollSpy, "initScrollSpy");
    safeRun(initBackToTop, "initBackToTop");
    safeRun(initFormAutoSave, "initFormAutoSave");

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

    safeRun(renderProjects, "renderProjects");
    safeRun(renderRecentProjects, "renderRecentProjects");
});




function safeRun(fn, name) {
    try {
        if (typeof fn === "function") {
            fn();
        } else {
            console.warn(name + " is not defined");
        }
    } catch (error) {
        console.error(name + " failed:", error);
    }
}



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



function initModal() {

    const modal = document.getElementById("contact-modal");
    const modalContent = document.getElementById("modal-content");
    const modalTrigger = document.getElementById("modal-trigger");
    const modalClose = document.getElementById("modal-close");
    const formCancel = document.getElementById("form-cancel");

    if (!modal || !modalContent || !modalTrigger) {
        console.warn("Modal elements missing");
        return;
    }

    function openModal() {
        modal.classList.remove("hidden");

        setTimeout(() => {
            modalContent.classList.remove("scale-95", "opacity-0");
            modalContent.classList.add("scale-100", "opacity-100");
        }, 10);
    }

    function closeModal() {
        modalContent.classList.remove("scale-100", "opacity-100");
        modalContent.classList.add("scale-95", "opacity-0");

        setTimeout(() => {
            modal.classList.add("hidden");
        }, 300);
    }

    modalTrigger.addEventListener("click", openModal);

    modalClose?.addEventListener("click", closeModal);
    formCancel?.addEventListener("click", closeModal);

    modal.addEventListener("click", function (e) {
        if (e.target === modal) closeModal();
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeModal();
    });

    console.log("Modal initialized");
}


function initScrollProgress() {

    const bar = document.getElementById("scroll-progress");

    window.addEventListener("scroll", () => {

        const scrolled = window.scrollY;
        const height =
            document.documentElement.scrollHeight - window.innerHeight;

        const percent = (scrolled / height) * 100;

        if (bar) bar.style.width = percent + "%";
    });
}


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



function initBackToTop() {

    const btn = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        btn?.classList.toggle("hidden", window.scrollY < 300);
    });

    btn?.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}



function initGreeting() {

    const el = document.getElementById("greeting");
    if (!el) return;

    const hour = new Date().getHours();

    el.textContent =
        hour < 12 ? "Good Morning"
        : hour < 18 ? "Good Afternoon"
        : "Good Evening";
}



function initTyping() {

    const el = document.getElementById("typing-text");
    if (!el) return;

    const roles = [
        "Developer",
        "AI Engineer",
        "Problem Solver"
    ];

    let i = 0;
    let j = 0;
    let deleting = false;

    function type() {

        const word = roles[i];
        el.textContent = word.slice(0, j);

        if (!deleting) {
            j++;

            if (j > word.length) {
                deleting = true;
                setTimeout(type, 1000);
                return;
            }

        } else {
            j--;

            if (j === 0) {
                deleting = false;
                i = (i + 1) % roles.length;
            }
        }

        setTimeout(type, deleting ? 50 : 100);
    }

    type();
}

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
                (data.address.city ||
                 data.address.town ||
                 "your area");

        } catch {
            el.textContent = "Location detected";
        }
    });
}



function initFormAutoSave() {

    const form = document.getElementById("contact-form");
    if (!form) return;

    const inputs = form.querySelectorAll("input, textarea");

    const saved =
        JSON.parse(localStorage.getItem("formData")) || {};

    inputs.forEach(input => {
        input.value = saved[input.name] || "";
    });

    inputs.forEach(input => {

        input.addEventListener("input", () => {

            const data = {};

            inputs.forEach(i => {
                data[i.name] = i.value;
            });

            localStorage.setItem(
                "formData",
                JSON.stringify(data)
            );
        });
    });
}


function renderRecentProjects() {

    const container =
        document.getElementById("recent-projects");

    if (!container) return;

    const recent =
        JSON.parse(localStorage.getItem("recentProjects")) || [];

    container.innerHTML = "";

    recent.forEach(project => {

        const div = document.createElement("div");

        div.innerHTML = `<p>${project.title}</p>`;

        container.appendChild(div);
    });
}