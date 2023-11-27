import PropTypes from "prop-types";
import L from "leaflet";
import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { mapZoomLevel } from "../../constants";
import Map from "./Map";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapBox = ({ coordinates, address, zoomLevel = mapZoomLevel }) => {
  return (
    <MapContainer
      center={coordinates.length === 0 ? [0, 0] : coordinates}
      zoom={zoomLevel}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "500px" }}
    >
      <Map
        address={address}
        coordinates={coordinates.length === 0 ? [0, 0] : coordinates}
      />
    </MapContainer>
  );
};

MapBox.propTypes = {
  coordinates: PropTypes.array,
  address: PropTypes.string,
  zoomLevel: PropTypes.number,
};

export default MapBox;
