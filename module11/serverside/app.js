const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const mongoose = require('mongoose');
//specify where to find the schema
const Student = require('./models/student')
// connect and display the status 

var driverSchema = require('../driverSchema')

mongoose.connect('mongodb+srv://it6203group6:ITmunchies1!@group6-w6hxp.mongodb.net/test?retryWrites=true&w=majority',{ useUnifiedTopology:true,useNewUrlParser:true },(err) => {
if(err){
console.log(err)
   }
else{
console.log("Connected to database")
   }
})

//mongoose.connect('mongodb://localhost:27017/IT6203', { useNewUrlParser: true })
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
 });


app.get('/driver', (req, res, next) => {
  //call mongoose method find (MongoDB db.Students.find())
driverSchema.find() 
//if data is returned, send data as a response 
.then(data => res.status(200).json(data))
//if error, send internal server error
.catch(err => {
console.log('Error: ${err}');
res.status(500).json(err);
})
});

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/driver/:id", (req, res, next) => {
  driverSchema.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});


// // serve incoming post requests to /driver
app.post('/driver', (req, res, next) => {
          console.log("This is all the request data \n"+
        req.body.firstName+
        req.body.lastName+
        req.body.nickname+
        req.body.zip+
        req.body.brand+
        req.body.model+
        req.body.color
        )
          const drivers = new driverSchema({
            id: Math.floor(Math.random()*99999),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            nickname:req.body.nickname,
            zip:req.body.zip,
            brand:req.body.brand,
            model:req.body.model,
            color:req.body.color
          }
          );


          drivers.save((err,result) => {
            if(err){
              console.log(err)
            }
            else{
              console.log(result)
            }
          })
          const driver = req.body;
          console.log(driver.firstName 
            + " " + driver.lastName 
            + " " + driver.nickname 
            + " " + driver.zip 
            + " " + driver.brand 
            + " " + driver.model
            + " " + driver.color);
          //sent an acknowledgment back to caller 
          res.status(201).json('Post successful');
 });
 
  // serve incoming put requests to /drivers
app.put('/driver/:id', (req, res, next) => {
        console.log("id: " + req.params.id)
        // check that the parameter id is valid 
        if (mongoose.Types.ObjectId.isValid(req.params.id)) {
          //find a document and set new first and last names
          driverSchema.findOneAndUpdate({_id: req.params.id},
            {$set:{
              firstName : req.body.firstName,
              lastName : req.body.lastName,
              nickname: req.body.nickname,
              zip: req.body.zip,
              brand: req.body.brand,
              model: req.body.model,
              color: req.body.color}
            },{new:true}) 
          .then((driverSchema) => {
              if (driverSchema) { //what was updated
                console.log(driverSchema);
              } else {
                console.log("no data exist for this id");
              }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("please provide correct id");
      }
        
        }
  ); 


//to use this middleware in other parts of the application
module.exports=app;
