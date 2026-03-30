const FAV_KEY = "favourites";

function getFavourites() {
    return storage.get(FAV_KEY, []);
}

function toggleFavourite(id) {
    const favs = new Set(getFavourites());

    if (favs.has(id)) {
        favs.delete(id);
    } else {
        favs.add(id);
    }

    storage.set(FAV_KEY, [...favs]);
}