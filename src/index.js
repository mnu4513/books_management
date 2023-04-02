const express = require('express')
const mongoose= require('mongoose')
const route = require('./route/route')
const app = express()

const cors = require('cors');
app.use(cors());

mongoose.set('strictQuery', true)

app.use(express.json())
mongoose.connect('mongodb+srv://mnu4513:1234qwer@firstcluster.daae6aq.mongodb.net/book-management').then(()=>{console.log("MONGO db is connect")}).catch((err)=>{console.log(err.message)})

app.use('/',route);

app.listen(3000 , (err)=>{
  if(err)return console.log(err.message);
  console.log("express is running :" ,3000);
});