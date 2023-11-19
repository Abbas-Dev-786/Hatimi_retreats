import MapBox from "../common/MapBox";

const GoogleMap = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="google-maps">
          <MapBox
            coordinates={[22.7055, 75.812]}
            address="70 Bright St New York, USA"
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
