const mongoose = require("mongoose");
const currentTimestamp = Date.now();
// Create a new Date object using the current timestamp
const currentDate = new Date(currentTimestamp);
// Extract date components
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-indexed
const day = currentDate.getDate();

const podcastSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    project_id: { type: String, required: true },
    status: { type: Boolean, default: false },
    date: { type: String, require: false, default: `${year}-${month}-${day}` },
    link: { type: String, require: false },
  },
  {
    versionKey: false,
  }
);
const podcastModel = mongoose.model("podcastt", podcastSchema);
module.exports = { podcastModel };

// { "name":"Sample Project",
//     "link":"hey how are you ????",
// "project_id":"project_id"}
