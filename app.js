const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express();
const port = 3000;

//connect to mongodb, password stored in local js file
const pass = require('./credentials.js').pass
let mongoDB = `mongodb+srv://Kappamalone:${pass}@kappamalone-cluster.u10jv.mongodb.net/bloggerify?retryWrites=true&w=majority`;
mongoose.connect(mongoDB);
let db = mongoose.connection;

mongoose.insert


app.use(express.static('public'))
app.use(bodyParser.json())

//Simple routing
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'/index.html'))
})

app.get('/getBlogs',(req,res) => {
  //Send the blogs to the webpage
  res.send(JSON.stringify({
    name: 'bob'
  }))
})

app.listen(port,() => {
    console.log('Listening at port ' + port)
})