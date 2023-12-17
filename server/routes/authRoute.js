const express = require("express");
const authController = require("./../controllers/authController");

const router = express.Router();

router.post(
  "/register",
  authController.protect,
  authController.restrictTo("admin"),
  authController.register
);

router.post("/login", authController.adminLogin);

router.patch(
  "/updatePassword",
  authController.protect,
  authController.restrictTo("admin"),
  authController.updatePassword
);

module.exports = router;
