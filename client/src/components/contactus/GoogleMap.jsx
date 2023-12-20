import { COORDS, address } from "../../constants";
import MapBox from "../common/MapBox";

const GoogleMap = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="google-maps">
          <MapBox coordinates={COORDS} address={address} />
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
