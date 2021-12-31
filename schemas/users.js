const mongoose = require("mongoose")
const currencySchema =  mongoose.Schema({
id: {
type: "String", 
required: true 
}, 
tokens:{
rabid_cut: {
type: "String"
}
}
	})
module.exports = mongoose.model("user", currencySchema)