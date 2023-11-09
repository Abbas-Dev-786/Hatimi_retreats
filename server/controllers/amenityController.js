const Amenity = require("../models/amenityModel");
const factory = require("./factoryHandler");

module.exports.createAmenity = factory.createDoc(Amenity);

module.exports.getAllAmenities = factory.getAllDocs(Amenity);

module.exports.getAmenity = factory.getDoc(Amenity);

module.exports.updateAmenity = factory.updateDoc(Amenity);

module.exports.deleteAmenity = factory.deleteDoc(Amenity);
