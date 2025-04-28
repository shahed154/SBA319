
const express = require('express');
const router = express.Router();
const Collection = require('../models/collectionModel')
const User = require('../models/userModel'); 
const Card = require('../models/cardModel')




router.get('/user/:userId', async (req, res) => {
    try {

      const collection = await Collection.findOne({ user: req.params.userId })
        .populate('cards.card', ['name', 'type', 'hp', 'attack'])
        .select('-__v');
      
      if (!collection) {
        return res.status(404).json({ msg: 'Colection not found' });
      }
      
      res.json(collection);


    } catch (err)
     {
      console.error(err.message);
      
      res.status(500).send('Server Error');
    }
  });



  router.post('/', async (req, res) => {
    const { user } = req.body;
    
    try {

      const userExists = await User.findById(user);
      if (!userExists) 
        {
        return res.status(404).json({ msg: 'USER NOT FOUND' });
      }
      
      let collection = await Collection.findOne({ user });
      
      const newCollection = new Collection({
        user,
        cards: []
      });
      
      collection = await newCollection.save();
      
      res.json(collection);
    } catch (err) 
    {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


  router.delete('/:id', async (req, res) => {
    try {
      const collection = await Collection.findById(req.params.id);
      
      if (!collection) {
        return res.status(404).json({ msg: 'Colection not found' });
      }
      
      await collection.remove();
      
      res.json({ msg: 'Collection removed' });
      
    } catch (err) {
      console.error(err.message);
     
      
      res.status(500).send('Server Error');
    }
  });
  

  module.exports = router;