// map code

// json object of map layers
// there are 2 objects in the json, one for "swtichable" base maps, and one for overlays
// map layers in the overlay object have a group property indicating in which group
// they should be listed

var baseLayers,
    groupedOverlays;

var maplayers = {
    baseLayers: {
        "OpenStreetMap": {
            "id": "osm",
            "url": "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            "attribution": "&copy; OpenStreetMap contributors, <a href='redcross.org'>Red Cross</a>"
        },
        "HOT OSM": {
            "id": "hotosm",
            "url": "http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
            "attribution": "&copy; OpenStreetMap contributors, <a href='http://hot.openstreetmap.org/'>Humanitarina OpenStreetMap Team</a>, <a href='redcross.org'>Red Cross</a>"
        },
        "Toner": {
            "id": "stamen",
            "url": "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
            "attribution": "Map tiles by <a href='http://stamen.com'>Stamen Design</a>, under <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a>. Data by <a href='http://openstreetmap.org'>OpenStreetMap</a>, under <a href='http://creativecommons.org/licenses/by-sa/3.0'>CC BY SA</a>."
        },
        "Post Imagery - Tacloban": {
            "id": "taclobanSat",
            "url": "http://hiu-maps.net/hot/1.0.0/taclobancity-post-flipped/{z}/{x}/{y}.png",
            "attribution": "&copy; US Government (USG) under the NextView (NV) License"
        },
        "Pre Imagery - Medellin": {
            "id": "medellin",
            "url": "http://hiu-maps.net/hot/1.0.0/taclobancity-post-flipped/{z}/{x}/{y}.png",
            "attribution": "&copy; US Government (USG) under the NextView (NV) License"
        }
    },
    groupedOverlays: {
        "Elements at Risk": {
            "id": "astrisk",
            "url": "http://openmapsurfer.uni-hd.de/tiles/disaster/haiyan/elr/x={x}&y={y}&z={z}",
            "attribution": "(c) OpenStreetMap contriubutors (c) tiles: GIScience Heidelberg",
            "group": "base"
        },
        "Storm Surge Max Height": {
            "id": "surge",
            "url": "http://{switch}.tiles.mapbox.com/v3/americanredcross.StormSurgeMaxHeight/{z}/{y}/{x}.png",
            "group": "damage"
        },
        "USG Damange Assessment": {
            "id": "nga",
            "url": "http://{switch}.tiles.mapbox.com/v3/americanredcross.NGA_DamageAssessment_Nov11/{z}/{y}/{x}.png",
            "group": "damage"
        },
        "Tacloban Building Damage Nov8": {
            "id": "copernicus",
            "url": "http://{switch}.tiles.mapbox.com/v3/americanredcross.Building_Damages_Tacloban/{z}/{y}/{x}.png",
            "group": "damage"
        },
        "Pre/Post Disaster Roads": {
            "id": "prepostroads",
            "url": "http://{switch}.tiles.mapbox.com/v3/americanredcross.Building_Damages_Tacloban/{z}/{y}/{x}.png",
            "group": "damage"
        },
        "Impassable Roads": {
            "id": "impassableRoads",
            "url": "http://{switch}.tiles.mapbox.com/v3/americanredcross.HAIYAN_Bridges/{z}/{y}/{x}.png",
            "group": "damage"
        },
        "cashtransfer": {
            "id": "cashtransfer",
            "url": "http://{switch}.tiles.mapbox.com/v3/americanredcross.HAIYAN_CashTransfer_Nov13/{z}/{y}/{x}.png",
            "group": "base"
        },
        "evacuatedbyarea": {
            "id": "evacuatedbyarea",
            "url": "http://{switch}.tiles.mapbox.com/v3/americanredcross.Haiyan_2013-11-11_EvacuatedPersonsByProvince/{z}/{y}/{x}.png"
        },
        "schools": {
            "id": "schools",
            "url": "http://{switch}.tiles.mapbox.com/v3/americanredcross.HAIYAN_Schools/{z}/{y}/{x}.png",
            "group": "base"
        },
        "population": {
            "id": "population",
            "url": "http://{switch}.tiles.mapbox.com/v3/americanredcross.HAIYAN_OCHA_Population_by_Barangay_2010/{z}/{y}/{x}.png",
            "group": "base"
        },
        "airports": {
            "id": "airports",
            "url": "http://{switch}.tiles.mapbox.com/v3/americanredcross.Philippines_airstrips/{z}/{y}/{x}.png",
            "group": "base"
        },
        "townhalls": {
            "id": "townhalls",
            "url": "http://{switch}.tiles.mapbox.com/v3/americanredcross.HAIYAN_Townhalls/{z}/{y}/{x}.png",
            "group": "base"
        },
        "erus": {
            "id": "erus",
            "url": "http://{switch}.tiles.mapbox.com/v3/americanredcross.HAIYAN_IFRC_Staff_Deployments/{z}/{y}/{x}.png",
            "group": "redcross"
        },
        "ifrcAreaOpps": {
            "id": "ifrcAreaOpps",
            "url": "http://{switch}.tiles.mapbox.com/v3/americanredcross.HAIYAN_IFRC_Staff_Deployments/{z}/{y}/{x}.png",
            "group": "redcross"
        },
        "icrcAreaOpps": {
            "id": "icrcAreaOpps",
            "url": "http://{switch}.tiles.mapbox.com/v3/americanredcross.HAIYAN_ICRC_ActiveAreas/{z}/{y}/{x}.png",
            "group": "redcross"
        },
        "atlas": {
            "id": "atlas",
            "url": "http://{switch}.tiles.mapbox.com/v3/americanredcross.HAIYAN_Atlas_Bounds/{z}/{y}/{x}.png",
            "group": "base"
        },
        "bantayanBLDs": {
            "id": "bantayanBLDs",
            "url": "http://{switch}.tiles.mapbox.com/v3/americanredcross.HAIYAN_Bantayan_AffectedBuildings_15Nov2013/{z}/{y}/{x}.png"
        }
    }
};



// var evacPersonsByProvince = L.mapbox.tileLayer('http://{switch}.tiles.mapbox.com/v3/americanredcross.Haiyan_2013-11-11_EvacuatedPersonsByProvince'/{z}/{y}/{x}.png);
// var evacPersonsByProvinceGridLayer = L.mapbox.tileLayer('http://{switch}.tiles.mapbox.com/v3/americanredcross.Haiyan_2013-11-11_EvacuatedPersonsByProvince'/{z}/{y}/{x}.png);
// var evacPersonsByProvinceGridControl = L.mapbox.gridControl(evacPersonsByProvinceGridLayer);

var map = L.map('map', {
        zoom: 8,
        center: [11.2500, 125.0000]
});

L.tileLayer(maplayers.baseLayers["HOT OSM"].url).addTo(map);

var legendControl = L.mapbox.legendControl().addTo(map);

var zoomLevel = map.getZoom().toString();
$('#zoomLevel').html(zoomLevel);

map.on('zoomend', function(){
        zoomLevel = map.getZoom().toString();
        $('#zoomLevel').html(zoomLevel);
});

var tileLayerMaker = function(layerObj) {
    for (key in layerObj) {
        //console.log(key);
        var layerUrl = layerObj[key].url;
        console.log(layerUrl);
        layerObj["tileLayer"] = L.tileLayer(layerUrl);
    }
};

tileLayerMaker(maplayers.baseLayers);
tileLayerMaker(maplayers.groupedOverlays);

L.control.groupedLayers(baseLayers, groupedOverlays).addTo(map);

// time code
function getTime() {
        var philTimeURL = 'http://api.geonames.org/timezoneJSON?lat=14.5833&lng=120.9667&username=amcross';
        var dcTimeURL = 'http://api.geonames.org/timezoneJSON?lat=38.8951&lng=-77.0367&username=amcross';
        var genevaTimeURL = 'http://api.geonames.org/timezoneJSON?lat=46.2000&lng=6.1500&username=amcross';
        var klTimeURL = 'http://api.geonames.org/timezoneJSON?lat=3.1357&lng=101.6880&username=amcross';

        $.getJSON(philTimeURL, function(json, textStatus) {
                // var philTime = json.time.substring((json.time.length-5),json.time.length);
                var philSunset = json.sunset.substring((json.sunset.length-5),json.sunset.length);
                var philSunrise = json.sunrise.substring((json.sunrise.length-5),json.sunrise.length);
                $('#philTime').append(json.time + '<br />Sunrise: ' + philSunrise + '<br />Sunset: ' + philSunset);
        });

        $.getJSON(dcTimeURL, function(json, textStatus) {
                // var dcTime = json.time.substring((json.time.length-5),json.time.length);
                $('#dcTime').append(json.time);
        });
        
        $.getJSON(genevaTimeURL, function(json, textStatus) {
                // var genevaTime = json.time.substring((json.time.length-5),json.time.length);
                $('#genevaTime').append(json.time);
        });

        $.getJSON(klTimeURL, function(json, textStatus) {
                // var klTime = json.time.substring((json.time.length-5),json.time.length);
                $('#klTime').append(json.time);
        });
}

setTimeout(getTime(),1000);


//map size code
$('#map').css('height', ($(window).height()));
$(window).on('resize', resize);
resize();
function resize(){
	$('#map').css('height', ($(window).height()));
}
