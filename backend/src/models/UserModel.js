const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const schema = new Schema({
    userName: {type: String, required: true},
    password: {type: String, required: true},
    messages: [{type: Schema.Types.ObjectId, ref: 'Message', unique:true}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);