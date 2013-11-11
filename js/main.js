//map code
var map = new L.Map('map');

var osmURL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
osmAttribution = '&copy; OpenStreetMap contributors, <a href="redcross.org">Red Cross</a>',
osm = new L.TileLayer(osmURL, {maxZoom: 18, attribution: osmAttribution});

var hotosmURL = 'http://c.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
hotAttribution = '&copy; OpenStreetMap contributors, <a href="http://hot.openstreetmap.org/">Humanitarina OpenStreetMap Team</a>, <a href="redcross.org">Red Cross</a>',
hotosm = new L.TileLayer(hotosmURL, {maxZoom: 18, attribution: hotAttribution});

map.setView(new L.LatLng(11.2500, 125.0000), 6).addLayer(osm);

//add the map layer controls
var baseMaps = {
	'OSM Default': osm,
	'HOT OSM': hotosm
}

// var overlayLayers = {
// 	"Damage Assesment": dmgAssessment,
// 	"COD Boundaries": codBoundaries
// }

L.control.layers(baseMaps).addTo(map);

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

