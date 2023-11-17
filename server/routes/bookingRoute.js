const express = require("express");
const authController = require("./../controllers/authController");
const bookingController = require("./../controllers/bookingController");
const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(bookingController.getAllBookings)
  .post(
    bookingController.checkBody,
    bookingController.checkOverLappingBookings,
    bookingController.createBooking
  );

router
  .route("/:id")
  .get(bookingController.getBooking)
  .delete(bookingController.deleteBooking)
  .patch(bookingController.updateBooking);

module.exports = router;
