// map code

// json object of map layers
// there are 2 objects in the json, one for "swtichable" base maps, and one for overlays
// map layers in the overlay object have a group property indicating in which group
// they should be listed

var baseLayers,
    groupedOverlays;

baseLayers = {
    "HOT OSM": {
        "url": "http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
        "attribution": "&copy; OpenStreetMap contributors, <a href='http://hot.openstreetmap.org/'>Humanitarina OpenStreetMap Team</a>, <a href='redcross.org'>Red Cross</a>"
    },
    "OpenStreetMap": {
        "url": "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        "attribution": "&copy; OpenStreetMap contributors, <a href='redcross.org'>Red Cross</a>"
    },
    "Toner": {
        "url": "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
        "attribution": "Map tiles by <a href='http://stamen.com'>Stamen Design</a>, under <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a>. Data by <a href='http://openstreetmap.org'>OpenStreetMap</a>, under <a href='http://creativecommons.org/licenses/by-sa/3.0'>CC BY SA</a>."
    },
    "Post Imagery - Tacloban": {
        "url": "http://hiu-maps.net/hot/1.0.0/taclobancity-post-flipped/{z}/{x}/{y}.png",
        "attribution": "&copy; US Government (USG) under the NextView (NV) License"
    },
    "Pre Imagery - Medellin": {
        "url": "http://hiu-maps.net/hot/1.0.0/taclobancity-post-flipped/{z}/{x}/{y}.png",
        "attribution": "&copy; US Government (USG) under the NextView (NV) License"
    }
};

groupedOverlays = {
    "Points of Interest": {
        "Elements at Risk": {
            "url": "http://openmapsurfer.uni-hd.de/tiles/disaster/haiyan/elr/x={x}&y={y}&z={z}",
            "attribution": "(c) OpenStreetMap contriubutors (c) tiles: GIScience Heidelberg"
        },
        "Cash Transfers": {
            "url": "americanredcross.HAIYAN_CashTransfer_Nov13"
        },
        "Evacuated by Area": {
            "url": "americanredcross.Haiyan_2013-11-11_EvacuatedPersonsByProvince"
        },
        "Schools": {
            "url": "americanredcross.HAIYAN_Schools"
        },
        "Populated Areas": {
            "url": "americanredcross.HAIYAN_OCHA_Population_by_Barangay_2010"
        },
        "Airports": {
            "url": "americanredcross.Philippines_airstrips"
        },
        "Townhalls": {
            "url": "americanredcross.HAIYAN_Townhalls"
        }
    },
    "Damage": {
        "Storm Surge Max Height": {
            "url": "americanredcross.StormSurgeMaxHeight"
        },
        "USG Damange Assessment": {
            "url": "americanredcross.NGA_DamageAssessment_Nov11"
        },
        "Tacloban Building Damage Nov. 8": {
            "url": "americanredcross.Building_Damages_Tacloban"
        },
        "Pre/Post Disaster Roads": {
            "url": "americanredcross.Building_Damages_Tacloban"
        },
        "Impassable Roads": {
            "url": "americanredcross.HAIYAN_Bridges"
        }
    },
    "Red Cross": {
        "erus": {
            "url": "americanredcross.HAIYAN_IFRC_Staff_Deployments"
        },
        "ifrcAreaOpps": {
            "url": "americanredcross.HAIYAN_IFRC_Staff_Deployments"
        },
        "icrcAreaOpps": {
            "url": "americanredcross.HAIYAN_ICRC_ActiveAreas"
        },
        "atlas": {
            "url": "americanredcross.HAIYAN_Atlas_Bounds"
        },
        "bantayanBLDs": {
            "url": "americanredcross.HAIYAN_Bantayan_AffectedBuildings_15Nov2013"
        }
    }
};

var hotosm = L.tileLayer(baseLayers["HOT OSM"].url);

var map = L.map('map', {
    zoom: 8,
    center: [11.2500, 125.0000],
    layers: [hotosm,]
});

var zoomLevel = map.getZoom().toString();
$('#zoomLevel').html(zoomLevel);

map.on('zoomend', function(){
    zoomLevel = map.getZoom().toString();
    $('#zoomLevel').html(zoomLevel);
});

// var evacPersonsByProvince = L.mapbox.tileLayer('americanredcross.Haiyan_2013-11-11_EvacuatedPersonsByProvince'/{z}/{x}/{y}.png);
// var evacPersonsByProvinceGridLayer = L.mapbox.tileLayer('americanredcross.Haiyan_2013-11-11_EvacuatedPersonsByProvince'/{z}/{x}/{y}.png);
// var evacPersonsByProvinceGridControl = L.mapbox.gridControl(evacPersonsByProvinceGridLayer);

/* 
baseMaker takes an object containing a tileLayer url and attribution
it returns a condensed object of a tileLayer containing the attribution and a maxZoom
*/
var baseMaker = function(layerObj) {
    for (var _key in layerObj) {
        //console.log(key);
        var layerUrl = layerObj[_key]["url"];
        layerObj[_key] = L.tileLayer(layerUrl, {
            maxZoom: 18,
            attribution: layerObj[_key].attribution
        });
    }
    return layerObj;
};

/* 
overlayMaker takes an object containting objects of tileLayers
*/
var overlayMaker = function (layerObj) {
    for (var _group in layerObj) {
        var _layers = layerObj[_group];
        for (var _layer in _layers) {
            var layerUrl = _layers[_layer]["url"];
            _layers[_layer] = L.mapbox.tileLayer(layerUrl);
            L.mapbox.gridControl(_layers[_layer]);
        }
        layerObj[_group] = _layers;
    }
    return layerObj;
};

baseLayers = baseMaker(baseLayers);
groupedOverlays = overlayMaker(groupedOverlays);

L.control.groupedLayers(baseLayers, groupedOverlays).addTo(map);

// var legendControl = L.mapbox.legendControl().addTo(map);

// map.on('overlayadd', function(eventLayer) {
//     map.addControl(eventLayer);
//     if (eventLayer.layer.getTileJSON().legend) {
//         legendControl.addLegend(eventLayer.layer.getTileJSON().legend);
//     }
// });

// map.on('overlayremove', function(eventLayer) {
//     map.removeControl(eventLayer);
//     if (eventLayer.layer.getTileJSON().legend) {
//         legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);
//     }
// };

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
