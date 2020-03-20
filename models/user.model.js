const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-find-or-create')

let UserSchema = new Schema({
    facebookId: {type: String, unique: true, required: false},
    googleId: {type: String, unique: true, required: false},
    email: {type: String, unique: false, required: false},
    name: {type: String, unique: false, required: false},
});

UserSchema.plugin(findOrCreate)

// Export the model
module.exports = mongoose.model('User', UserSchema);
