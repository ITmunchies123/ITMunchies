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


 app.get('/students', (req, res, next) => {
     //call mongoose method find (MongoDB db.Students.find())
  Student.find() 
  //if data is returned, send data as a response 
  .then(data => res.status(200).json(data))
  //if error, send internal server error
  .catch(err => {
  console.log('Error: ${err}');
  res.status(500).json(err);
});


//web page port 8000 for DRIVER
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
})


 //commented this out for step 1 page 7
  //  const students = [ 
  //    { "id" : "1", "firstName" : "John" , "lastName" : "Dow" }, 
  //    { "id" : "2", "firstName" : "Ann" , "lastName" : "Smith" }, 
  //    { "id" : "3", "firstName" : "Joan" , "lastName" : "Doe" }];
 //send the array as the response 
   // res.json(students);
 
 });

//:id is a dynamic parameter that will be extracted from the URL
// app.delete("/students/:id", (req, res, next) => {
//   Student.deleteOne({ _id: req.params.id }).then(result => {
//     console.log(result);
//     res.status(200).json("Deleted!");
//   });

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/driver/:id", (req, res, next) => {
  driverSchema.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});


//});


 // serve incoming post requests to /students
app.post('/students', (req, res, next) => {

  //commented this section out and added below to write to DB
  // const student = req.body;
  // console.log(student.firstName + " " + student.lastName);
  // //sent an acknowledgment back to caller 
  // res.status(201).json('Post successful');


  //create a new student variable and save request’s fields 
  const student = new Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });
  //send the document to the database 
  student.save()
    //in case of success
    .then(() => { console.log('Success');})
    //if error
    .catch(err => {console.log('Error:' + err);});

});


 

//COMMENTED THIS SECTION OUT FOR Lab10 progress. This is request for the driver portion. 
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
    id: Math.floor(Math.random()*999999999),
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
 

 


//to use this middleware in other parts of the application
module.exports=app;
