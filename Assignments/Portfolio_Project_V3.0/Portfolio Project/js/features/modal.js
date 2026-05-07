function initModal() {

    const modal = document.getElementById("contact-modal");
    const modalContent = document.getElementById("modal-content");
    const modalTrigger = document.getElementById("modal-trigger");
    const modalClose = document.getElementById("modal-close");
    const formCancel = document.getElementById("form-cancel");

    if (!modal || !modalTrigger || !modalContent) {
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

    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    console.log("Modal initialized successfully");
}

document.addEventListener("DOMContentLoaded", initModal);