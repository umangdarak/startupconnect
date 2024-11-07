const express = require("express");
const mongoose = require("mongoose");  // Make sure to import mongoose
const Project = require("../models/project");
const router = express.Router();

router.get("/projects", async (req, res) => {
  const { title } = req.query; 

  if (!title) {
    return res.status(400).json({ message: "Project title is required." });
  }

  try {
    const projects = await Project.find({
      projectTitle: { $regex: new RegExp(title, 'i') },
    });

    if (projects.length === 0) {
      return res.status(404).json({ message: "No projects found." });
    }

    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
});

router.get("/projectsid", async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required." });
  }

  try {
    const userObjectId = new mongoose.Types.ObjectId(userId);

    // Find projects based on the ObjectId userId
    const projects = await Project.find({ startupId: userObjectId });
    if (projects.length === 0) {
      return res.status(404).json({ message: "No projects found." });
    }

    res.json(projects);
  } catch (error) {
    console.error(error);

    // Handle invalid ObjectId format error
    if (error instanceof mongoose.Error.CastError) {
      return res.status(400).json({ message: "Invalid User ID format." });
    }

    res.status(500).json({ message: "Server error." });
  }
});

module.exports = router;
