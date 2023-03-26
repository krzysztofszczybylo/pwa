navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    // Show a map centered at latitude / longitude.


    var mapOptions = {
        center: [latitude, longitude],
        zoom: 10
    }
    
    // Creating a map object
    var map = new L.map('map', mapOptions);
    
    // Creating a Layer object
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    
    // Adding layer to the map
    map.addLayer(layer);

});