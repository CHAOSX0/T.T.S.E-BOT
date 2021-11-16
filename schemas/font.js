const mongoose = require("mongoose")
const fontSchema =  mongoose.Schema({
	type:{
		type: "Array", 
		required:true, 
		unique: false 
	}, 
	num: {
		type: "Number", 
		required: true, 
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
	imageUrl: {
		type: "String",
		unique: true, 
		required: true 
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