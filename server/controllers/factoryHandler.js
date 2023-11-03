const ApiFeatures = require("../utils/ApiFeatures");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

// get all docs with api features
module.exports.getAllDocs = (Model) =>
  catchAsync(async (req, res, next) => {
    let filter = {};
    if (req.params.propertyId) filter = { property: req.params.propertyId };

    const features = new ApiFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .search();

    const docs = await Model.paginate(features.query, {
      page: req.query.page || 1,
      limit: req.query.limit || 40,
    });

    res
      .status(200)
      .json({ status: "success", results: docs.length, data: docs });
  });

// get single doc
module.exports.getDoc = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);

    if (!doc) {
      return next(new AppError("Document does not exists", 404));
    }

    res.status(200).json({ status: "success", data: doc });
  });

// create a doc
module.exports.createDoc = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(201).json({ status: "success", data: doc });
  });

// update a doc
module.exports.updateDoc = (Model) =>
  catchAsync(async (req, res, next) => {
    const updatedDoc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });

    if (!updatedDoc) {
      return next(new AppError("Document does not exists", 404));
    }

    res.status(200).json({ status: "success", data: updatedDoc });
  });

// delete a doc
module.exports.deleteDoc = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findOneAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError("Document does not exists", 404));
    }

    res.status(204).json({ status: "success" });
  });
