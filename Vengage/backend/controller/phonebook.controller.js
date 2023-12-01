const { contactModel } = require("../model/phonebook.model");

const getContact = async (req, res) => {
  try {
    const contact_Data = await contactModel.find();
      res.send(contact_Data);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const getSingleContact = async (req, res) => {
  const id = req.params.id;
  try {
    const contact_Data = await contactModel.findById(id);
    if (contact_Data) {
      res.send(contact_Data);
    } else {
      res.status(400).send({ msg: "Contact is Not Present" });
    }
  } catch (err) {
    
    res.status(400).send({ msg: err.message });
  }
};

const updateContact = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const contact_Data = await contactModel.findByIdAndUpdate(
      { _id: id },{...data}
    );
    if (contact_Data) {
      res.send(contact_Data);
    } else {
      res.status(400).send({ msg: "contact is Not Present" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const addContact = async (req, res) => {
  try {
    const new_contact = new contactModel(req.body);
    await new_contact.save();
    res.status(201).send({ msg: "contact Succesfully Added" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const deleteContact = async (req, res) => {
  const id = req.params.id;
  try {
    const contact_Data = await contactModel.findByIdAndDelete(id);
    res.send({ msg: "contact Succesfully Deleted" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

module.exports = {
  getContact,
  getSingleContact,
  addContact,
  deleteContact,
  updateContact,
};
