const express = require("express");const { getAppoinment, getSingleAppoinment, addAppoinment } = require("../controller/appoinment.controller");

const appoinmentRouter = express.Router();

appoinmentRouter.get("/", getAppoinment);
appoinmentRouter.get("/:id", getSingleAppoinment);
appoinmentRouter.post("/", addAppoinment);



module.exports = { appoinmentRouter};