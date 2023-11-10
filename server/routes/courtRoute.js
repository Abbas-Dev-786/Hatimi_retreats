const express = require("express");
const reviewRouter = require("./reviewRoute");
const bookingRouter = require("./bookingRoute");
const authController = require("./../controllers/authController");
const courtController = require("../controllers/courtController");

const router = express.Router();

router.use("/:courtId/reviews", reviewRouter);
router.use("/:courtId/bookings", bookingRouter);

router.get("/cities", courtController.getAllCities);
router.get("/top10", courtController.getTop10, courtController.getAllCourts);

router.get("/available-slots/:id", courtController.getAvailableTimeSlots);

router.route("/").get(courtController.getAllCourts).post(
  authController.protect,
  authController.restrictTo("admin"),
  courtController.setCoords,
  // courtController.uploadCourtImages,
  // courtController.setImages,
  courtController.createCourt
);

router
  .route("/:id")
  .get(courtController.getCourt)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    courtController.setCoords,
    courtController.uploadCourtImages,
    courtController.setImages,
    courtController.updateCourt
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    courtController.deleteCourt
  );

router
  .route("/:courtId/amenities")
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    courtController.addAmenity
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    courtController.deleteAmenity
  );

module.exports = router;
