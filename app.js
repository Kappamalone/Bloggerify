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

app.listen(port,() => {
    console.log('Listening at port ' + port)
})