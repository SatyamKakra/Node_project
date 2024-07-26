console.log("server file is running");
const express = require('express');
const db = require('./db');

const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json());




app.get('/', function (req, res) {
  res.send('Hello, welcome to my server')
})


// import the router file
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuItemRoutes');

// use the routers
app.use('/', personRoutes);
app.use('/', menuRoutes);

// if you want to show server is running or not?
app.listen(3000, () =>{
    console.log('app is running on 3000')
})