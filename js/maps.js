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
    "Mapbox Terrain": {
        url: "https://a.tiles.mapbox.com/v3/americanredcross.hcji22de/{z}/{x}/{y}.png",
        attribution: "Map tiles by <a href='www.mapbox.com'>Mapbox</a>"
    },
    "Humanitarian OSM": {
        url: "http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
        attribution: "&copy; OpenStreetMap contributors, <a href='http://hot.openstreetmap.org/'>Humanitarian OpenStreetMap Team</a>, <a href='redcross.org'>Red Cross</a>"
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
    "Neighborhood Areas (zoom out to see)": {
        "Lima": {
            url: "americanredcross.Lima_Neighborhoods_OFDA_APS_Example",
            attribution: "&copy; OpenStreetMap contributors, <a href='redcross.org'>Red Cross</a>"
        }
    },
    "Neighorhood Profile": {
        "Neighborhood Affiliation": {
            url: "americanredcross.Lima_Example_Social_Nhood"
        },
        "Tenancy Status": {
            url: "americanredcross.Lima_Example_Tenancy"
        },
        "Overall Vulnerability (Indexed)": {
            url: "americanredcross.Lima_Example_Vulnerability"
        },
        "Accessible of Water": {
            url: "americanredcross.Lima_Example_Water"
        }
    }
};