console.log(coordinates[1],coordinates[0]);
var map = L.map('map').setView([coordinates[1],coordinates[0]], 9);//[latitude,longitude],zoom

// console.log("Coordinates:", coordinates);
// console.log("Address:", address);

// Add OpenStreetMap tiles
//NON SATELLITE ONE
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);


//SATELLITE ONE
// L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
//     maxZoom: 30,
//     attribution: 'Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community'
// }).addTo(map);

const redIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.marker([coordinates[1], coordinates[0]],{ icon: redIcon })
  .addTo(map)
  .bindPopup(address) // You can replace this with your listing title or address
  .openPopup();
