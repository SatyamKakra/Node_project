console.log("server file is running");
const express = require('express');
const db = require('./db');
require('dotenv').config();
const passport = require('./auth');



const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// Middleware function
const logRequest = (req,res,next) => {
  console.log(`[${new Date().toLocaleString()}] Request made to : ${req.originalUrl}`);
  next() // move on to the next phase
}

app.use(logRequest);


app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local', {session: false});

app.get('/',  function (req, res) {
  res.send('Hello, welcome to my server')
})


// import the router file
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuItemRoutes');

// use the routers
app.use('/', personRoutes);
app.use('/', menuRoutes);



// if you want to show server is running or not?
app.listen(PORT, () =>{
    console.log('app is running on 3000')
})