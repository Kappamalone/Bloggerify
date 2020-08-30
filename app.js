const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const blog = require('./models/blog');

const app = express();
const port = 3000;

//connect to mongodb, password stored in local js file
const pass = require('./credentials.js').pass
let db = `mongodb+srv://Kappamalone:${pass}@kappamalone-cluster.u10jv.mongodb.net/diff?retryWrites=true&w=majority`;

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.log(err));

/*
const blogEntry = new Blog({
  title: 'hello world',
  date: 'today',
  content: 'sup broskis'
})

blogEntry
  .save()
  .then(item => console.log(item))
  .catch(err => console.log(err));
*/

app.use(express.static('public'))
app.use(bodyParser.json())

//Simple routing
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'/index.html'))
})

app.get('/getBlogs',(req,res) => {
  const Blog = require('./models/blog')
  let blogData; 

  function blogPromise(){
    return new Promise((resolve,reject) => {
      Blog.find()
        .sort({date: -1})
        .then(data => {
          resolve(data)
        })
    })
  }

  //get blog data
  async function getBlog(){
    try {
      blogData = await blogPromise()
      console.log(blogData)
    } catch (err){
      console.log('damn')
      console.log(err)
    }
  }

  getBlog()
    .then(() => {
      //Send the blogs to the webpage
      res.send(JSON.stringify(blogData))
    })
  
  
})

app.listen(port,() => {
    console.log('Listening at port ' + port)
})