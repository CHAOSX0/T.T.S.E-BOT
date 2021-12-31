const mongoose = require("mongoose")
const currencySchema =  mongoose.Schema({
userId: {
type: "String", 
unique: true, 
required: true,}, 
  wallet: {
bronze:{
type: "Number"}, 
silver:{
type: "Number"}, 
gold:{
type: "Number"},
items:{
type: "Array"
},
total: {
type: "Number", 
required: true, 
default: 0}
	}

	})
module.exports = mongoose.model("users wallet", currencySchema)