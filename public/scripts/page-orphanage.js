

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

let mymap = L.map('mapid', options).setView([-22.8666973, -43.264725], 13);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidmluaTE5bGVpdGFvIiwiYSI6ImNrZHp6d3NkdDFpMHoyd29heHRudzNoY3EifQ.tocnOMTKySArknevYlQgvA'
}).addTo(mymap);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})



L.marker([-22.8666973, -43.264725], {icon}).addTo(mymap)

function selectImage(event){
    const button = event.currentTarget
   

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove('active')
    })

    button.classList.add('active')
    
    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')

    imageContainer.src = image.src
}