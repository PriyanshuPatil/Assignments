const express = require("express");
const { getProject, addProject, deleteProject, getSingleProject } = require("../controller/project.controller");
const projectRouter = express.Router();
projectRouter.get("/",getProject);
projectRouter.get("/:id",getSingleProject);
projectRouter.post("/",addProject);
projectRouter.delete("/:id",deleteProject);
module.exports = { projectRouter};