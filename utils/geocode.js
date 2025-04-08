// utils/geocode.js

async function geocodeLocation(location) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`,
      {
        headers: {
          'User-Agent': 'YourAppName/1.0 (your-email@example.com)' // Required by Nominatim
        }
      }
    );

    const data = await response.json();

    if (!data || data.length === 0) {
      return null;
    }

    return [
      parseFloat(data[0].lon),
      parseFloat(data[0].lat),
    ];

  } catch (err) {
    console.error("Geocoding error:", err);
    return null;
  }
}

module.exports = geocodeLocation;

