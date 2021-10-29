const mongoose = require("mongoose")
const font ={ 
	type:{
		type: "Array", 
		required:true
	}, 
	num: {
		type: "Number", 
		required: true 
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
			 type: "String"
		 }
	 }, 
	 id: {
		 type: "String"
	 },
	 name: {
		 type: "String"
	 }
	}, 
	reported: {
		type: "Boolean",
		required: true, 
		default: false
	} }
const fontSchema =  mongoose.Schema({
	font
})
module.exports = mongoose.model("font", fontSchema)