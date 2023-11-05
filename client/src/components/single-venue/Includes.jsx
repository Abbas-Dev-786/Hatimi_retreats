import { CheckSquare } from "react-feather";

const data = [
  "Box Cricket Racket Unlimited",
  "Bats",
  "Hitting Machines",
  "Multiple Courts",
  "Spare Players",
  "Instant Racket",
  "Green Turfs",
];

const Includes = () => {
  return (
    <div className="accordion-item mb-4" id="includes">
      <h4 className="accordion-header" id="panelsStayOpen-includes">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseTwo"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseTwo"
        >
          Includes
        </button>
      </h4>
      <div
        id="panelsStayOpen-collapseTwo"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-includes"
      >
        <div className="accordion-body">
          <ul className="clearfix">
            {data.map((item, i) => (
              <li key={i}>
                <i>
                  <CheckSquare size={"16px"} />
                </i>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Includes;
