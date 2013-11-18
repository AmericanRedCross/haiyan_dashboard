/*

JSON for your base layers, including attribution.
The object key will be the displayed layer name.
example:

"Layer Name": {
    url: "http://some.place.com/{z}/{x}/{y}.png" OR "some_mapbox_map.ID",
    attribution: "&copy; Foo Bar"
};

Remove layers by commenting them out.
Additional overlay layer groups need to be nested within an object whose
key is the group overlay display name.

example:

"Group Name": {
    "Layer Name": {
        url: "http://some.place.com/{z}/{x}/{y}.png" OR "some_mapbox_map.ID",
        attribution: "&copy; Foo Bar"
    }
}

*/


var base_layers = {
    "HOT OSM": {
        url: "http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
        attribution: "&copy; OpenStreetMap contributors, <a href='http://hot.openstreetmap.org/'>Humanitarina OpenStreetMap Team</a>, <a href='redcross.org'>Red Cross</a>"
    },
    "OpenStreetMap": {
        url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution: "&copy; OpenStreetMap contributors, <a href='redcross.org'>Red Cross</a>"
    },
    "Toner": {
        url: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
        attribution: "Map tiles by <a href='http://stamen.com'>Stamen Design</a>, under <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a>. Data by <a href='http://openstreetmap.org'>OpenStreetMap</a>, under <a href='http://creativecommons.org/licenses/by-sa/3.0'>CC BY SA</a>."
    }
};

var grouped_overlays = {
    "Imagery": {
        "Digital Globe": {
            url: "http://hiu-maps.net/hot/1.0.0/haiyan-dg-post-flipped/{z}/{x}/{y}.png",
            attribution: "&copy; Digital Globe & US Government (USG) under the NextView (NV) License"
        },
        "Post Imagery - Tacloban": {
            url: "http://hiu-maps.net/hot/1.0.0/taclobancity-post-flipped/{z}/{x}/{y}.png",
            attribution: "&copy; US Government (USG) under the NextView (NV) License"
        },
        "Pre Imagery - Medellin": {
            url: "http://hiu-maps.net/hot/1.0.0/cebu-post-flipped/{z}/{x}/{y}.png",
            attribution: "&copy; US Government (USG) under the NextView (NV) License"
        }
    },
    "Base Layers": {
        "Population by Baranguy": {
            url: "americanredcross.HAIYAN_OCHA_Population_by_Barangay_2010"
        },
        "Elements at Risk": {
            url: "http://openmapsurfer.uni-hd.de/tiles/disaster/haiyan/elr/x={x}&y={y}&z={z}",
            attribution: "(c) OpenStreetMap contriubutors (c) tiles: GIScience Heidelberg",
        },
        "Schools DFED 2009": {
            url: "americanredcross.HAIYAN_Schools"
        },
        "Airports": {
            url: "americanredcross.Philippines_airstrips"
        },
        "Townhalls": {
            url: "americanredcross.HAIYAN_Townhalls"
        },
        "Cash Transfers": {
            url: "americanredcross.HAIYAN_CashTransfer_Nov13"
        },
        "Evacuated by Area": {
            url: "americanredcross.Haiyan_2013-11-11_EvacuatedPersonsByProvince"
        },
        "Poverty by Municipality": {
            url: "americanredcross.HAIYAN_Poverty_by_Municipality"
        }
        // "Atlas": {
        //     "url": "americanredcross.HAIYAN_Atlas_Bounds"
        // },
    },
    "Damage Layers": {
        "Storm Surge Max Height": {
            url: "americanredcross.StormSurgeMaxHeight"
        },
        "USG Damange Assessment": {
            url: "americanredcross.NGA_DamageAssessment_Nov11"
        },
        "Tacloban Building Damage Nov. 8": {
            url: "americanredcross.Building_Damages_Tacloban"
        },
        "Pre/Post Disaster Roads": {
            url: "americanredcross.Building_Damages_Tacloban"
        },
        "Impassable Roads": {
            url: "americanredcross.HAIYAN_Bridges"
        },
        "bantayanBLDs": {
            url: "americanredcross.HAIYAN_Bantayan_AffectedBuildings_15Nov2013"
        }
    },
    "Red Cross Layers": {
        "IFRC ERUs": {
            url: "americanredcross.HAIYAN_IFRC_Staff_Deployments"
        },
        "IFRC Area of Opps": {
            url: "americanredcross.HAIYAN_IFRC_Staff_Deployments"
        }
    },
    "Philippines RC Layers": {
        "Evacuated by Area": {
            url: "americanredcross.Haiyan_2013-11-11_EvacuatedPersonsByProvince"
        }
    }
};

// var evacPersonsByProvince = L.mapbox.tileLayer('americanredcross.Haiyan_2013-11-11_EvacuatedPersonsByProvince');
// var evacPersonsByProvinceGridLayer = L.mapbox.tileLayer('americanredcross.Haiyan_2013-11-11_EvacuatedPersonsByProvince');
// var evacPersonsByProvinceGridControl = L.mapbox.gridControl(evacPersonsByProvinceGridLayer);

var mapTypeTest = function(url) {
    var regex = /http(s|):/;
    var value = regex.test(url);
    return value
}

// Generates a new layer object readable by Leaflet's grouped control.
// Take an exisiting layer object and condense the attribution and url information into
// either a Leaflet or MapBox tileLayer
// Returns the new layerObj
var layerObjMaker = function(layerObj) {
    
    var newObj = {}
    var layers = [];
    for (var layer in layerObj) {
        var layerUrl = layerObj[layer].url;
        value = mapTypeTest(layerUrl)
        if (value == true) {
            newObj[layer] = L.tileLayer(layerUrl, {
                attribution: layerObj[layer].attribution
            });
        } else {
            newObj[layer] = L.mapbox.tileLayer(layerUrl);
            layerObj.grid_layer = L.mapbox.gridLayer(layerUrl);
            layerObj.grid_control = L.mapbox.gridControl(layerObj.grid_layer);
        }
    };
    return newObj;
}

/* 
baseMaker takes an object containing a tileLayer url and attribution
it returns a condensed object of a tileLayer containing the attribution and a maxZoom
*/
var baseMaker = function(layerObj) {
    var base_layers = layerObjMaker(layerObj);
    return base_layers;
};

/* 
overlayMaker takes an object containting objects of tileLayers
*/
var overlayMaker = function (groupObj) {
    newGroupObj = {}
    for (var group in groupObj) {
        var layerObj = groupObj[group];
        var group_layers = layerObjMaker(layerObj);
        newGroupObj[group] = group_layers;
    }
    return newGroupObj;
};

var baseLayers = baseMaker(base_layers);
var groupedOverlays = overlayMaker(grouped_overlays);

var map = L.map('map', {
    zoom: 8,
    center: [11.2500, 125.0000],
    layers: [baseLayers["HOT OSM"]]
});

var legendControl = L.mapbox.legendControl().addTo(map);

/* 
Add and remove grid overlays

Since we don't know how many more layers will be added in the future,
we're saving them in an array rather than saving them to variables.
*/
var grid_layers = [];
var grid_controls = [];

// Simple tile layers are taken care of by Leaflet's legend control.
// More complex layers with grids and legends require special handling.
// Take the layer that was just removed, checks the current active grid
// layers and controls, and removes that data from view.
map.on("overlayremove", function(eventLayer){
    var group = eventLayer.group.name;
    var name = eventLayer.name;
    var url = grouped_overlays[group][name].url;
    var value = mapTypeTest(url);
    if (!value) {
        legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);
        var id = eventLayer.layer._tilejson.id
        for (el in grid_layers) {
            if (id === grid_layers[el]._tilejson.id) {
                map.removeLayer(grid_layers[el]);
            }
        }
        for (el in grid_controls) {
            if (id === grid_controls[el]._layer._tilejson.id) {
                map.removeControl(grid_controls[el]);
            }
        }
    }
});

// Once we add a grid layer and grid controls, they're pushed to an array to be accessed for removal.
// Take an event layer, get the id of the tile layer, and call L.mapbox.gridControl() and L.mapbox.gridLayer()
map.on("overlayadd", function(eventLayer) {
    var group = eventLayer.group.name;
    var name = eventLayer.name;
    var url = grouped_overlays[group][name].url;
    var value = mapTypeTest(url);
    if (!value) {
        var grid_layer = L.mapbox.gridLayer(url);
        grid_layers.push(grid_layer);
        var grid_control = L.mapbox.gridControl(grid_layer);
        grid_controls.push(grid_control);
        map.addLayer(grid_layer);
        map.addControl(grid_control, {follow: true});
        legendControl.addLegend(eventLayer.layer.getTileJSON().legend);
        legendControl.setPosition('bottomleft');
    }
});

// Create the grouped layer control from the plugin
// See https://github.com/ismyrnow/Leaflet.groupedlayercontrol
L.control.groupedLayers(baseLayers, groupedOverlays).addTo(map);

var zoomLevel = map.getZoom().toString();
$('#zoomLevel').html(zoomLevel);

map.on('zoomend', function(){
    zoomLevel = map.getZoom().toString();
    $('#zoomLevel').html(zoomLevel);
});

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
