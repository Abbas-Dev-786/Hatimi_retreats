const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const ruleSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
      required: [true, "rule must have a text"],
    },
  },
  { timestamps: true }
);

ruleSchema.plugin(mongoosePaginate);

const Rule = mongoose.model("Rule", ruleSchema);
module.exports = Rule;
