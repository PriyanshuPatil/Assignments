const mongoose=require("mongoose");  
const appoinmentSchema=new mongoose.Schema({
    username:{type:String,required:true},
    img:{type:String,required:true},
    title:{type:String,required:true},
    rating:{type:String,required:true},
    location:{type:String,required:true},
},{
    versionKey:false
})
const appoinmentModel=mongoose.model("appoinment",appoinmentSchema);
module.exports={appoinmentModel}






// {"username":"Arun Sharma",
//     "img":"https://media.istockphoto.com/id/1278976696/photo/mature-man-professor-standing-in-class.jpg?s=612x612&w=0&k=20&c=BBfO7aVkYBTNJ__MbRPXs2apYb4cyI3kJl9MZ2_alvc=",
//     "title":"English Professor",
//     "rating":"3.5/5",
//     "location":"Indore"
//   }