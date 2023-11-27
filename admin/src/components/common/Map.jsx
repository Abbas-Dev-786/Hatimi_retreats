import PropTypes from "prop-types";
import { useEffect } from "react";
import { TileLayer, Marker, Popup, useMap } from "react-leaflet";

const Map = ({ address, coordinates }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(coordinates);
  }, [coordinates, map]);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates.length === 0 ? [0, 0] : coordinates}>
        <Popup>{address}</Popup>
      </Marker>
    </>
  );
};

export default Map;

Map.propTypes = {
  coordinates: PropTypes.array,
  address: PropTypes.string,
};
