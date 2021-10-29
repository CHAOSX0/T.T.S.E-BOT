const mongoose = require("mongoose")
const fontnoShema =  mongoose.Schema({
	num: {
		type: "Number", 
		unique: true, 
		required: true 
	}, 
	messageid: {
		type: "String", 
		unique: true, 
		required: true, 
	}
	})
module.exports = mongoose.model("fontno", fontnoShema)