const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
  jobTitle: String,
  id: Number,
  JobLink: String,
  researched: Boolean,
  notes: String,
});

module.exports = mongoose.model("Job", JobSchema);
