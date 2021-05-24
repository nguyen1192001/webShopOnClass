const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema

mongoose.plugin(slug)
const listAdmin = new Schema({
    password: { type: String, required: true },

})

  module.exports = mongoose.model('listAdmin',listAdmin,'listAdmin')