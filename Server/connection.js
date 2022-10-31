const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://krisha:Arsen05@cluster0.1hs1lan.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
