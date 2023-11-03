const mongoose=require("mongoose");  
const marketplaceInventorSchema=new mongoose.Schema({
    title:{type:String,required:true},
    image:{type:String,required:true},
    year:{type:Number,required:true},
    price:{type:Number,required:true},
    color:{type:String,required:true},
    mileage:{type:Number,required:true},
    power:{type:Number,required:true},
    speed:{type:Number,required:true}
},{
    versionKey:false
})
const marketplaceInventorModel=mongoose.model("Marketplace_Inventor",marketplaceInventorSchema);
module.exports={marketplaceInventorModel}