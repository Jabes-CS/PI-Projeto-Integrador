function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: -23.5505, lng: -46.6333},
    });

    // Adicione um marcador para a filial em São Paulo
    var saoPauloMarker = new google.maps.Marker({
        position: {lat: -23.5505, lng: -46.6333},
        map: map,
        title: 'Filial em São Paulo',
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' // Ícone personalizado para filiais
    });

    // Informações sobre a filial em São Paulo
    var saoPauloInfo = '<div><h2>Filial em São Paulo</h2>' +
                       '<p>Endereço IP: 192.168.0.21 até 192.168.0.40</p>' +
                       '<p>Máscara de Sub-rede: 255.255.255.0</p></div>';

    // Cria a janela de informação para exibir os detalhes quando o marcador é clicado
    var saoPauloInfoWindow = new google.maps.InfoWindow({
        content: saoPauloInfo
    });

    // Adiciona um evento de clique ao marcador
    saoPauloMarker.addListener('click', function() {
        saoPauloInfoWindow.open(map, saoPauloMarker);
    });
}
