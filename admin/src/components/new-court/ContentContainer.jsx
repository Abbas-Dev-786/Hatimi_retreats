import { useSelector } from "react-redux";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ArrowRightCircle } from "react-feather";
import AmenitySection from "./AmenitySection";
import GallerySection from "./GallerySection";
import InfoSection from "./InfoSection";
import LocationSection from "./LocationSection";
import OptionTabLists from "./OptionTabLists";
import PriceSection from "./PriceSection";
import RulesSection from "./RulesSection";
import { createCourt } from "../../state/api";

const ContentContainer = () => {
  const navigate = useNavigate();
  const { form } = useSelector((state) => state.court);

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["add-court"],
    mutationFn: createCourt,
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courts"] });

      navigate("/dashboard/courts");
      toast.success(`Court created Successfully`);
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    if (!Object.values(form).every((field) => Boolean(field))) {
      toast.error("All Fields Are Mandantory");
      return;
    }

    mutate(form);
  };

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <OptionTabLists />

            <form
              className="accordion"
              id="accordionPanel"
              onSubmit={handleFormSubmit}
            >
              <InfoSection />

              <PriceSection />

              <RulesSection />

              <AmenitySection />

              <GallerySection />

              <LocationSection />

              <div className="text-center btn-row">
                <button className="btn btn-secondary btn-icon" type="submit">
                  Create New Court{" "}
                  <i className="ms-1">
                    <ArrowRightCircle size={"15px"} />
                  </i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
