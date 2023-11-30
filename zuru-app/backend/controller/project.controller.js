const { projectModel } = require("../model/project.model");

const getProject = async (req, res) => {
  const email = req.query.email;
  console.log(email)
  try {
    if(email){
      const project_Data = await projectModel.find({email:email});
      console.log(project_Data)
    res.send(project_Data);
    }else{
      const project_Data = await projectModel.find();
      console.log(project_Data)
      res.send(project_Data);
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};



const getSingleProject = async (req, res) => {
  const id = req.params.id;
  try {
    const Project_Data = await projectModel.findById(id);
    if (Project_Data) {
      res.send(Project_Data);
    } else {
      res.send({ msg: "Project is Not Present" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};


const addProject = async (req, res) => {
  try {
     const new_Project = new projectModel(req.body);
       await new_Project.save();
      res.status(201).send({ msg: "Project Succesfully Added" }) ;
  } catch (err) {
    res.status(400).send({ msg: err.message});
  }
};

const deleteProject = async (req, res) => {
  const id = req.params.id;
  try {
    const project_Data = await projectModel.findByIdAndDelete(id);
    res.send({ msg: "Project Succesfully Deleted" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};


module.exports = {
  getProject,getSingleProject,addProject,deleteProject
};