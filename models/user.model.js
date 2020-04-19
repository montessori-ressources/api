const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-find-or-create')

let userSchema = new Schema({
    facebookId: {type: String, unique: false, required: false},
    googleId: {type: String, unique: false, required: false},
    email: {type: String, unique: false, required: false},
    name: {type: String, unique: false, required: false},
    role: {type: String, default: 'USER', required: false}
}, { versionKey: false });

userSchema.plugin(findOrCreate)

userSchema.method('transform', function() {
    var obj = this.toObject();
  
    //Rename fields
    obj.id = obj._id;
    delete obj._id;
  
    return obj;
  });

// Export the model
module.exports = mongoose.model('User', userSchema);
