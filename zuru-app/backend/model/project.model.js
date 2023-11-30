const mongoose=require("mongoose");  
const currentTimestamp = Date.now();
// Create a new Date object using the current timestamp
const currentDate = new Date(currentTimestamp);
// Extract date components
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-indexed
const day = currentDate.getDate();

const projectSchema=new mongoose.Schema({
    name:{type:String,required:true},
    episodes:{type:Number,required:true},
    last_edit:{type:String,require:false,default:`${year}-${month}-${day}`},
    chatbot_name:{type:String,require:false},
    welcome_message:{type:String,require:false},
    input_placeholder:{type:String,require:false},
    image_url:{type:String,require:false,default:""}
},{
    versionKey:false
})
const projectModel=mongoose.model("project",projectSchema);
module.exports={projectModel}


// { "name":"Sample Project",
//     "episodes":"4",
//     "chatbot_name":"xyz",
//     "welcome_message":"hey!",
//     "input_placeholder":"whats up ?",
//     "image_url":""}