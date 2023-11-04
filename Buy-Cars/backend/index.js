const mongoose=require("mongoose") ;
const express=require("express")  ;
const cors=require("cors") ;
const { Connection } = require("./config/db");
const { usersRouter } = require("./routes/user.routes");
const { oemSpecsRouter } = require("./routes/oemSpecs.routes");
const { marketplaceInventorRouter } = require("./routes/marketplaceInventor.routes");
require("dotenv").config() ;
const app=express() ;
app.use(express.json()) ;
app.use(cors()) ;

app.get("/",(req,res)=>{
res.send("Welcome To buy-cars-Assignment Backend")
})
app.use("/user",usersRouter);
app.use("/marketplaceinventory",marketplaceInventorRouter);
app.use("/oemspecs",oemSpecsRouter);

app.listen(process.env.port,async()=>{
try{
await Connection ;
console.log(`Connected to server`)
}catch(err){
console.log(err.message)
}
console.log(`Server running at ${process.env.port}`)
})

