import { AlertOctagon } from "react-feather";

const Rules = () => {
  return (
    <div className="accordion-item mb-4" id="rules">
      <h4 className="accordion-header" id="panelsStayOpen-rules">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseThree"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseThree"
        >
          Rules
        </button>
      </h4>
      <div
        id="panelsStayOpen-collapseThree"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-rules"
      >
        <div className="accordion-body">
          <ul>
            <li>
              <p>
                <i>
                  <AlertOctagon size={"16px"} />
                </i>
                Non Marking Shoes are recommended not mandatory for Box Cricket.
              </p>
            </li>
            <li>
              <p>
                <i>
                  <AlertOctagon size={"16px"} />
                </i>
                A maximum number of members per booking per Box Cricket court is
                admissible fixed by Venue Vendors
              </p>
            </li>
            <li>
              <p>
                <i>
                  <AlertOctagon size={"16px"} />
                </i>
                No pets, no seeds, no gum, no glass, no hitting or swinging
                outside of the cage
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rules;
