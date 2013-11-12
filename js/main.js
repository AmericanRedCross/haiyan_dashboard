//map code
var osmURL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
osmAttribution = '&copy; OpenStreetMap contributors, <a href="redcross.org">Red Cross</a>',
osm = new L.TileLayer(osmURL, {maxZoom: 18, attribution: osmAttribution});

var hotosmURL = 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
hotAttribution = '&copy; OpenStreetMap contributors, <a href="http://hot.openstreetmap.org/">Humanitarina OpenStreetMap Team</a>, <a href="redcross.org">Red Cross</a>',
hotosm = new L.TileLayer(hotosmURL, {maxZoom: 18, attribution: hotAttribution});

var ngaLayer = L.mapbox.tileLayer('americanredcross.NGA_DamageAssessment_Nov11');
var copernicusBldgsNov8Layer = L.mapbox.tileLayer('americanredcross.COPERNIUCS_Complete_Bldgs_Damages_Nov8');
var stormSurgeHeightLayer = L.mapbox.tileLayer('americanredcross.StormSurgeMaxHeight');

var map = L.map('map', {
	zoom: 6,
	center: [11.2500, 125.0000],
	// layers: [osm, hotosm, ngaLayer, copernicusBldgsNov8Layer, stormSurgeHeightLayer]
});

var zoomLevel = map.getZoom().toString();
$("#zoomLevel").html(zoomLevel);

map.on('zoomend', function(){
	zoomLevel = map.getZoom().toString();
	$("#zoomLevel").html(zoomLevel);
})

var baseMaps = {
	"OSM standard": osm,
	"HOT OSM": hotosm	
};

var overlayLayers = {
	"Storm Surge Max Height<br>(zoom layers 6-10)": stormSurgeHeightLayer,
	"COPERNIUCS_Complete_Bldgs_Damages_Nov8<br>(zoom levels 14-19)": copernicusBldgsNov8Layer,
	"NGA_DamageAssessment_Nov11<br>(zoom levels 10-16)": ngaLayer	
}

L.control.layers(baseMaps, overlayLayers).addTo(map);



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


//map size code
$('#map').css("height", ($(window).height()));
$(window).on("resize", resize);
resize();
function resize(){

    if($(window).width()>=980){
        $('#map').css("height", ($(window).height()));    
    }else{
        $('#map').css("height", ($(window).height()));    
    }

}
