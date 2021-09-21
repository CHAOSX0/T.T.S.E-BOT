const mongoose = require('mongoose');

const fontSchema = new mongoose.Schema({
  'fontno': {
    type: Number,
    required: true,
    unique: true
  },
  'font_title': {
    type: String,
    default: "",
  },
  'font_image_url': {
    type: String,
    default: "",
  },
  'Done': {
    type: Boolean,
    default: false,
  },
})






const font = mongoose.model('font', fontSchema)
module.exports = font