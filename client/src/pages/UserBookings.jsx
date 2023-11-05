import Banner from "../components/common/Banner";
import Footer from "../components/common/Footer";
import BookingModal from "../components/user-bookings/BookingModal";
import BookingsContainer from "../components/user-bookings/BookingsContainer";

const UserBookings = () => {
  return (
    <>
      <Banner text="User Bookings" linkText="Home" link="/" />
      <BookingsContainer />
      <BookingModal />
      <Footer />
    </>
  );
};

export default UserBookings;
