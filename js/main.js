//map code
var map = new L.Map('map');

var osmURL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
osmAttribution = '2013 OpenStreetMap contributors, Red Cross',
osm = new L.TileLayer(osmURL, {maxZoom: 18, attribution: osmAttribution});

//add NGA layers

$.getJSON('geojson/NGA_10NOV13_Damage.geojson',function(data){
   L.geoJson(data).addTo(map); 
});

$.getJSON('geojson/NGA_10NOV13_ImpassableRoads_e1900.geojson',function(data){
   L.geoJson(data).addTo(map); 
});

$.getJSON('geojson/NGA_10NOV13_BridgeOut_e1900.geojson',function(data){
   L.geoJson(data).addTo(map); 
});

map.setView(new L.LatLng(11.2500, 125.0000), 6).addLayer(osm);

//time code
function getTime() {
	var dcTimeURL = 'http://api.geonames.org/timezoneJSON?lat=38.8951&lng=-77.0367&username=amcross';
	var philTimeURL = 'http://api.geonames.org/timezoneJSON?lat=14.5833&lng=120.9667&username=amcross';

	$.getJSON(dcTimeURL, function(json, textStatus) {
		var dcTime = json.time.substring((json.time.length-5),json.time.length);
		var dcSunset = json.sunset.substring((json.sunset.length-5),json.sunset.length);
		var dcSunrise = json.sunrise.substring((json.sunrise.length-5),json.sunrise.length);
		// $('#dcTime').append('Washington DC <br />' + dcTime + '<br />SR' + dcSunrise + ' / SS' + dcSunset);
		$('#dcTime').append('Washington DC: ' + dcTime);
	});

	$.getJSON(philTimeURL, function(json, textStatus) {
		var philTime = json.time.substring((json.time.length-5),json.time.length);
		var philSunset = json.sunset.substring((json.sunset.length-5),json.sunset.length);
		var philSunrise = json.sunrise.substring((json.sunrise.length-5),json.sunrise.length);
		// $('#philTime').append('Manila <br />' + philTime + '<br />SR' + philSunrise + ' / SS' + philSunset);
		$('#philTime').append('Manila: ' + philTime);
	});
}

setTimeout(getTime(),1000);

