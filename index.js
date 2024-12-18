const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

  const express = require("exprese")
const { default: mongoose } = require("mongoose")


  mongoose.connect('mongodb+srv://gadirfmbp216:<db_password>@cluster0.5mtgt.mongodb.net/')
  .then(()=>{
    console.log('Connected to MongoDB')
  })
  .catch((error)=>{
    console.error('error Connecting to MongoDB:', error);
  });

  app.get('/', (req, res) => {
    const user =await. User.body
 
   res.json(user)
   
  })