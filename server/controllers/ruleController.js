const Rule = require("../models/ruleModel");
const factory = require("./factoryHandler");

module.exports.createRule = factory.createDoc(Rule);

module.exports.getAllRules = factory.getAllDocs(Rule);

module.exports.getRule = factory.getDoc(Rule);

module.exports.updateRule = factory.updateDoc(Rule);

module.exports.deleteRule = factory.deleteDoc(Rule);
