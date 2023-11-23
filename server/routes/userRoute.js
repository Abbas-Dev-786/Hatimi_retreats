const express = require("express");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");

const router = express.Router();

router.use(authController.protect);

router.get("/", authController.restrictTo("admin"), userController.getAllUsers);
router.get(
  "/stats",
  authController.restrictTo("admin"),
  userController.getAdminStats
);

router
  .route("/me")
  .get(userController.setMe, userController.getUser)
  .delete(userController.deleteMe);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.checkBody, userController.updateUser)
  .delete(authController.restrictTo("admin"), userController.deleteUser);

module.exports = router;
