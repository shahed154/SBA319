const mongoose = require('mongoose');


const CollectionSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    cards: [
      {
        card: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Card'
        },
        quantity: {
          type: Number,
          default: 1,
          min: 1,
          max:100
        }
      }
    ]
  });

  module.exports = mongoose.model('Collection', CollectionSchema);