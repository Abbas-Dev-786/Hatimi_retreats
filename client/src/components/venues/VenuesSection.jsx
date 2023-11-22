import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import VenueList from "./VenueList";
import { getCourts } from "../../state/api";
import { setTotalCounts } from "../../state/slices/courtSlice";

const genNextPage = (lastPage, allPages) => {
  const nextPage = lastPage.data.hasNextPage ? allPages.length + 1 : undefined;

  return nextPage;
};

const selectDataFields = (obj) => {
  const data = obj.pages.flatMap((el) => el.data.docs);
  const totalDocs = obj.pages[0].data.totalDocs;

  return { data, totalDocs };
};

const VenuesSection = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { city, sport } = Object.fromEntries([...searchParams]);

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["courts", city, sport],
    queryFn: ({ pageParam = 1 }) => getCourts({ page: pageParam, city, sport }),

    getNextPageParam: genNextPage,
    select: selectDataFields,
  });

  useEffect(() => {
    dispatch(setTotalCounts(data?.totalDocs));
  }, [data, dispatch]);

  const courtsData = useMemo(() => data?.data, [data]);

  if (!city || !sport) {
    return <h4 className="text-center">Please Select a City and Sport.</h4>;
  }

  return (
    <div className="row justify-content-center">
      <InfiniteScroll
        dataLength={courtsData?.length || 0}
        next={fetchNextPage}
        hasMore={data?.totalDocs !== courtsData?.length}
        scrollableTarget="scrollableDiv"
        loader={<h6 className="text-center">Loading...</h6>}
        endMessage={
          <h5 className="text-center my-3">Yay! You have seen it all</h5>
        }
      >
        {courtsData?.map((court) => (
          <VenueList key={court._id} {...court} />
        ))}
      </InfiniteScroll>

      {/* {data?.map((item) => (
        <VenueList key={item.link} {...item} />
      ))} */}
    </div>
  );
};

export default VenuesSection;
