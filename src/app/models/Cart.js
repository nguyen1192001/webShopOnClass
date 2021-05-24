const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema

mongoose.plugin(slug)
const Cart = new Schema({
    _id :{type : String},
    infoName: { type: String,},
    name: { type: String, },
    phone: { type: String },
    adress: { type: String },
    prince: { type: String },
    img: { type: String },
    count : {type : Number},
    newId : {type : String , default : null},
    slug: { type: String, slug: 'infoName', unique: true }

    // _id :{type : String},
    // infoName: { type: String, required: true },
    // phone: { type: String },
    // adress: { type: String },
    // slug: { type: String, slug: 'infoName'}
    
  }, {
    timestamps: true
  })

  module.exports = mongoose.model('Cart',Cart,'cart')