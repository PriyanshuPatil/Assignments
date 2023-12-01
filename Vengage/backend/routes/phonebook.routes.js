const express = require("express");
const {
  getContact,
  addContact,
  deleteContact,
  getSingleContact,
  updateContact,
} = require("../controller/phonebook.controller");
const ContactRouter = express.Router();
ContactRouter.get("/", getContact);
ContactRouter.get("/:id", getSingleContact);
ContactRouter.post("/", addContact);
ContactRouter.patch("/:id", updateContact);
ContactRouter.delete("/:id", deleteContact);
module.exports = { ContactRouter };
