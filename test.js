console.log("server file is running");

// const { json } = require("express");

// >>>>>> callback function first way <<<<<<<<<<

// function callback(){
//     console.log("callback function");
// }

// const add = function(a, b, callback){
// var result = a+b;
// console.log(result);
// callback();
// }

// add(3,4,callback);


// >>>>>>>>>>> callback function second way <<<<<<<<<<<<<<

// const add = function(a,b, satyam){
//     let result = a*b;
//     console.log(result);
//     satyam();
// }

// add(3,3,function(){
//     console.log("complete");
// })


// >>>>>>>>>>>>>> callback function third way <<<<<<<<<<<<<<
// same process in arrow function

// const add = function(a,b, satyam){
//     let result = a*b;
//     console.log(result);
//     satyam();
// }

// add(3,3, () => console.log("complete"));

// >>>>>>> file system (fs) and operating system (os) <<<<<<<<<<
// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt', 'Hi satyam ' + '' + '\n', () =>{    // \n for new line
// console.log('file is created');
// })


// const notes = require('./notes');
// var _ = require('lodash');

// console.log('server file available');

// var age = notes.age;
// var addNumber = notes.addNumber(age+2, 3)
// console.log(age);
// console.log(addNumber);


// // for lodash

// var data = ['person', 'satyam', '2', '2', 'satyam'];
// var filter  = _.uniq(data);
// console.log(filter);




// >>>>>>> json <<<<<<<<<


// const jsonString = '{"name" : "satyam", "age": 24}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);

// const jsonObjectConvert = {"name": "Satyam kakra", "age" : "24"};
// const jsonStringConvert = JSON.stringify(jsonObjectConvert);
// console.log(jsonStringConvert);




// >>>>>>>>>>>>>>>>>>>>>> create a server <<<<<<<<<<<<<<<<<<<
// const mongoose = require('mongoose')
const express = require('express');
const app = express()

app.get('/', function (req, res) {
  res.send('Hello, welcome to my server')
})

app.get('/hello', function (req, res) {
  res.send('Hello, everyone')
})

app.get('/hi',  (req, res) => {
    var info = {
        name : 'satyam',
        age : 24,
        skill : 'Node'
    }
  res.send(info)
})





// if you want to show server is running or not?
app.listen(3000, () =>{
    console.log('app is running on 3000')
})