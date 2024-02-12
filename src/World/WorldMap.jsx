import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { colorScale, countries, missingCountries } from "./Countries";

function WorldMap() {
    return (
        <div style={{ margin: "auto", width: "700px", height: "600px" }}>
            {/* <h1>World map</h1> */}
            <VectorMap
                map={worldMill}
                containerStyle={{
                    width: "700px",
                    height: "600px"
                }}
                backgroundColor="#282c34"
                markers={missingCountries}
                markerStyle={{
                    initial: {
                        fill: "red",
                    }
                }}
                series={{
                    regions: [
                        {
                            scale: colorScale,
                            values: countries,
                            min: 0,
                            max: 100
                        },
                    ],
                }}
                onRegionTipShow={(event, label, code) => {
                    return label.html(`
                        <div style="background-color: black;
                                    border-radius: 6px; 
                                    min-height: 50px; 
                                    width: 125px; 
                                    color: white;
                                    padding-left:10px">
                            <p><b>${label.html()}</b></p>
                            <p>${countries[code]}</p>
                        </div>`);
                }}
                onMarkerTipShow={(event, label, code) => {
                    return label.html(`
                        <div style="background-color: white;
                                    border-radius: 6px; 
                                    min-height: 50px; 
                                    width: 125px; 
                                    color: black !important;
                                    padding-left:10px">
                            <p style="color:black !important; background-color: white">
                            <b style="background-color: white">${label.html()}</b>
                            </p>
                        </div>`);
                }}
            />
        </div>
    );
};

export default WorldMap;