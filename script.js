
var map = L.map('map', {
    maxBounds: [
        [85, -150],  // Coordenadas sudoeste do retângulo (latitude, longitude)
        [-85, 180]   // Coordenadas nordeste do retângulo (latitude, longitude)
    ],
    minZoom: 2.4,
    maxBoundsViscosity: 1,  // Controla a "elasticidade" do limite (1.0 significa sem elasticidade)
}).setView([24, -0.00], 1);

var myIcon = L.icon({
    iconUrl: 'prédioAzul.png',
    iconSize: [28, 45],
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-9.655742, -35.698802], {icon: myIcon}).addTo(map)
    .bindPopup('<b>Filial de Maceió, Brasil.</b><br>Ips válidos:<br>192.168.0.22<br>192.168.0.23<br>192.168.0.24<br>')

L.marker([13.701039, -89.222834], {icon: myIcon}).addTo(map)
        .bindPopup('<b>Filial de São Salvador, El Salvador.</b><br>Ips válidos:<br>192.168.0.25<br>192.168.0.26<br>192.168.0.27<br>192.168.0.28<br><br>')

L.marker([32.158819, 34.795956], {icon: myIcon}).addTo(map)
    .bindPopup('<b>Filial de Telavive, Israel.<br>Ips válidos:<br></b>192.168.0.29<br>192.168.0.30<br>192.168.0.31<br>192.168.0.32<br>')

L.marker([1.365430, 103.829895], {icon: myIcon}).addTo(map)
        .bindPopup('<b>Filial de Bishan, Singapura.</b><br>Ips válidos:<br>192.168.0.33<br>192.168.0.34<br>192.168.0.35<br>192.168.0.36<br>')

L.marker([25.044153, 121.506729], {icon: myIcon}).addTo(map)
    .bindPopup('<b>Filial de Taipei, Taiwan.</b><br>Ips válidos:<br>192.168.0.37<br>192.168.0.38<br>192.168.0.39<br>')