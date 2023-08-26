const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
name:String,
email:String,
age:Number
})
cons UserModel=mongoose.model("users",userSchema)
module.exports=UserModel
