

export function initModal() {
  createModalStructure();
  attachProjectModalEvents();
}


function createModalStructure() {
  if (document.getElementById("project-modal")) return;

  const modal = document.createElement("div");
  modal.id = "project-modal";
  modal.className = "modal-overlay";

  modal.innerHTML = `
    <div class="modal-box">
      <button id="close-modal" class="modal-close">
        ✕
      </button>

      <h2 id="modal-title"></h2>
      <p id="modal-description"></p>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn =
    document.getElementById("close-modal");

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", e => {
    if (e.target.id === "project-modal") {
      closeModal();
    }
  });
}


function attachProjectModalEvents() {
  document.addEventListener("click", e => {
    const card = e.target.closest(".project-card");

    if (!card) return;

    const title =
      card.querySelector("h3")?.textContent || "";

    const desc =
      card.querySelector("p")?.textContent || "";

    openModal(title, desc);
  });
}


function openModal(title, description) {
  const modal =
    document.getElementById("project-modal");

  const modalTitle =
    document.getElementById("modal-title");

  const modalDescription =
    document.getElementById("modal-description");

  modalTitle.textContent = title;
  modalDescription.textContent = description;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}


function closeModal() {
  const modal =
    document.getElementById("project-modal");

  modal.style.display = "none";
  document.body.style.overflow = "auto";
}