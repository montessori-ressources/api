const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let NomenclatureSchema = new Schema({
  name: {type: String, required: true, max: 300},
  cards: [{
    originalname: {type: String, required: true, max: 300},
    key: {type: String, required: true, max: 300},
    location: {type: String, required: true, max: 300}
  }],
});

// Export the model
module.exports = mongoose.model('Nomenclature', NomenclatureSchema);
