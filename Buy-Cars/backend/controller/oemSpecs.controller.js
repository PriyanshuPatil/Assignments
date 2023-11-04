const { oemSpecsModel } = require("../model/oemSpecs.model");
function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

const get_oemSpecs = async (req, res) => {
  const { name} = req.query;
let myquery = {};
if (name) {
  myquery.name = toTitleCase(name)
}
  try {
    const oemSpecs_Data = await oemSpecsModel.find(myquery);
    console.log(req.query)
    res.send(oemSpecs_Data);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};


const getSingle_oemSpecs = async (req, res) => {
  const id = req.params.id;
  try {
    const oemSpecs_Data = await oemSpecsModel.findById(id);
    if (oemSpecs_Data) {
      res.send(oemSpecs_Data);
    } else {
      res.send({ msg: "OEM Specs is Not Present" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};


const add_oemSpecs = async (req, res) => {
  try {
     const new_oemSpecs = new oemSpecsModel(req.body);
       await new_oemSpecs.save();
      res.status(201).send({ msg: "OEM Specs Succesfully Added" }) ;
  } catch (err) {
    res.status(400).send({ msg: err.message});
  }
};


const delete_oemSpecs = async (req, res) => {
    const id = req.params.id;
    try {
      const oemSpecs_Data = await oemSpecsModel.findByIdAndDelete(id);
      res.send({ msg: "OEM Specs Succesfully Deleted" });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  };
  

module.exports = {
 add_oemSpecs,get_oemSpecs,getSingle_oemSpecs,delete_oemSpecs
};