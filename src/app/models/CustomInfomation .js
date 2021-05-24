const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema

mongoose.plugin(slug)
const CustomInfomation = new Schema({
  _id: { type: String },
  name: { type: String, required: true },
  prince: { type: String },
  img: { type: String },
 
  count: { type: Number },
  newId: { type: String, default: null },
  slug: { type: String, slug: 'name', unique: true }
}, {
  timestamps: true
})

module.exports = mongoose.model('CustomInfomation', CustomInfomation, 'customInfomation')