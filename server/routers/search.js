const express = require("express");
const Project=require("../models/project")
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

module.exports = router;
