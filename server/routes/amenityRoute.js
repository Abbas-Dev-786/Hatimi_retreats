const express = require("express");
const authController = require("./../controllers/authController");
const amenityController = require("./../controllers/amenityController");

const router = express.Router();

router.use(authController.protect, authController.restrictTo("admin"));

router
  .route("/")
  .get(amenityController.getAllAmenities)
  .post(amenityController.createAmenity);

router
  .route("/:id")
  .get(amenityController.getAmenity)
  .patch(amenityController.updateAmenity)
  .delete(amenityController.deleteAmenity);

module.exports = router;
