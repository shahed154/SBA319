const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    }

    
  });
  

  userSchema.index({ username: 1 });
  userSchema.index({ email: 1 });
  
  module.exports = mongoose.model('User', userSchema);