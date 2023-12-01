const express = require("express");
const { getProject, addProject, deleteProject, getSingleProject, updateProject } = require("../controller/project.controller");
const projectRouter = express.Router();
projectRouter.get("/",getProject);
projectRouter.get("/:id",getSingleProject);
projectRouter.post("/",addProject);
projectRouter.patch("/:id",updateProject);
projectRouter.delete("/:id",deleteProject);
module.exports = { projectRouter};