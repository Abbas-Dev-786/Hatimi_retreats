const Review = require("./../models/reviewModel");
const factory = require("./factoryHandler");

// get All reviews => All
module.exports.getAllReviews = factory.getAllDocs(Review);

// get a review => All
module.exports.getReview = factory.getDoc(Review);

// create a review => user
module.exports.createReview = factory.createDoc(Review);

// update a review => user
module.exports.updateReview = factory.updateDoc(Review);

// delete a reviews => All
module.exports.deleteReview = factory.deleteDoc(Review);

// set object ids to body middleware
module.exports.setCourtUserIds = (req, res, next) => {
  if (!req.body.court) req.body.court = req.params.courtId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};
