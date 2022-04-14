const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 name: String, 
 age: Number, 
 height: Number 
}) 
 
module.exports = mongoose.model("Friend", 
costumeSchema) 