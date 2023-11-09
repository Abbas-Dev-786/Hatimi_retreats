const express = require("express");
const authController = require("./../controllers/authController");
const ruleController = require("./../controllers/ruleController");

const router = express.Router();

router.use(authController.protect, authController.restrictTo("admin"));

router
  .route("/")
  .get(ruleController.getAllRules)
  .post(ruleController.createRule);

router
  .route("/:id")
  .get(ruleController.getRule)
  .patch(ruleController.updateRule)
  .delete(ruleController.deleteRule);

module.exports = router;
