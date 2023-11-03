const mongoose=require("mongoose");  
const oemSpecsSchema=new mongoose.Schema({
    name:{type:String,required:true},
    year:{type:Number,required:true},
    price:{type:Number,required:true},
    color:{type:[String],required:true},
    mileage:{type:Number,required:true},
    power:{type:Number,required:true},
    speed:{type:Number,required:true}
},{
    versionKey:false
})
const oemSpecsModel=mongoose.model("OEM_Specs",oemSpecsSchema);
module.exports={oemSpecsModel}