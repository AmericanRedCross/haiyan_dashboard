// map code

var maplayers = [
    {
        "id": "osm",
        "name": "OpenStreetMap",
        "url": 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        "attribution": "&copy; OpenStreetMap contributors, <a href="redcross.org">Red Cross</a>"
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
    },
    {
        "id": "astrisk",
        "name": "Elements at Risk",
        "url": "http://openmapsurfer.uni-hd.de/tiles/disaster/haiyan/elr/x={x}&y={y}&z={z}",
        "attribution": "(c) OpenStreetMap contriubutors (c) tiles: GIScience Heidelberg"
    },
    {
        "id": "surge",
        "name": "Storm Surge Max Height",
        "url": "americanredcross.StormSurgeMaxHeight",
    },
    {
        "id": "surge",
        "name": "Storm Surge Max Height",
        "url": "americanredcross.StormSurgeMaxHeight",
    },
    {
        "id": "nga",
        "name": "NGA",
        "url": "americanredcross.NGA_DamageAssessment_Nov11",
    },
    {
        "id": "copernicus",
        "name": "copernicus",
        "url": "americanredcross.Building_Damages_Tacloban",
    },
    {
        "id": "prepostroads",
        "name": "prepostroads",
        "url": "americanredcross.Building_Damages_Tacloban",
    },
    {
        "id": "impassableRoads",
        "name": "impassableRoads",
        "url": "americanredcross.HAIYAN_Bridges",
    },
    {
        "id": "cashTransfer",
        "name": "cashTransfer",
        "url": "americanredcross.HAIYAN_CashTransfer_Nov13",
    },
    {
        "id": "evacuatedByArea",
        "name": "evacuatedByArea",
        "url": "americanredcross.Haiyan_2013-11-11_EvacuatedPersonsByProvince",
    },
    {
        "id": "schools",
        "name": "schools",
        "url": "americanredcross.HAIYAN_Schools",
    },
    {
        "id": "population",
        "name": "population",
        "url": "americanredcross.HAIYAN_OCHA_Population_by_Barangay_2010",
    },
    {
        "id": "airports",
        "name": "airports",
        "url": "americanredcross.Philippines_airstrips",
    },
    {
        "id": "townhalls",
        "name": "townhalls",
        "url": "americanredcross.HAIYAN_Townhalls",
    },
    {
        "id": "erus",
        "name": "erus",
        "url": "americanredcross.HAIYAN_IFRC_Staff_Deployments",
    },
    {
        "id": "ifrcAreaOpps",
        "name": "ifrcAreaOpps",
        "url": "americanredcross.HAIYAN_IFRC_Staff_Deployments",
    },
    {
        "id": "icrcAreaOpps",
        "name": "icrcAreaOpps",
        "url": "americanredcross.HAIYAN_ICRC_ActiveAreas",
    },
    {
        "id": "atlas",
        "name": "atlas",
        "url": "americanredcross.HAIYAN_Atlas_Bounds",
    },
    {
        "id": "bantayanBLDs",
        "name": "bantayanBLDs",
        "url": "americanredcross.HAIYAN_Bantayan_AffectedBuildings_15Nov2013",
    }
];

// var evacPersonsByProvince = L.mapbox.tileLayer('americanredcross.Haiyan_2013-11-11_EvacuatedPersonsByProvince');
// var evacPersonsByProvinceGridLayer = L.mapbox.tileLayer('americanredcross.Haiyan_2013-11-11_EvacuatedPersonsByProvince');
// var evacPersonsByProvinceGridControl = L.mapbox.gridControl(evacPersonsByProvinceGridLayer);

var map = L.map('map', {
        zoom: 8,
        center: [11.2500, 125.0000],
        layers: [hotosm]
});

var legendControl = L.mapbox.legendControl().addTo(map);

map.on('overlayadd', function(eventLayer){
        //grid controls
        if (eventLayer.name == "Storm Surge Max Height"){
                map.addLayer(surgeGridLayer);
                map.addControl(surgeGridControl);
                legendControl.addLegend(eventLayer.layer.getTileJSON().legend);
        }
        if (eventLayer.name == "USG Damange Assessment"){
                map.addLayer(ngaGridLayer);
                map.addControl(ngaGridControl);
                legendControl.addLegend(eventLayer.layer.getTileJSON().legend);
        }
        if (eventLayer.name == "Pre/Post Disaster Roads"){
                map.addLayer(prepostRoadsGridLayer);
                map.addControl(prepostRoadsGridControl);
                legendControl.addLegend(eventLayer.layer.getTileJSON().legend);
        } 
        if (eventLayer.name == "Evacuated By Area"){
                map.addLayer(evacuatedGridLayer);
                map.addControl(evacuatedGridControl);
                legendControl.addLegend(eventLayer.layer.getTileJSON().legend);
        } 

        if (eventLayer.name == "Cash Transfer"){
                map.addLayer(cashTransferGridLayer);
                map.addControl(cashTransferGridControl);
                legendControl.addLegend(eventLayer.layer.getTileJSON().legend);
        }

        if (eventLayer.name == "Schools DFED 2009"){
                map.addLayer(schoolsGridLayer);
                map.addControl(schoolsGridControl);
                legendControl.addLegend(eventLayer.layer.getTileJSON().legend);
        }

        if (eventLayer.name == "Population by Baranguy"){
                map.addLayer(populationGridLayer);
                map.addControl(populationGridControl);
                legendControl.addLegend(eventLayer.layer.getTileJSON().legend);
        }

        if (eventLayer.name == "ICRC Area of Opps"){
                map.addLayer(icrcAreaGridLayer);
                map.addControl(icrcAreaGridControl);
                legendControl.addLegend(eventLayer.layer.getTileJSON().legend);
        }
        if (eventLayer.name == "IFRC Area of Opps"){
                map.addLayer(ifrcAreaGridLayer);
                map.addControl(ifrcAreaGridControl);
                legendControl.addLegend(eventLayer.layer.getTileJSON().legend);
        }

        if (eventLayer.name == "Airports"){
                map.addLayer(airportsGridLayer);
                map.addControl(airportsGridControl);
                legendControl.addLegend(eventLayer.layer.getTileJSON().legend);
        }

        if (eventLayer.name == "TownHalls"){
                map.addLayer(townHallsGridLayer);
                map.addControl(townHallsGridControl);
                legendControl.addLegend(eventLayer.layer.getTileJSON().legend);
        }

        if (eventLayer.name == "IFRC ERUs"){
                map.addLayer(erusGridLayer);
                map.addControl(erusGridControl);
                legendControl.addLegend(eventLayer.layer.getTileJSON().legend);
        }

        if (eventLayer.name == "Bantayan Buildings"){
                map.addLayer(bantayanBLDsGridLayer);
                map.addControl(bantayanBLDsGridControl);

       }
        if (eventLayer.name == "Population by Baranguy"){
                legendControl.addLegend(eventLayer.layer.getTileJSON().legend);
        }

        if (eventLayer.name == "Tacloban Building Damage Nov8"){
                map.addLayer(copernicusGridLayer);
                map.addControl(copernicusGridControl);
                legendControl.addLegend(eventLayer.layer.getTileJSON().legend);
                
        }     
        if (eventLayer.name == "Impassable Roads"){
                legendControl.addLegend(eventLayer.layer.getTileJSON().legend);
        }                

});

map.on('overlayremove', function(eventLayer){
        //grid controls
        if (eventLayer.name == "Storm Surge Max Height"){
                map.removeLayer(surgeGridLayer);
                map.removeControl(surgeGridControl);
                legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);
        }
        if (eventLayer.name == "USG Damange Assessment"){
                map.removeLayer(ngaGridLayer);
                map.removeControl(ngaGridControl);
                legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);
        }
        if (eventLayer.name == "Pre/Post Disaster Roads"){
                map.removeLayer(prepostRoadsGridLayer);
                map.removeControl(prepostRoadsGridControl);
                legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);
        }

        if (eventLayer.name == "Evacuated By Area"){
                map.removeLayer(evacuatedGridLayer);
                map.removeControl(evacuatedGridControl);
                legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);
        } 

        if (eventLayer.name == "Cash Transfer"){
                map.removeLayer(cashTransferGridLayer);
                map.removeControl(cashTransferGridControl);
                legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);
        } 

        if (eventLayer.name == "Schools DFED 2009"){
                map.removeLayer(schoolsGridLayer);
                map.removeControl(schoolsGridControl);
                legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);
        }

        if (eventLayer.name == "Population by Baranguy"){
                map.removeLayer(populationGridLayer);
                map.removeControl(populationGridControl);
                legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);
        }

        if (eventLayer.name == "ICRC Area of Opps"){
                map.removeLayer(icrcAreaGridLayer);
                map.removeControl(icrcAreaGridControl);
                legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);
        }

        if (eventLayer.name == "IFRC Area of Opps"){
                map.removeLayer(ifrcAreaGridLayer);
                map.removeControl(ifrcAreaGridControl);
                legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);
        }

        if (eventLayer.name == "Airports"){
                map.removeLayer(airportsGridLayer);
                map.removeControl(airportsGridControl);
                legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);
        }

        if (eventLayer.name == "TownHalls"){
                map.removeLayer(townHallsGridLayer);
                map.removeControl(townHallsGridControl);
                legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);
        }

        if (eventLayer.name == "IFRC ERUs"){
                map.removeLayer(erusGridLayer);
                map.removeControl(erusGridControl);
                legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);
        }

        if (eventLayer.name == "Bantayan Buildings"){
                map.removeLayer(bantayanBLDsGridLayer);
                map.removeControl(bantayanBLDsGridControl);
                legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);
        }

        //legends controls
        if (eventLayer.name == "Tacloban Building Damage Nov8"){
                map.removeLayer(copernicusGridLayer);
                map.removeControl(copernicusGridControl);
                legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);                       
        }
        if (eventLayer.name == "Impassable Roads"){
                legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);                       
        }
        if (eventLayer.name == "Population by Baranguy"){
                legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);
        }
        if (eventLayer.name == "Cash Transfer"){
                legendControl.removeLegend(eventLayer.layer.getTileJSON().legend);
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
        "Toner": stamenLayer,
        "Post Imagery - Tacloban": taclobanSat,
        "Pre Imagery - Medellin": medellinSat     
};

var groupedOverlays = {
        "Base Layers": {
                "Population by Baranguy": populationByArea,
                "Elements At Risk": atriskLayer,
                "Schools DFED 2009": schools,
                "Airports": airports,
                "TownHalls": townHalls,
                "Cash Transfer": cashTransfer
        },
        "Damage Layers": {
                "Storm Surge Max Height": surgeMapLayer,
                "Tacloban Building Damage Nov8": copernicusBldgsNov8Layer,
                "USG Damange Assessment": ngaLayer,
                "Impassable Roads": impassableRoadsLayer,
                "Pre/Post Disaster Roads": prepostRoads,
                "Bantayan Buildings": bantayanBLDs
        },
        "Red Cross Layers": {
                "IFRC ERUs": erus,
                "IFRC Area of Opps": ifrcAreaOpps,
                "ICRC Area of Opps": icrcAreaOpps
        },
        "Philippines RC Layers": {
                "Evacuated By Area": evacuatedByArea
        }
};

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
