const express = require("express");
const router = express.Router();
const Jobs = require("../models/Jobs");
router.get("/", (req, res) => {
  res.send("Jump in from /api/jobs");
});

router.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await Jobs.find();
    res.json(jobs);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/api/jobs", async (req, res) => {
  const newJob = new Jobs({
    jobTitle: req.body.jobTitle,
    id: req.body.id,
    JobLink: req.body.JobLink,
    researched: req.body.researched,
    notes: req.body.notes,
  });
  try {
    const savedJob = await newJob.save();
    res.json(savedJob);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
