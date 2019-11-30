const mongoose = require('mongoose');


var foodSchema = mongoose.Schema({
    'id':{type:String,required:true},
    'place':{type:String,required:true}
})

module.exports = mongoose.model('FoodSchema',foodSchema)