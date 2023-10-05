const mongoose=require("mongoose");  
const bookingSchema=new mongoose.Schema({
    username:{type:String,required:true},
    date:{type:String,required:true},
    time:{type:String,required:true},
    user:{type:String,required:true},
    title:{type:String,required:true},
},{
    versionKey:false
})
const bookingModel=mongoose.model("booking",bookingSchema);
module.exports={bookingModel}












// {username:"",date:"",time:"",user:profesor_data.email,title:""}