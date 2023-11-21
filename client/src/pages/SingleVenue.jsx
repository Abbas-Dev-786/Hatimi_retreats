import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Content from "../components/single-venue/Content";
import ImageGallerySection from "../components/single-venue/ImageGallerySection";
import InfoSection from "../components/single-venue/InfoSection";
import { getSingleCourt } from "../state/api";
import { useEffect } from "react";
import { setCourtData } from "../state/slices/courtSlice";

const SingleVenue = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["court", id],
    queryFn: getSingleCourt,
  });

  useEffect(() => {
    dispatch(setCourtData(data));
  }, [data, dispatch]);

  return (
    <div className="venue-coach-details">
      <ImageGallerySection />
      <InfoSection />
      <Content />
    </div>
  );
};

export default SingleVenue;
