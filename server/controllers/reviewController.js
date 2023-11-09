const Review = require("./../models/reviewModel");
const factory = require("./factoryHandler");

exports.setCourtUserIds = (req, res, next) => {
  if (!req.body.property) req.body.property = req.params.propertyId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllReviews = factory.getAllDocs(Review);
exports.getReview = factory.getDoc(Review);
exports.createReview = factory.createDoc(Review);
exports.updateReview = factory.updateDoc(Review);
exports.deleteReview = factory.deleteDoc(Review);
