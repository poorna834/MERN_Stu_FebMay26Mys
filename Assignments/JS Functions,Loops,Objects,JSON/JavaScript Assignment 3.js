// JSON Settings Merge

function mergeSettings(savedSettingsJSON, defaultSettings) {
    const savedSettings = JSON.parse(savedSettingsJSON);
    const merged = {};

    for (let key in defaultSettings) {
        if (savedSettings.hasOwnProperty(key)) {
            merged[key] = savedSettings[key];
        } else {
            merged[key] = defaultSettings[key];
        }
    }

    return {
        merged: merged,
        mergedJSON: JSON.stringify(merged)
    };
}

const defaultSettings = {
    theme: "light",
    notifications: true,
    language: "en"
};

const savedSettingsJSON = '{"theme":"dark","language":"fr"}';

const result = mergeSettings(savedSettingsJSON, defaultSettings);
console.log(result);