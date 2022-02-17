const mongoose = require("mongoose")
const fontSchema =  mongoose.Schema({
type:{
 type: "Array", 
 required:true, 
 unique: false
    },
title: {
 type: "String",
 unique: true, 
 required: true 
      }, 
dowlandUrl: {
 type: "String",
 unique: true, 
 required: true  
}, 
longUrl: {
type: "String", 
unique: true, 
required: true, 
}, 
linkId:{
type: "String", 
unique: true 
}, 
imageUrl: {
type: "String",  
}, 
 author: {
  avatar:{
   url: {
    type: "String", 
    unique: false 
	}
	 }, 
  id: {
   type: "String", 
   unique: false 
      },
  name: {
     type: "String", 
     unique: false 
	 }
	}, 
 reported: {
  type: "Boolean",
  unique: false, 
  required: true, 
  default: false }
})
module.exports = mongoose.model("font", fontSchema)