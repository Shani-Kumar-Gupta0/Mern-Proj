const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamps');
const userSchema = new Schema({

    firstName : {type : String, required : true},
    lastName : {type : String, },
    email : {type : String, required : true}, 
    password : {type : String, required : true},
    userType : {type : String,enum: ["Admin", "Student"], default : 'Student'},
    createdAt : Date,
    updatedAt : Date


});
userSchema.plugin(timestamps,{index : true})

module.exports = mongoose.model('User', userSchema);