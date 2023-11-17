const Amenity = require("../models/amenityModel");
const factory = require("./factoryHandler");

// get amenity => All
module.exports.getAmenity = factory.getDoc(Amenity);

// create amenity => Admin
module.exports.createAmenity = factory.createDoc(Amenity);

// get all amenities amenity => Admin
module.exports.getAllAmenities = factory.getAllDocs(Amenity);

// update amenity => Admin
module.exports.updateAmenity = factory.updateDoc(Amenity);

// delete amenity => Admin
module.exports.deleteAmenity = factory.deleteDoc(Amenity);
