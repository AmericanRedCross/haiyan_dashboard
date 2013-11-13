//map code
var osmURL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
osmAttribution = '&copy; OpenStreetMap contributors, <a href="redcross.org">Red Cross</a>',
osm = new L.TileLayer(osmURL, {maxZoom: 18, attribution: osmAttribution});

var hotosmURL = 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
hotAttribution = '&copy; OpenStreetMap contributors, <a href="http://hot.openstreetmap.org/">Humanitarina OpenStreetMap Team</a>, <a href="redcross.org">Red Cross</a>',
hotosm = new L.TileLayer(hotosmURL, {maxZoom: 18, attribution: hotAttribution});

var taclobanSatURL = 'http://hiu-maps.net/hot/1.0.0/taclobancity-post-flipped/{z}/{x}/{y}.png',
taclobanSatAtt = '&copy; US Government (USG) under the NextView (NV) License',
taclobanSat = new L.TileLayer(taclobanSatURL, {maxZoom: 20, attribution: taclobanSatAtt});

var surgeMapLayer = L.mapbox.tileLayer('americanredcross.StormSurgeMaxHeight');
var surgeGridLayer = L.mapbox.gridLayer('americanredcross.StormSurgeMaxHeight');
var surgeGridControl = L.mapbox.gridControl(surgeGridLayer);

var ngaLayer = L.mapbox.tileLayer('americanredcross.NGA_DamageAssessment_Nov11');
var ngaGridLayer = L.mapbox.gridLayer('americanredcross.NGA_DamageAssessment_Nov11');
var ngaGridControl = L.mapbox.gridControl(ngaGridLayer);

var copernicusBldgsNov8Layer = L.mapbox.tileLayer('americanredcross.COPERNIUCS_Complete_Bldgs_Damages_Nov8');
//  ! has a legend, not a teaser

var impassableRoadsLayer = L.mapbox.tileLayer('americanredcross.g6869a4i');
//  ! has a legend, not a teaser

var atriskUrl ='http://openmapsurfer.uni-hd.de/tiles/disaster/haiyan/elr/x={x}&y={y}&z={z}';
var atriskLayer = L.tileLayer(atriskUrl, {attribution: '(c) OpenStreetMap contriubutors (c) tiles: GIScience Heidelberg'});

var prepostRoads = L.mapbox.tileLayer('americanredcross.w7xbhuxr');
var prepostRoadsGridLayer = L.mapbox.tileLayer('americanredcross.w7xbhuxr');
var prepostRoadsGridControl = L.mapbox.gridControl(prepostRoadsGridLayer);

var evacPersonsByProvince = L.mapbox.tileLayer('americanredcross.Haiyan_2013-11-11_EvacuatedPersonsByProvince');
var evacPersonsByProvinceGridLayer = L.mapbox.tileLayer('americanredcross.Haiyan_2013-11-11_EvacuatedPersonsByProvince');
var evacPersonsByProvinceGridControl = L.mapbox.gridControl(evacPersonsByProvinceGridLayer);

var map = L.map('map', {
        zoom: 6,
        center: [11.2500, 125.0000],
        layers: [hotosm]
});

var legendControl = L.mapbox.legendControl().addTo(map);

map.on('overlayadd', function(eventLayer){
        if (eventLayer.name == "Storm Surge Max Height<br>(zoom layers 6-10)"){
                map.addLayer(surgeGridLayer);
                map.addControl(surgeGridControl);
        }
        if (eventLayer.name == "DamageAssessment_Nov11<br>(zoom levels 10-16)"){
                map.addLayer(ngaGridLayer);
                map.addControl(ngaGridControl);
        }
        if (eventLayer.name == "Pre/Post Roads <br>(zoom levels 11-17)"){
                map.addLayer(prepostRoadsGridLayer);
                map.addControl(prepostRoadsGridControl);
        }      
        if (eventLayer.name == "COPERNIUCS_Complete_Bldgs_Damages_Nov8<br>(zoom levels 14-19)"){
                legendControl.addLegend(eventLayer.layer.getTileJSON().legend);
        }     
        if (eventLayer.name == "Impassable Roads<br>(zoom levels 9-16)"){
                legendControl.addLegend(eventLayer.layer.getTileJSON().legend);
        }
        if (eventLayer.name == "Evacuated Persons by Province Nov-11 <br>(zoom levels 6-10)"){
                legendControl.addLegend(eventLayer.layer.getTileJSON().legend);
                map.addLayer(evacPersonsByProvinceGridLayer);
                map.addControl(evacPersonsByProvinceGridControl);
        }              
});

map.on('overlayremove', function(eventLayer){
        if (eventLayer.name == "Storm Surge Max Height<br>(zoom layers 6-10)"){
                map.removeLayer(surgeGridLayer);
                map.removeControl(surgeGridControl);
        }
        if (eventLayer.name == "DamageAssessment_Nov11<br>(zoom levels 10-16)"){
                map.removeLayer(ngaGridLayer);
                map.removeControl(ngaGridControl);
        }
        if (eventLayer.name == "Pre/Post Roads <br>(zoom levels 11-17)"){
                map.addLayer(prepostRoadsGridLayer);
                map.addControl(prepostRoadsGridControl);
        }
        if (eventLayer.name == "COPERNIUCS_Complete_Bldgs_Damages_Nov8<br>(zoom levels 14-19)"){
                legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);                       
        }
        if (eventLayer.name == "Impassable Roads<br>(zoom levels 9-16)"){
                legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);                       
        }
        if (eventLayer.name == "Evacuated Persons by Province Nov-11 <br>(zoom levels 6-10)"){
                legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);
                map.removeLayer(evacPersonsByProvinceGridLayer);
                map.removeControl(evacPersonsByProvinceGridControl);
        }     
});

var zoomLevel = map.getZoom().toString();
$("#zoomLevel").html(zoomLevel);

map.on('zoomend', function(){
        zoomLevel = map.getZoom().toString();
        $("#zoomLevel").html(zoomLevel);
})

var baseMaps = {
        "OSM standard": osm,
        "HOT OSM": hotosm,
        "Post Imagery - Tacloban": taclobanSat        
};

var overlayLayers = {
        "Storm Surge Max Height<br>(zoom layers 6-10)": surgeMapLayer,
        "COPERNIUCS_Complete_Bldgs_Damages_Nov8<br>(zoom levels 14-19)": copernicusBldgsNov8Layer,
        "DamageAssessment_Nov11<br>(zoom levels 10-16)": ngaLayer,
        "Impassable Roads<br>(zoom levels 9-16)": impassableRoadsLayer,
        "Elements At Risk": atriskLayer,
        "Pre/Post Roads <br>(zoom levels 11-17)": prepostRoads,
        "Evacuated Persons by Province Nov-11 <br>(zoom levels 6-10)": evacPersonsByProvince
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
                $('#dcTime').append(json.time);
        });

        $.getJSON(philTimeURL, function(json, textStatus) {
                var philTime = json.time.substring((json.time.length-5),json.time.length);
                var philSunset = json.sunset.substring((json.sunset.length-5),json.sunset.length);
                var philSunrise = json.sunrise.substring((json.sunrise.length-5),json.sunrise.length);
                // $('#philTime').append('Manila <br />' + philTime + '<br />SR' + philSunrise + ' / SS' + philSunset);
                $('#philTime').append(json.time);
        });
}

setTimeout(getTime(),1000);


//map size code
$('#map').css("height", ($(window).height()));
$(window).on("resize", resize);
resize();
function resize(){
	$('#map').css("height", ($(window).height()));    
}
