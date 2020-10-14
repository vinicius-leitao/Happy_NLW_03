let mymap = L.map('mapid').setView([-22.8666973, -43.264725], 13);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidmluaTE5bGVpdGFvIiwiYSI6ImNrZHp6d3NkdDFpMHoyd29heHRudzNoY3EifQ.tocnOMTKySArknevYlQgvA'
}).addTo(mymap);

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minheight: 240
}).setContent('Família acolhedora <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"> </a>')

L.marker([-22.8666973, -43.264725], {icon}).addTo(mymap)
    .bindPopup(popup)
    