
const { appoinmentModel } = require("../model/appoinment");

const getAppoinment = async (req, res) => {
  try {
    const appoinment_Data = await appoinmentModel.find();
    res.send(appoinment_Data);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};


const getSingleAppoinment = async (req, res) => {
  const id = req.params.id;
  try {
    const appoinment_Data = await appoinmentModel.findById(id);
    if (appoinment_Data) {
      res.send(appoinment_Data);
    } else {
      res.send({ msg: "Appoinment is Not Present" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};


const addAppoinment = async (req, res) => {
  try {
     const newappoinment = new appoinmentModel(req.body);
       await newappoinment.save();
      res.status(201).send({ msg: "Appoinment Succesfully Added" }) ;
  } catch (err) {
    res.status(400).send({ msg: err.message});
  }
};

module.exports = {
 addAppoinment,getAppoinment,getSingleAppoinment
};