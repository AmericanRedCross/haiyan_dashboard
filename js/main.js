//map code

var osmURL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
osmAttribution = '&copy; OpenStreetMap contributors, <a href="redcross.org">Red Cross</a>',
osm = new L.TileLayer(osmURL, {maxZoom: 18, attribution: osmAttribution});

var hotosmURL = 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
hotAttribution = '&copy; OpenStreetMap contributors, <a href="http://hot.openstreetmap.org/">Humanitarina OpenStreetMap Team</a>, <a href="redcross.org">Red Cross</a>',
hotosm = new L.TileLayer(hotosmURL, {maxZoom: 18, attribution: hotAttribution});

var stamenLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
});

var taclobanSatURL = 'http://hiu-maps.net/hot/1.0.0/taclobancity-post-flipped/{z}/{x}/{y}.png',
taclobanSatAtt = '&copy; US Government (USG) under the NextView (NV) License',
taclobanSat = new L.TileLayer(taclobanSatURL, {maxZoom: 20, attribution: taclobanSatAtt});

var medellinURL = 'http://hiu-maps.net/hot/1.0.0/cebu-post-flipped/{z}/{x}/{y}.png',
medellinAtt = '&copy; US Government (USG) under the NextView (NV) License',
medellinSat = new L.TileLayer(medellinURL, {maxZoom: 20, attribution: medellinAtt});

var atriskUrl ='http://openmapsurfer.uni-hd.de/tiles/disaster/haiyan/elr/x={x}&y={y}&z={z}';
var atriskLayer = L.tileLayer(atriskUrl, {attribution: '(c) OpenStreetMap contriubutors (c) tiles: GIScience Heidelberg'});

var surgeMapLayer = L.mapbox.tileLayer('americanredcross.StormSurgeMaxHeight');
var surgeGridLayer = L.mapbox.gridLayer('americanredcross.StormSurgeMaxHeight');
var surgeGridControl = L.mapbox.gridControl(surgeGridLayer);

var ngaLayer = L.mapbox.tileLayer('americanredcross.NGA_DamageAssessment_Nov11');
var ngaGridLayer = L.mapbox.gridLayer('americanredcross.NGA_DamageAssessment_Nov11');
var ngaGridControl = L.mapbox.gridControl(ngaGridLayer);

var copernicusBldgsNov8Layer = L.mapbox.tileLayer('americanredcross.Building_Damages_Tacloban');
var copernicusGridLayer = L.mapbox.gridLayer('americanredcross.Building_Damages_Tacloban');
var copernicusGridControl = L.mapbox.gridControl(copernicusGridLayer);

var impassableRoadsLayer = L.mapbox.tileLayer('americanredcross.HAIYAN_Bridges');
var impassableGridLayer = L.mapbox.gridLayer('americanredcross.HAIYAN_Bridges');
var impassableGridControl = L.mapbox.gridControl(impassableGridLayer);

var prepostRoads = L.mapbox.tileLayer('americanredcross.w7xbhuxr');
var prepostRoadsGridLayer = L.mapbox.gridLayer('americanredcross.w7xbhuxr');
var prepostRoadsGridControl = L.mapbox.gridControl(prepostRoadsGridLayer);

var evacuatedByArea = L.mapbox.tileLayer('americanredcross.Haiyan_2013-11-11_EvacuatedPersonsByProvince');
var evacuatedGridLayer = L.mapbox.gridLayer('americanredcross.Haiyan_2013-11-11_EvacuatedPersonsByProvince');
var evacuatedGridControl = L.mapbox.gridControl(evacuatedGridLayer);

var cashTransfer = L.mapbox.tileLayer('americanredcross.HAIYAN_CashTransfer_Nov13');
var cashTransferGridLayer = L.mapbox.gridLayer('americanredcross.HAIYAN_CashTransfer_Nov13');
var cashTransferGridControl = L.mapbox.gridControl(cashTransferGridLayer);

var schools = L.mapbox.tileLayer('americanredcross.HAIYAN_Schools');
var schoolsGridLayer = L.mapbox.gridLayer('americanredcross.HAIYAN_Schools');
var schoolsGridControl = L.mapbox.gridControl(schoolsGridLayer);

var populationByArea = L.mapbox.tileLayer('americanredcross.HAIYAN_OCHA_Population_by_Barangay_2010');
var populationGridLayer = L.mapbox.gridLayer('americanredcross.HAIYAN_OCHA_Population_by_Barangay_2010');
var populationGridControl = L.mapbox.gridControl(populationGridLayer);

var airports = L.mapbox.tileLayer('americanredcross.Philippines_airstrips');
var airportsGridLayer = L.mapbox.gridLayer('americanredcross.Philippines_airstrips');
var airportsGridControl = L.mapbox.gridControl(airportsGridLayer);

var townHalls = L.mapbox.tileLayer('americanredcross.HAIYAN_Townhalls');
var townHallsGridLayer = L.mapbox.gridLayer('americanredcross.HAIYAN_Townhalls');
var townHallsGridControl = L.mapbox.gridControl(townHallsGridLayer);

var erus = L.mapbox.tileLayer('americanredcross.HAIYAN_IFRC_Staff_Deployments');
var erusGridLayer = L.mapbox.gridLayer('americanredcross.HAIYAN_IFRC_Staff_Deployments');
var erusGridControl = L.mapbox.gridControl(erusGridLayer);

var ifrcAreaOpps = L.mapbox.tileLayer('americanredcross.HAIYAN_Evacuation_Centers');
var ifrcAreaGridLayer = L.mapbox.gridLayer('americanredcross.HAIYAN_Evacuation_Centers');
var ifrcAreaGridControl = L.mapbox.gridControl(ifrcAreaGridLayer);

var icrcAreaOpps = L.mapbox.tileLayer('americanredcross.HAIYAN_ICRC_ActiveAreas');
var icrcAreaGridLayer = L.mapbox.gridLayer('americanredcross.HAIYAN_ICRC_ActiveAreas');
var icrcAreaGridControl = L.mapbox.gridControl(icrcAreaGridLayer);

var atlas = L.mapbox.tileLayer('americanredcross.HAIYAN_Atlas_Bounds');
var atlasGridLayer = L.mapbox.gridLayer('americanredcross.HAIYAN_Atlas_Bounds');
var atlasGridControl = L.mapbox.gridControl(atlasGridLayer);

var bantayanBLDs = L.mapbox.tileLayer('americanredcross.HAIYAN_Bantayan_AffectedBuildings_15Nov2013');
var bantayanBLDsGridLayer = L.mapbox.gridLayer('americanredcross.HAIYAN_Bantayan_AffectedBuildings_15Nov2013');
var bantayanBLDsGridControl = L.mapbox.gridControl(bantayanBLDsGridLayer);


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
        if (eventLayer.name == "Pre/Post Roads"){
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
        if (eventLayer.name == "Pre/Post Roads"){
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
                "Pre/Post Roads": prepostRoads,
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

//time code
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
