const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const FoodSchema = require('./db/FoodSchema')
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://it6203group6:ITmunchies1!@group6-w6hxp.mongodb.net/test?retryWrites=true&w=majority',{ useUnifiedTopology: true,useNewUrlParser: true },(err) => {
   if(err){
      console.log(err)
   }
   else{
      console.log("Connected to database")
   }
})
var food;
// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {
   console.log('This line is always called');
   res.setHeader('Access-Control-Allow-Origin', '*'); 
//can connect from any host
   res.setHeader('Access-Control-Allow-Methods', 
'GET, POST,PUT,DELETE,OPTIONS'
); 
//allowable methods
   res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
   next();
});
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.get('/find',(req, res, next) => {
  FoodSchema.find((err,result) => {
     if(err){
        console.log(err)
     }
     else{
        console.log(result)
        res.json(result);
     }
  })
//send the array as the response 
});

app.post('/save', (req, res, next) => {
    food = new FoodSchema({
       id:Math.floor(Math.random()*9999999),
       place: req.body.save
    })
    food.save((err,result) => {
       if(err){
          console.log(err)
       }
       else{
          console.log(result)
       }
    })
  //sent an acknowledgment back to caller 
    res.status(201).json('Post successful');
  });
app.delete('/delete/:id', (req, res) => {
FoodSchema.deleteOne({_id:req.params.id},(err,result) => {
   console.log(req.params.id )
   if(err){
      console.log(err)
   }
   else{
      console.log(result)
   }
   
})
});
app.put('/updateFoods/:id',(req,res) => {
   FoodSchema.findOneAndUpdate({
      _id:req.params.id
   },
   {
      $set:{place:req.body.save}
   },(err,result) => {
      if(err){
         console.log(err)
      }
      else{
         console.log(result)
      }
   })
})
module.exports=app;