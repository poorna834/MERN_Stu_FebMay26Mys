const storage = {
    get(key, defaultValue = null) {
        try {
            const value = JSON.parse(localStorage.getItem(key));
            return value ?? defaultValue;
        } catch {
            return defaultValue;
        }
    },

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    remove(key) {
        localStorage.removeItem(key);
    }
};