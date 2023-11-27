import { useState } from "react";
import { X } from "react-feather";
import { toast } from "react-toastify";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createRule } from "../../state/api";

const AddNewRuleModal = () => {
  const [text, setText] = useState("");

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["add-rule"],
    mutationFn: createRule,
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rules"] });

      toast.success(`Rule created Successfully`);
    },
  });

  const handleNewRule = () => {
    if (!text) {
      toast.error("Rule is mandatory");
      return;
    }

    if (text.length > 150) {
      toast.error("Text could not be greater than 150 characters");
      return;
    }

    mutate({ text });
  };

  return (
    <div
      className="modal custom-modal fade request-modal"
      role="dialog"
      id="amenityModal"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div className="form-header modal-header-title">
              <h4 className="mb-0">Add New Rule</h4>
            </div>
            <a className="close" data-bs-dismiss="modal" aria-label="Close">
              <span className="align-center" aria-hidden="true">
                <i>
                  <X size={"15px"} />
                </i>
              </span>
            </a>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="card dashboard-card court-information">
                  <div className="card-header">
                    <h6>Rule Text</h6>
                    <textarea
                      type="text"
                      className="form-control mt-1"
                      value={text}
                      rows={5}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="table-accept-btn">
              <button
                data-bs-dismiss="modal"
                className="btn cancel-table-btn me-3"
              >
                Cancel
              </button>
              <button
                data-bs-dismiss="modal"
                className="btn btn-primary"
                onClick={handleNewRule}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewRuleModal;
