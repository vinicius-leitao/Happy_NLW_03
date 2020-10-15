let mymap = L.map('mapid').setView([-22.8666973, -43.264725], 13);


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

})

let marker
mymap.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng
    
    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    marker && mymap.removeLayer(marker)

    marker = L.marker([lat, lng], {icon}).addTo(mymap)
})

function addPhotoField(){
    const container = document.querySelector("#images")
    const fieldsContainer = document.querySelectorAll('.new-upload')
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return
    }else{
        input.value = ""
        container.appendChild(newFieldContainer)
    }
    
}

function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if(fieldsContainer.length <= 1){
        span.parentNode.children[0].value = ''
    }
    else{
        span.parentNode.remove();
    }
}

function toggleSelect(event){
    buttons = document.querySelectorAll('.button-select button')
    buttons.forEach(button => button.classList.remove('active'))

    const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[name="open-on-weekends"]')
    input.value = button.dataset.value
}