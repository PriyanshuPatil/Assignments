const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema(
  {
    storage:{ type: String, required: false },
    first_name: {type: String,require:true},
    last_name: { type: String, require: false },
    phone_number: { type: Number, require: true},
    mobile_number: { type: Number, required: false },
    email: { type: String, require: false },
    home: { type: String, require: false, default: "" },
    image: { type: String, require: false, default: "" },
  },
  {
    versionKey: false,
  }
);
const contactModel = mongoose.model("contacts", contactSchema);
module.exports = { contactModel };

