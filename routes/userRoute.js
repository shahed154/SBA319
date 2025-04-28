const express = require('express');
const router = express.Router();
const User = require('../models/userModel')



router.get('/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id).select('-__v');
      
      if (!user) {
        return res.status(404).json({ msg: 'USER NOT FOUND' })
      }
      
      res.json(user);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }

  });



  router.post('/', async (req, res) => {
    const { username, email } = req.body;
    
    try {
      // Create new user
      const user = new User(
        {
        username,
        email
      });
      
      await user.save()
      
      res.json(user);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });



  router.put('/:id', async (req, res) => {
    const { username, email } = req.body;
    
    try {
      let user = await User.findById(req.params.id);
      
      if (!user) {
        return res.status(404).json({ msg: 'USER NOT FOUND' })
      }
      if (username) user.username = username;
      if (email) user.email = email;
      
      await user.save();
      
      res.json(user);
    } catch (err) {
      console.error(err.message);
      
   
      res.status(500).send('Server Error');
    }
  });



  router.delete('/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      
      if (!user) {
        return res.status(404).json({ msg: 'USER NOT FOUND' })
      }


      await user.deleteOne();
      
      res.json({ msg: 'User removed' });
    } catch (err) {
      console.error(err.message);
      
    
      res.status(500).send('Server Error');
    }
  });

module.exports = router;