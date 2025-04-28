// const PORT = process.env.PORT  <--- WHY DOES THIS NOT WORK?? im so confused AAAAH
const mongoDB = process.env.MONGO_URI
const mongoose = require("mongoose")
const connectDB = require('./db');
// const PORT = 3000;
const PORT = process.env.PORT // IT WORKS WHEN ITS HERE THO IM ASSUMING ITS CUZ OF THE OTHER CONNECTIONS IDK 


require('dotenv').config();
const express = require('express')

const app = express();


app.use(express.json({ extended: false }));


// mongoose.connect(mongoDB)
// .then(() => {
//   console.log(`connected to database`)
// })
// .catch((err) => 
// console.log(`connection to db failed: ${err}`))
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
  });

//
app.get('/', (req, res) => {
  res.send('Pokemon style card collector running');
});



app.use('/users', require('./routes/userRoute'))
app.use('/cards', require('./routes/cardRoute'))
app.use('/collections', require('./routes/collectionRoute'))



app.listen(PORT, () => 
    console.log(`Server started on port ${PORT}`));