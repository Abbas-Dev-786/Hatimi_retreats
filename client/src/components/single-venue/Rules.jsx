import { useSelector } from "react-redux";
import { AlertOctagon } from "react-feather";

const Rules = () => {
  const { courtData } = useSelector((state) => state.court);

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
            {courtData?.rules?.text?.split(".")?.map((rule, i) => (
              <li key={i}>
                <p className="text-capitalize">
                  <i>
                    <AlertOctagon size={"16px"} />
                  </i>
                  {rule}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rules;
