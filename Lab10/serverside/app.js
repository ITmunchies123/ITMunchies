const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
var mongoose = require('mongoose')
var userSchema = require('../serverside/db/usersSchema')
mongoose.connect('mongodb+srv://it6203group6:ITmunchies1!@group6-w6hxp.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology:true, useNewUrlParser:true},(err) =>{
  if(err){
    console.log(err)
  }
  else{
    console.log('We are connected to Atlas')
  }
})


// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {
   console.log('This line is always called');
   res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
   res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
   next();
});
app.get('/accountcreation', (req, res, next) => {
userSchema.find((err,result) => {
  if(err){
    console.log(err)
  }
  else{
    console.log(result)
    res.status(200).json(result);
  }
})
//send the array as the response
   
});

app.delete("/accounts/:id", (req, res, next) => {
  userSchema.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// serve incoming post requests to /students
app.post('/accountcreation', (req, res, next) => {
  console.log(req.body)
  var users = new userSchema({
    id:Math.floor(Math.random() * 9999999999),
    username:req.body.username,
    password:req.body.password,
    fName:req.body.fname,
    lName:req.body.lname,
    address:req.body.address,
    city:req.body.city,
    state:req.body.state,
    zip:req.body.zip,
    email:req.body.email,
    phone:req.body.phone 
  });
  users.save((err,result) => {
    if(err){
      console.log(err)
    }
    else{
      console.log(result)
    }
  })
  const accountcreation = req.body;
  console.log(accountcreation.username 
    + " " + accountcreation.password
    + " " + accountcreation.fname
    + " " + accountcreation.lname
    + " " + accountcreation.address
    + " " + accountcreation.city
    + " " + accountcreation.state
    + " " + accountcreation.zip
    + " " + accountcreation.email
    + " " + accountcreation.phone
    );
  //sent an acknowledgment back to caller 
  res.status(201).json('Post successful');
  });

//to use this middleware in other parts of the application
module.exports=app;
