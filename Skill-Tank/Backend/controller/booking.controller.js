const { bookingModel } = require("../model/booking");

const getBooking = async (req, res) => {
  try {
    const booking_Data = await bookingModel.find();
    res.send(booking_Data);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};


const getSingleBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const booking_Data = await bookingModel.findById(id);
    if (booking_Data) {
      res.send(booking_Data);
    } else {
      res.send({ msg: "Booking is Not Present" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};


const addBooking = async (req, res) => {
  try {
     const new_booking = new bookingModel(req.body);
       await new_booking.save();
      res.status(201).send({ msg: "Booking Succesfully Added" }) ;
  } catch (err) {
    res.status(400).send({ msg: err.message});
  }
};

module.exports = {
 addBooking,getBooking,getSingleBooking
};