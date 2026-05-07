

import {
  getLocalData,
  setLocalData
} from "./localStorage.js";

const STORAGE_KEY = "favouriteProjects";


export function initFavourites() {
  restoreFavouriteButtons();
  attachFavouriteEvents();
}


function restoreFavouriteButtons() {
  const favourites =
    getLocalData(STORAGE_KEY) || [];

  const buttons =
    document.querySelectorAll(".favourite-btn");

  buttons.forEach(button => {
    const id = button.dataset.id;

    if (favourites.includes(id)) {
      markSaved(button);
    }
  });
}


function attachFavouriteEvents() {
  document.addEventListener("click", event => {
    const button =
      event.target.closest(".favourite-btn");

    if (!button) return;

    const id = button.dataset.id;

    let favourites =
      getLocalData(STORAGE_KEY) || [];

    if (favourites.includes(id)) {
      favourites = favourites.filter(
        item => item !== id
      );

      markUnsaved(button);
    } else {
      favourites.push(id);
      markSaved(button);
    }

    setLocalData(STORAGE_KEY, favourites);
  });
}


function markSaved(button) {
  button.textContent = "★ Saved";
  button.classList.add("saved");
}

function markUnsaved(button) {
  button.textContent = "☆ Favourite";
  button.classList.remove("saved");
}