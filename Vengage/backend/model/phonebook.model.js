const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema(
  {
    storage:{ type: String, required: false },
    first_name: {type: String,required:true},
    last_name: { type: String, required: false },
    phone_number: { type: Number, required: true},
    mobile_number: { type: Number, required: false },
    email: { type: String, required: false },
    home: { type: String, required: false, default: "" },
    image: { type: String, required:false , default: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHmgseRqO6CI14XWSh5swCN19tzNhtgptvg&usqp=CAU` },
  },
  {
    versionKey: false,
  }
);
const contactModel = mongoose.model("contacts", contactSchema);
module.exports = { contactModel };

