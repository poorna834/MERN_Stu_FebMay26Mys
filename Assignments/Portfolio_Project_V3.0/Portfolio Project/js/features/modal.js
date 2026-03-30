function initModal() {

    const modal = document.getElementById("contact-modal");
    const modalContent = document.getElementById("modal-content");
    const modalTrigger = document.getElementById("modal-trigger");
    const modalClose = document.getElementById("modal-close");
    const formCancel = document.getElementById("form-cancel");

    
    if (!modal || !modalTrigger) {
        console.warn("⚠️ Modal core elements missing");
        return;
    }


    function openModal() {
        modal.classList.remove("hidden");

        if (modalContent) {
            setTimeout(() => {
                modalContent.classList.remove("scale-95", "opacity-0");
            }, 10);
        }
    }

   
    function closeModal() {

        if (modalContent) {
            modalContent.classList.add("scale-95", "opacity-0");
        }

        setTimeout(() => {
            modal.classList.add("hidden");
        }, 200);
    }

   
    
    modalTrigger.addEventListener("click", openModal);

    modalClose?.addEventListener("click", closeModal);
    formCancel?.addEventListener("click", closeModal);

    // Close when clicking outside
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    //  ESC key support (premium UX)
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal();
        }
    });

    console.log(" Modal Initialized Successfully");
}