
const { marketplaceInventorModel } = require("../model/marketplaceInventor.model");

const get_marketplaceInventor = async (req, res) => {
  try {
    const marketplaceInventor_Data = await marketplaceInventorModel.find();
    res.send(marketplaceInventor_Data);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};


const getSingle_marketplaceInventor = async (req, res) => {
  const id = req.params.id;
  try {
    const marketplaceInventor_Data = await marketplaceInventorModel.findById(id);
    if (marketplaceInventor_Data) {
      res.send(marketplaceInventor_Data);
    } else {
      res.send({ msg: "Marketplace Inventor is Not Present" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};


const add_marketplaceInventor = async (req, res) => {
  try {
     const new_marketplaceInventor = new marketplaceInventorModel(req.body);
       await new_marketplaceInventor.save();
      res.status(201).send({ msg: "Marketplace Inventor Succesfully Added" }) ;
  } catch (err) {
    res.status(400).send({ msg: err.message});
  }
};


const delete_marketplaceInventor = async (req, res) => {
    const id = req.params.id;
    try {
      const marketplaceInventor_Data = await marketplaceInventorModel.findByIdAndDelete(id);
      res.send({ msg: "Marketplace Inventor Succesfully Deleted" });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  };

  const update_marketplaceInventor = async (req, res) => {
    const id = req.params.id;
    try {
      const marketplaceInventor_Data = await marketplaceInventorModel.findByIdAndUpdate(id,req.body);
      res.send({ msg: "Marketplace Inventor Succesfully Updated" });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  };
  

module.exports = {
 add_marketplaceInventor,get_marketplaceInventor,getSingle_marketplaceInventor,delete_marketplaceInventor,update_marketplaceInventor
};