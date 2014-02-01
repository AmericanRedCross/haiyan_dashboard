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
        },
        "Post Imagery - Carles": {
            url: "http://hiu-maps.net/hot/1.0.0/carles-post-flipped/{z}/{x}/{y}.png",
            attribution: "&copy; US Government (USG) under the NextView (NV) License"
        }
    },
    "Base Layers": {
        "Administrative Boundaries (Province, Municipality)": {
            url: "americanredcross.PHL_admin"
        },
        "Population by Barangay": {
            url: "americanredcross.PHL_population"
        },
        // "Elements at Risk": {
        //     url: "http://openmapsurfer.uni-hd.de/tiles/disaster/haiyan/elr/x={x}&y={y}&z={z}",
        //     attribution: "&copy; OpenStreetMap contriubutors &copy; tiles: GIScience Heidelberg",
        // },
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
            url: "americanredcross.HAIYAN_CashTransfer_Nov13",
            attribution: "OpenStreetMap"
        },
        "Poverty by Municipality": {
            url: "americanredcross.HAIYAN_Poverty_by_Municipality"
        },
        "Atlas": {
            "url": "americanredcross.HAIYAN_Atlas_Bounds",
            "attribution":"GADM"
        },
        "Mangroves": {
            "url": "americanredcross.ivqme7b9",
            "attribution": "<a href='http://usgs.gov'>USGS</a>"
        },
        "Radio Stations": {
            "url": "americanredcross.Haiyan_Radio_Stations",
            "attribution": "<a href='http://infoasaid'>Infoasaid</a>"
        }
    },
    "Damage Layers": {
        "Leyte (eastern) HH Totally Damaged by Barangay": {
            url: "americanredcross.Leyte_HH_TotalDamage",
            attribution: "<a href='http://www.redcross.org.ph/'>PRC</a>"
        },
        "Storm Surge Max Height": {
            url: "americanredcross.HAIYAN_Storm_Surge"
        },
        "USG Damage Assessment": {
            url: "americanredcross.NGA_DamageAssessment_Nov11",
            attribution: "NGA"
        },
        "Tacloban Building Damage Nov. 8": {
            url: "americanredcross.COPERNICUS_Damages_Tacloban"
        },
        "UNOSAT Building Assessment": {
            url: "americanredcross.HAIYAN_Ormoc_Damages",
            attribution: "UNOSAT"
        },
        // "Impassable Roads": {
        //     url: "americanredcross.HAIYAN_Bridges"
        // },
        "Tacloban Roads": {
            url: "americanredcross.HAIYAN_Tomnod_Nov12"
        },
        "Capoocan - Buildings": {
            url: "americanredcross.f168ncdi",
            attribution: "UNOSAT"
        }, 
        "Dulag - Buildings": {
            url: "americanredcross.8xwjc3di",
            attribution: "UNOSAT"
        },
        "Isabel - Buildings": {
            url: "americanredcross.8famj9k9",
            attribution: "UNOSAT"
        },
        "Madridejos - Buildings": {
            url: "americanredcross.n81l9pb9",
            attribution: "UNOSAT"
        },
        "Ormoc - Buildings": {
            url: "americanredcross.cp5bfbt9",
            attribution: "UNOSAT"
        }
        
    },
    "NDRRMC": {
        "Power Outages": {
            url: "americanredcross.4362bj4i",
            attribution: "<a href='http://www.ndrrmc.gov.ph/'>NDRRMC</a>"
        },
        "Affected Families": {
            url: "americanredcross.wa0s5rk9",
            attribution: "<a href='http://www.ndrrmc.gov.ph/'>NDRRMC</a>"
        },
        "Affected Persons": {
            url: "americanredcross.jb8rggb9",
            attribution: "<a href='http://www.ndrrmc.gov.ph/'>NDRRMC</a>"
        },
        "Families in Shelters": {
            url: "americanredcross.lvsiqkt9",
            attribution: "<a href='http://www.ndrrmc.gov.ph/'>NDRRMC</a>"
        },
        "Families outside Shelters": {
            url: "americanredcross.en42huxr",
            attribution: "<a href='http://www.ndrrmc.gov.ph/'>NDRRMC</a>"
        },
        // "Number of Shelters": {
        //     url: "americanredcross.en42huxr",
        //     attribution: "<a href='http://www.ndrrmc.gov.ph/'>NDRRMC</a>"
        // },
        "Persons in Shelters": {
            url: "americanredcross.gdpzm2t9",
            attribution: "<a href='http://www.ndrrmc.gov.ph/'>NDRRMC</a>"
        },
        "Persons outside Shelters": {
            url: "americanredcross.0zskbj4i",
            attribution: "<a href='http://www.ndrrmc.gov.ph/'>NDRRMC</a>"
        }

    },
    "Red Cross": {
        "IFRC Area of Opps": {
            url: "americanredcross.HAIYAN_Evacuation_Centers",
            attribution: "<a href='http://ifrc.org'>IFRC</a>"
        },
        "ICRC Area of Opps": {
            url: "americanredcross.ztmrhpvi",
            attribution: "<a href='http://icrc.org'>ICRC</a>"
        },
        "Philippine RC Chapters": {
            url: "americanredcross.m5zv9529",
            attribution: "<a href='http://redcross.org.ph'>PRC</a>"
        },
        "Leyte Water Distributions": {
            url: "americanredcross.haiyan_water_dist",
            attribution: "<a href='http://redcross.org.ph'>PRC</a>"
        },
        "Cash Distributions": {
            url: "americanredcross.Leyte_HH_distributions_cash",
            attribution: "<a href='http://redcross.org.ph'>PRC</a>"
        },
        "NFI Distributions": {
            url: "americanredcross.Haiyan_IFRC_ReliefDistributions_NFI",
            attribution: "<a href='http://redcross.org.ph'>PRC</a>"
        }
    },
    "Other Organizations": {
        "UN Coordination Hubs": {
            "url": "americanredcross.uncoordinationhubs",
            "attribution": "UNOCHA & MapAction"
        },
        "Humanitarian 3W": {
            url: "americanredcross.HAIYAN_3W",
            attribution: "UNOCHA & MapAction"
        }
    }
};