const PORT = process.env.PORT
const mongoDB = process.env.MONGO_URI
const mongoose = require("mongoose")
const connectDB = require('./config/db');

const express = require('express');

const app = express();

app.use(express.json({ extended: false }));

mongoose.connect(mongoDB)
.then(()=>
{
  console.log(`connected to database`)
})
.catch(() =>
console.log(`connection to db failed`))


app.use('./users', require('./routes/userRoute'));
app.use('./cards', require('./routes/cardRoute'));
app.use('./collections', require('./routes/collectionRoute'));


app.get('/', (req, res) => {
    res.send('Pokemon style card collector running');
  });


  app.listen(PORT, () => 
    console.log(`Server started on port ${PORT}`));

