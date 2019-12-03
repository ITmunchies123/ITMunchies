const mongoose = require('mongoose');
 
var driverSchema = mongoose.Schema({
    'id':{type:String,required:true},
    'firstName':{type:String,required:true},
    'lastName':{type:String,required:true},
    'nickname':{type:String,required:true},
    'zip':{type:String,required:true},
    'brand':{type:String,required:true},
    'model':{type:String,required:true},
    'color':{type:String,required:true}
})
 
module.exports = mongoose.model('DriverSchema',driverSchema)