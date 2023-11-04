const express = require("express");
const { get_marketplaceInventor, add_marketplaceInventor, delete_marketplaceInventor, getSingle_marketplaceInventor } = require("../controller/marketplaceInventor.controller");
const marketplaceInventorRouter = express.Router();

marketplaceInventorRouter.get("/", get_marketplaceInventor);
marketplaceInventorRouter.post("/",add_marketplaceInventor);
marketplaceInventorRouter.delete("/:id",delete_marketplaceInventor);
marketplaceInventorRouter.get("/:id",getSingle_marketplaceInventor);


module.exports = { marketplaceInventorRouter};