const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

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