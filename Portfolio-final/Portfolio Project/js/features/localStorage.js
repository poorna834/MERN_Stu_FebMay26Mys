

export function setLocalData(key, value) {
  try {
    const convertedValue = JSON.stringify(value);
    localStorage.setItem(key, convertedValue);
  } catch (error) {
    console.error(
      `Unable to store data for key: ${key}`,
      error
    );
  }
}

export function getLocalData(key) {
  try {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error(
      `Unable to fetch data for key: ${key}`,
      error
    );

    return null;
  }
}

export function removeLocalData(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(
      `Unable to remove data for key: ${key}`,
      error
    );
  }
}

export function clearAllLocalData() {
  try {
    localStorage.clear();
  } catch (error) {
    console.error(
      "Unable to clear local storage",
      error
    );
  }
}