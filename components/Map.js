import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib/es/getCenter";

const Map = ({ searchResults }) => {
  const [selectedSelection, setSelectedSelection] = useState({});
  const viewportChangeHandler = (nextViewport) => {
    setViewport(nextViewport);
  };

  const coordinates = searchResults.map((item) => ({
    latitude: item.lat,
    longitude: item.long,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/ae1997/ckxcg3ecd0cgk14oeodfga3lj"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={viewportChangeHandler}
    >
      {searchResults.map((item) => (
        <div key={item.long}>
          <Marker
            longitude={item.long}
            latitude={item.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedSelection(item)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>
          {selectedSelection.long === item.long ? (
            <Popup
              onClose={() => setSelectedSelection({})}
              closeOnClick={true}
              latitude={item.lat}
              longitude={item.long}
            >
              {item.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
