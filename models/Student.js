const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamps');
const studentSchema = new Schema({

    rollNo : {type : String, required : true},
    studentName : {type : String, },
    fatherName : {type : String, required : true},
    motherName : {type : String},
    course : {type : String, required : true},
    branch : {type : String, },
    yearOfAddmission : {type : String, },
    studentImage :{type : String},
    createdAt : Date,
    updatedAt : Date        

});
studentSchema.plugin(timestamps,{index : true})

module.exports = mongoose.model('Student', studentSchema);