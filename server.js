const PORT = process.env.PORT


const express = require('express');

const app = express();

app.use(express.json({ extended: false }));


app.use('/api/users', require('./routes/api/users'));
app.use('/api/cards', require('./routes/api/cards'));
app.use('/api/collections', require('./routes/api/collections'));


app.get('/', (req, res) => {
    res.send('Pokemon style card collector running');
  });


  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));