const Rule = require("../models/ruleModel");
const factory = require("./factoryHandler");

// get rule => All
module.exports.getRule = factory.getDoc(Rule);

// get all rules => Admin
module.exports.getAllRules = factory.getAllDocs(Rule);

// create rule => Admin
module.exports.createRule = factory.createDoc(Rule);

// update rule => Admin
module.exports.updateRule = factory.updateDoc(Rule);

// delete rule => Admin
module.exports.deleteRule = factory.deleteDoc(Rule);
