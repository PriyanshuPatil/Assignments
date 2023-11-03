const express = require("express");
const { get_oemSpecs, add_oemSpecs, delete_oemSpecs, getSingle_oemSpecs } = require("../controller/oemSpecs.controller");
const oemSpecsRouter = express.Router();

oemSpecsRouter.get("/", get_oemSpecs);
oemSpecsRouter.post("/",add_oemSpecs);
oemSpecsRouter.delete("/",delete_oemSpecs);
oemSpecsRouter.get("/:id",getSingle_oemSpecs);


module.exports = { oemSpecsRouter};