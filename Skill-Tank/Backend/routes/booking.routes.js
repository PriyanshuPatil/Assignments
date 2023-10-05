const express = require("express");
const { getBooking, addBooking } = require("../controller/booking.controller");
const bookingRouter = express.Router();

bookingRouter.get("/", getBooking);
bookingRouter.post("/", addBooking);


module.exports = { bookingRouter};