const OptionTabLists = () => {
  return (
    <div className="venue-options option-list-court white-bg">
      <ul className="clearfix">
        <li className="active">
          <a href="#basic-info">Basic Info</a>
        </li>
        <li>
          <a href="#venue-price">Venue Price</a>
        </li>

        <li>
          <a href="#rules">Rules</a>
        </li>
        <li>
          <a href="#amenities">Amenities</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#location">Locations</a>
        </li>
      </ul>
    </div>
  );
};

export default OptionTabLists;
