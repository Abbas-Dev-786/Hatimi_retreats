import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { X } from "react-feather";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { editCourt } from "../../state/api";
import { setHours, setMinutes } from "date-fns";
import { resetEditCourtData } from "../../state/slices/courtSlice";

const EditCourtModal = () => {
  const dispatch = useDispatch();
  const { editForm } = useSelector((state) => state.court);

  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [openingTime, setOpeningTime] = useState();
  const [closingTime, setClosingTime] = useState();
  const [chargePerHour, setChargePerHour] = useState("");
  const [maxCapacity, setMaxCapacity] = useState("");
  const [extraMemberCharge, setExtraMemberCharge] = useState("");
  //   const [amenities, setAmenities] = useState([]);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["edit-court"],
    mutationFn: editCourt,
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courts"] });

      toast.success(`Court edited Successfully`);
    },
  });

  const handleEditCourt = () => {
    const data = {
      name,
      size,
      description,
      openingTime,
      closingTime,
      chargePerHour,
      maxCapacity,
      extraMemberCharge,
      country,
      city,
      address,
      location: location?.split(",")?.map((c) => +c),
      id: editForm?._id,
    };

    mutate(data);
  };

  useEffect(() => {
    if (!editForm?.name) return;

    setName(editForm?.name);
    setSize(editForm?.size);
    setOpeningTime(new Date(editForm?.openingTime));
    setClosingTime(new Date(editForm?.closingTime));
    setDescription(editForm?.description);
    setChargePerHour(editForm?.chargePerHour);
    setMaxCapacity(editForm?.maxCapacity);
    setExtraMemberCharge(editForm?.extraMemberCharge);
    setCountry(editForm?.country);
    setCity(editForm?.city);
    setAddress(editForm?.address);
    setLocation(editForm?.location?.coordinates.join(","));
  }, [editForm]);

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
              <h4 className="mb-0">Edit Court</h4>
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
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="input-space mb-0">
                          <label htmlFor="court-name" className="form-label">
                            Court Name <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="court-name"
                            placeholder="Enter Court Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="input-space mb-0">
                          <label htmlFor="court-name" className="form-label">
                            Court Size <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="court-name"
                            placeholder="Enter Court Size"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-lg-6 col-md-6">
                        <div className="input-space mb-0">
                          <label htmlFor="court-name" className="form-label">
                            Opening Time <span>*</span>
                          </label>
                          <div className="form-icon customDatePickerWidth">
                            <DatePicker
                              className="form-control timepicker w-100"
                              placeholderText="Enter Opening Time"
                              selected={openingTime}
                              onChange={(newDate) => setOpeningTime(newDate)}
                              dateFormat="h:mm aa"
                              timeFormat="HH:mm"
                              showTimeSelectOnly
                              minTime={setHours(setMinutes(new Date(), 0), 5)}
                              maxTime={setHours(setMinutes(new Date(), 0), 24)}
                              timeIntervals={30}
                              showTimeSelect
                              withPortal
                              fixedHeight
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="input-space mb-0">
                          <label className="form-label">
                            Closing Time <span>*</span>
                          </label>

                          <div className="form-icon customDatePickerWidth">
                            <DatePicker
                              className="form-control timepicker w-100"
                              placeholderText="Enter Closing Time"
                              dateFormat="h:mm aa"
                              selected={closingTime}
                              onChange={(newDate) => setClosingTime(newDate)}
                              timeFormat="HH:mm"
                              minTime={setHours(
                                setMinutes(
                                  new Date(),
                                  new Date(openingTime).getMinutes()
                                ),
                                new Date(openingTime).getHours() + 1
                              )}
                              maxTime={setHours(setMinutes(new Date(), 0), 24)}
                              timeIntervals={30}
                              showTimeSelect
                              showTimeSelectOnly
                              withPortal
                              fixedHeight
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-12">
                        <div>
                          <label htmlFor="name" className="form-label">
                            Overview of Venue <span>*</span>
                          </label>
                          <textarea
                            className="form-control"
                            id="venue-overview"
                            rows="5"
                            placeholder="Enter Overview"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-lg-4 col-md-4">
                        <div className="input-space">
                          <label
                            htmlFor="starting-price"
                            className="form-label"
                          >
                            Charge (Per Hour) <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="starting-price"
                            placeholder="Enter Price"
                            value={chargePerHour}
                            onChange={(e) => setChargePerHour(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="input-space">
                          <label htmlFor="name" className="form-label">
                            Max Guests Capacity <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="max-guests"
                            placeholder="Enter Max Number of Guests"
                            value={maxCapacity}
                            onChange={(e) => setMaxCapacity(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4">
                        <div className="input-space mb-0">
                          <label htmlFor="name" className="form-label">
                            Price of Extra Guest (Per Hour) <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter Price of Extra Guests"
                            value={extraMemberCharge}
                            onChange={(e) =>
                              setExtraMemberCharge(e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-lg-4 col-md-4">
                        <div className="input-space">
                          <label htmlFor="country" className="form-label">
                            Country <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="country"
                            placeholder="Enter Country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="input-space">
                          <label htmlFor="city" className="form-label">
                            City <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="city"
                            placeholder="Enter City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="input-space">
                          <label htmlFor="coords" className="form-label">
                            Coordinates <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="coords"
                            placeholder="Enter Location Coordinates"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-space">
                          <label
                            htmlFor="street-address"
                            className="form-label"
                          >
                            Street Address <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="street-address"
                            placeholder="Enter Street Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
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
                onClick={() => {
                  dispatch(resetEditCourtData());
                }}
              >
                Cancel
              </button>

              <button
                data-bs-dismiss="modal"
                className="btn btn-primary"
                onClick={handleEditCourt}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourtModal;
