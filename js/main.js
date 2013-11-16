// map code

var maplayers = {
    "baselayers": [
        {
            "id": "osm",
            "name": "OpenStreetMap",
            "url": "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            "attribution": "&copy; OpenStreetMap contributors, <a href='redcross.org'>Red Cross</a>"
        },
        {
            "id": "hotosm",
            "name": "HOT OSM",
            "url": "http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
            "attribution": "&copy; OpenStreetMap contributors, <a href='http://hot.openstreetmap.org/'>Humanitarina OpenStreetMap Team</a>, <a href='redcross.org'>Red Cross</a>"
        },
        {
            "id": "stamen",
            "name": "Toner",
            "url": "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
            "attribution": "Map tiles by <a href='http://stamen.com'>Stamen Design</a>, under <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a>. Data by <a href='http://openstreetmap.org'>OpenStreetMap</a>, under <a href='http://creativecommons.org/licenses/by-sa/3.0'>CC BY SA</a>."
        },
        {
            "id": "taclobanSat",
            "name": "Post Imagery - Tacloban",
            "url": "http://hiu-maps.net/hot/1.0.0/taclobancity-post-flipped/{z}/{x}/{y}.png",
            "attribution": "&copy; US Government (USG) under the NextView (NV) License"
        },
        {
            "id": "medellin",
            "name": "Pre Imagery - Medellin",
            "url": "http://hiu-maps.net/hot/1.0.0/taclobancity-post-flipped/{z}/{x}/{y}.png",
            "attribution": "&copy; US Government (USG) under the NextView (NV) License"
        }
    ],
    "overlays": [
        {
            "id": "astrisk",
            "name": "Elements at Risk",
            "url": "http://openmapsurfer.uni-hd.de/tiles/disaster/haiyan/elr/x={x}&y={y}&z={z}",
            "attribution": "(c) OpenStreetMap contriubutors (c) tiles: GIScience Heidelberg",
            "group": "base"
        },
        {
            "id": "surge",
            "name": "Storm Surge Max Height",
            "url": "americanredcross.StormSurgeMaxHeight",
            "group": "damage"
        },
        {
            "id": "nga",
            "name": "USG Damange Assessment",
            "url": "americanredcross.NGA_DamageAssessment_Nov11",
            "group": "damage"
        },
        {
            "id": "copernicus",
            "name": "Tacloban Building Damage Nov8",
            "url": "americanredcross.Building_Damages_Tacloban",
            "group": "damage"
        },
        {
            "id": "prepostroads",
            "name": "Pre/Post Disaster Roads",
            "url": "americanredcross.Building_Damages_Tacloban",
            "group": "damage"
        },
        {
            "id": "impassableRoads",
            "name": "Impassable Roads",
            "url": "americanredcross.HAIYAN_Bridges",
            "group": "damage"
        },
        {
            "id": "cashtransfer",
            "name": "cashtransfer",
            "url": "americanredcross.HAIYAN_CashTransfer_Nov13",
            "group": "base"
        },
        {
            "id": "evacuatedbyarea",
            "name": "evacuatedbyarea",
            "url": "americanredcross.Haiyan_2013-11-11_EvacuatedPersonsByProvince"
        },
        {
            "id": "schools",
            "name": "schools",
            "url": "americanredcross.HAIYAN_Schools",
            "group": "base"
        },
        {
            "id": "population",
            "name": "population",
            "url": "americanredcross.HAIYAN_OCHA_Population_by_Barangay_2010",
            "group": "base"
        },
        {
            "id": "airports",
            "name": "airports",
            "url": "americanredcross.Philippines_airstrips"
            "group": "base"
        },
        {
            "id": "townhalls",
            "name": "townhalls",
            "url": "americanredcross.HAIYAN_Townhalls",
            "group": "base"
        },
        {
            "id": "erus",
            "name": "erus",
            "url": "americanredcross.HAIYAN_IFRC_Staff_Deployments",
            "group": "redcross"
        },
        {
            "id": "ifrcAreaOpps",
            "name": "ifrcAreaOpps",
            "url": "americanredcross.HAIYAN_IFRC_Staff_Deployments",
            "group": "redcross"
        },
        {
            "id": "icrcAreaOpps",
            "name": "icrcAreaOpps",
            "url": "americanredcross.HAIYAN_ICRC_ActiveAreas",
            "group": "redcross"
        },
        {
            "id": "atlas",
            "name": "atlas",
            "url": "americanredcross.HAIYAN_Atlas_Bounds",
            "group": "base"
        },
        {
            "id": "bantayanBLDs",
            "name": "bantayanBLDs",
            "url": "americanredcross.HAIYAN_Bantayan_AffectedBuildings_15Nov2013"
        }
    ]
};



// var evacPersonsByProvince = L.mapbox.tileLayer('americanredcross.Haiyan_2013-11-11_EvacuatedPersonsByProvince');
// var evacPersonsByProvinceGridLayer = L.mapbox.tileLayer('americanredcross.Haiyan_2013-11-11_EvacuatedPersonsByProvince');
// var evacPersonsByProvinceGridControl = L.mapbox.gridControl(evacPersonsByProvinceGridLayer);

var map = L.map('map', {
        zoom: 8,
        center: [11.2500, 125.0000],
        layers: [hotosm]
});

var legendControl = L.mapbox.legendControl().addTo(map);

var zoomLevel = map.getZoom().toString();
$("#zoomLevel").html(zoomLevel);

map.on('zoomend', function(){
        zoomLevel = map.getZoom().toString();
        $("#zoomLevel").html(zoomLevel);
})

L.control.groupedLayers(baseMaps, groupedOverlays).addTo(map);

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
$('#map').css("height", ($(window).height()));
$(window).on("resize", resize);
resize();
function resize(){
	$('#map').css("height", ($(window).height()));    
}
