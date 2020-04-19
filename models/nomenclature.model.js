const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let nomenclatureSchema = new Schema({
  name: {type: String, required: true, max: 300},
  status: {type: String, default: 'DRAFT'},
  author: {type: String, default: 'Anonymous user', max: 300},
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  tags: [{
    name: {type: String, max:100}
  }],
  cards: [{
    originalname: {type: String, required: true, max: 300},
    key: {type: String, required: true, max: 300},
    location: {type: String, required: true, max: 300}
  }],
}, { versionKey: false });

nomenclatureSchema.method('transform', function() {
  var obj = this.toObject();

  //Rename fields
  obj.id = obj._id;
  delete obj._id;

  // inside cards
  obj.cards = obj.cards.map(card => {
    card.id = card._id
    delete card._id
    return card
  })

  // inside tags
  obj.tags = obj.tags.map(tag => {
    tag.id = tag._id
    delete tag._id
    return tag
  })
  
  return obj;
});

// Export the model
module.exports = mongoose.model('Nomenclature', nomenclatureSchema);
