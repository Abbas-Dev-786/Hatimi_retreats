import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import VenueList from "./VenueList";
import { getCourts } from "../../state/api";

// const data = [
//   {
//     image: "/img/venues/venues-01.jpg",
//     link: "3457873578",
//     price: 450,
//     rating: 4.2,
//     ratingQuantity: 300,
//     title: "Box Cricket Venus",
//     desc: "Elevate your athletic journey at Sarah Sports Academy, where excellence meets opportunity.",
//     address: "Port Alsworth, AK",
//     availabilityDate: new Date(),
//     isBookmarked: false,
//   },
//   {
//     image: "/img/venues/venues-01.jpg",
//     link: "6875678767",
//     price: 200,
//     rating: 5.0,
//     ratingQuantity: 150,
//     title: "Box Cricket Venus",
//     desc: "Unleash your Box Cricket potential at our premier Box Cricket Academy, where champions are made.",
//     address: "Guysville, OH",
//     availabilityDate: new Date(),
//     isBookmarked: false,
//   },
//   {
//     image: "/img/venues/venues-01.jpg",
//     link: "8475685767",
//     price: 350,
//     rating: 4.7,
//     ratingQuantity: 120,
//     title: "Box Cricket Venus",
//     desc: "Manchester Academy: Where dreams meet excellence in sports education and training.",
//     address: "Little Rock, AR",
//     availabilityDate: new Date(),
//     isBookmarked: true,
//   },
// ];

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
  const [searchParams] = useSearchParams();
  const { city, sport } = Object.fromEntries([...searchParams]);

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["courts", city, sport],
    queryFn: ({ pageParam = 1 }) => getCourts({ page: pageParam, city, sport }),

    getNextPageParam: genNextPage,
    select: selectDataFields,
  });

  const courtsData = useMemo(() => data?.data, [data]);
  console.log(courtsData);

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
