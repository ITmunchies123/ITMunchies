var mongoose = require('mongoose')


var usersSchema = mongoose.Schema({
    id:{type:Number,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true},
    fName:{type:String,required:true},
    lName:{type:String,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    zip:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true}

}
)

module.exports = mongoose.model('Users',usersSchema)