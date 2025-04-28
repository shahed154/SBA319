const express = require('express');
const router = express.Router()
const Card = require('../models/cardModel');

router.get('/:id', async (req, res) => 

    {
    try 
    {
      const card = await Card.findById(req.params.id).select('-__v')
      
      res.json(card);
    } 
    catch (err) 
    {
      console.error(err.message);
      
      res.status(500).send('Server Error');
    }
  });


  router.post('/', async (req, res) => {
    const { name, type, hp, attack } = req.body
    
    try
     {
      
      const newCard = new Card(
        {
        name,
        type,
        hp,
        attack

      });
      
      const card = await newCard.save();
      
      res.json(card);

    } catch (error)
     {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  });


  router.put('/:id', async (req, res) => {
    const { name, type, hp, attack } = req.body
    
    try {
      let card = await Card.findById(req.params.id);
      
      if (!card) {
        return res.status(404).json({ msg: 'Card not found' })
      }
      
      // Update card
      if (name) card.name = name;
      if (type) card.type = type;
      if (hp) card.hp = hp;
      if (attack) card.attack = attack;
      
      await card.save();
      
      res.json(card);
    } catch (err) {
      console.error(err.message);
      
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Card not found' })
      }
      
      res.status(500).send('Server Error');
    }
  });


  module.exports = router;