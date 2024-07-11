const express = require("express");
const uid = require("uid");
const Router = express.Router();
const Project = require("../models/project");

Router.post("/project", async (req, res) => {
  const {
    startupId,
    projectTitle,
    projectDescription,
    targetMarket,
    businessModel,
    fundingGoals,
    useOfFunds,
    expectedROI,
    patentDetails,
    legalDocuments,
  } = req.body;
  try {
    const bufferData = Buffer.from(legalDocuments, "base64");
    const projectId = uid.uid(16);
    const date = Date.now();
    const project = await Project({
      projectId: projectId,
      startupId: startupId,
      projectTitle: projectTitle,
      projectDescription: projectDescription,
      targetMarket: targetMarket,
      businessModel: businessModel,
      fundingGoals: fundingGoals,
      useOfFunds: useOfFunds,
      expectedROI: expectedROI,
      patentDetails: patentDetails,
      legalDocuments: bufferData,
      createdAt:date
    });
    const result = await project.save();
    res.status(200).send("project uploaded successfully");
  } catch (e) {
    console.error(e);

    res.status(400).send("project not uploaded successfully");
  }
});

Router.get('/allprojects',async(req,res)=>{
    try{
        const projects=await Project.find({});
        res.json(projects);
    }
    catch(e){
        res.json(JSON.stringify(e));
    }
})

module.exports=Router;