import { useState } from "react";

const data = [
  "Overview",
  "Includes",
  "Rules",
  "Amenities",
  //   "Gallery",
  "Reviews",
  "Location",
];

const OptionsList = () => {
  const [selected, setSelected] = useState(data[0]);

  return (
    <div className="venue-options white-bg mb-4">
      <ul className="clearfix">
        {data.map((item, i) => (
          <li
            key={i}
            className={`${selected === item ? "active" : ""}`}
            onClick={() => setSelected(item)}
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionsList;
