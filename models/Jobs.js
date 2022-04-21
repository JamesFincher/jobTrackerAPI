const mongoose = require("mongoose");
const JobSchema = mongoose.Schema({
  jobTitle: String,
  id: { type: String, default: mongoose.Types.ObjectId },
  JobLink: String,
  researched: Boolean,
  notes: String,
});

module.exports = mongoose.model("Job", JobSchema);
