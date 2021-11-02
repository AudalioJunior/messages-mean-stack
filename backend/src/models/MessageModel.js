const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: {type: String}
});


schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Message', schema);