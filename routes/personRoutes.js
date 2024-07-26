const express = require('express');
const router = express.Router();

const person = require('../models/person');
const MenuItem = require('../models/menu');

// post route to add a person
router.post('/person', async (req,res) => {
    try{
    const data = req.body //assuming the request body contains the person data
  
    // create new person documnet using the mongoose model
    const newPerson = new person(data);
  
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  
  }
  
  })
  
  // get method to get the person
  router.get('/person', async (req,res) => {
    try{
      const data = await person.find()
        console.log('data feched')
        res.status(200).json(data)
      
    }catch(err){
      console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
    }
  
  })

//   get person by type
  router.get('/person/:workType', async (req,res) => {
    try{
  
      const workType = req.params.workType;
      if(workType == 'chef' || workType == 'manager' || workType == 'waiter') {
  
        const response = await person.find({work: workType});
        console.log('response fetched');
        res.status(200).json(response);
      }else{
        res.status(404).json({error: 'Invalid work type'})
      }
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'})
    }
  })

//   update 
router.put('/person/:id', async (req,res) => {
    try{
        const personId = req.params.id; //extract the id from the url parameter
        const updatedPersonData = req.body; // updated data for the person

        const response = await person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, // return the updated document
            runValidators: true // run mongoose validation
        })
        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('data updated')
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Intrnal Server Error'})

    }
})

// delete
router.delete('/person/:id', async (req,res) => {
    try{
        const personId = req.params.id; // extract the person id from the url parameter
        // assuming you have a person model
        const response = await person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: 'Person not found'});

        }
        console.log('data delete');
        res.status(200).json({message: 'person deleted successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})




  module.exports = router;