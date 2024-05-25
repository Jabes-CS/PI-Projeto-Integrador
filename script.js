
var map = L.map('map').setView([51.505, -0.09], 1);

var myIcon = L.icon({
    iconUrl: 'blue_Icons/wirelessRouter.jpg',
    iconSize: [38, 60],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09], {icon: myIcon}).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

L.marker([-22.8216, -47.2664], {icon: myIcon}).addTo(map)
    .bindPopup('Sumaré')
    .openPopup();

/*Sugestão do chatGPT para quando tirar o zoom do mapa, o ícone mude de tamanho tbm, mas não funcioou
function updateMarkerIcon() {
    var zoom = map.getZoom();
    var newSize = initialSize * Math.pow(1.2, zoom - 1); // Ajuste a fórmula conforme necessário
    marker.setIcon(createIcon(newSize));
}

map.on('zoomed', updateMarkerIcon);
*/