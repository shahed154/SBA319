const mongoose = require('mongoose')
const cardSchema = new mongoose.Schema(
  {

    cardID: {
        type: Number,
        required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Fighting', 'Normal']
    },
    hp: {
      type: Number,
      required: true,
    },
    attack: {
      type: Number,
      required: true,
    }  
}
);
//


module.exports = mongoose.model('Card', cardSchema);