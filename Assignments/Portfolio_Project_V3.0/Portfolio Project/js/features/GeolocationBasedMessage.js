const locationElement = document.getElementById('location');

// check if geolocation is supported
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    async position => {
      const { latitude, longitude } = position.coords;

      try {
        // reverse geocoding (OpenStreetMap API)
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );

        const data = await res.json();

        const city =
          data.address.city ||
          data.address.town ||
          data.address.village ||
          'your location';

        locationElement.textContent = `You are browsing from ${city}`;
      } catch (error) {
        locationElement.textContent = 'Location detected';
      }
    },
    error => {
      // permission denied or error
      locationElement.textContent = 'Location access denied';
    }
  );
} else {
  locationElement.textContent = 'Geolocation not supported';
}