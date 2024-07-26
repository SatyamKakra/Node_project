const express = require('express');
const router = express.Router();



const MenuItem = require('../models/menu');


// menu add
router.post('/menu', async (req,res) => {
    try{
      const data = req.body;
      const newMenu = new MenuItem(data);
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response)
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'})
    }
  })
  
  // menu get
  router.get('/menuGet', async (req,res) => {
    try{
      const data = await MenuItem.find();
      console.log('data feached');
      res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'})
    }
  })

  router.get('/menuGet/:tasteType', async (req,res) => {
    try{
        const tasteType = req.params.tasteType;
        if(tasteType == 'spicy' || tasteType == 'sour' || tasteType == 'sweet'){

            const response = await MenuItem.find({taste: tasteType});
            console.log('response feched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid taste type '})

        }

    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
  })

  // update
  router.put('/menu/:id', async (req,res) => {
    try{
      const menuId = req.params.id;
      const updatedMenuItem = req.body;

      const response = await MenuItem.findByIdAndUpdate(menuId, updatedMenuItem, {
        new: true,
        runValidators: true
      })
      if(!response){
        return res.status(404).json({error: 'Id not found'});
      }
      console.log('data updated')
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Eeror'});
    }
  })

  // delete
  router.delete('/menu/:id', async (req,res) => {
    try{
      const menuId = req.params.id;
      const response = await MenuItem.findByIdAndDelete(menuId);
      if(!response){
        return res.status(404).json({error: 'Id not found'});
      }
      console.log('data deleted');
      res.status(200).json('data deleted successfully');

    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});

    }
  })
  

  module.exports = router;