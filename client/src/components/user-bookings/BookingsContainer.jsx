import BookingDataTable from "./BookingDataTable";
import FiltersList from "./FiltersList";

const BookingsContainer = () => {
  return (
    <div className="content court-bg">
      <div className="container">
        <FiltersList />
        <BookingDataTable />
      </div>
    </div>
  );
};

export default BookingsContainer;
