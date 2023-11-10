const Review = require("./../models/reviewModel");
const factory = require("./factoryHandler");

module.exports.setCourtUserIds = (req, res, next) => {
  if (!req.body.court) req.body.court = req.params.courtId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

module.exports.getAllReviews = factory.getAllDocs(Review);
module.exports.getReview = factory.getDoc(Review);
module.exports.createReview = factory.createDoc(Review);
module.exports.updateReview = factory.updateDoc(Review);
module.exports.deleteReview = factory.deleteDoc(Review);
