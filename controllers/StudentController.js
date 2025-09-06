const Student = require('../models/Student');
const cloudinary = require('cloudinary').v2;
const bcrypt = require('bcrypt');

async function addStudent (req, res) {
    try {
        console.log(req.body, 'req.body');
        console.log(" file = ", req.file );
        let result;
        if (req.file) {
            cloudinary.config({
                cloud_name : 'df2bgrbve',
                api_key : '539842539897937',
                api_secret : 'DUmVUPl0QkJpkwo23qkfQKDy77k',


            });
            result = await cloudinary.uploader.upload(req.file.path);
            console.log(result);
        }

        let student = new Student(req.body);
        if (req.file) {
        student.studentImage = result.secure_url; 
        
        }
        await student.save();
        console.log("Database updated...");
        
        // res.render('studentlist');
        let students = await Student.find({});
        // res.render('studentlist', {
        //     students : students
        // });
        res.render('studentlist', { students : students });
        console.log("Student data saved successfully...")
        
    } catch (err) {
        console.log(err)
    }
}

async function studentList(req, res) {
    try {
       
        let students = await Student.find({});
        res.render('studentlist', { students : students });
        
    } catch (error) {
        console.log(error);
        
    }
}
async function deleteStudent(req, res) {
    try {
       
        let studentId = req.params._id;
        console.log("Student id =", studentId);    
        await Student.deleteOne({_id : studentId});
        let students = await Student.find({});
        res.render('welcomeAdmin',{
            students : students
        });
        
    } catch (error) {
        console.log(error);
        
    }
}
async function editStudent(req, res) {
    try {
       
        let studentId = req.params._id;
        let student = await Student.findOne({_id : studentId});
        console.log("Student id =", studentId); 
        if (student) {
            res.render('studenteditpage',{
                student:student
            })
        } else {
            console.log(err);
            
        }   
        
    } catch (error) {
        console.log(error);
        
    }
}
async function saveEditStudent(req, res) {
    try {
       
        let studentId = req.params._id;
        let student = await Student.findOne({_id : studentId});
        console.log("Edit Student id =", studentId); 
        
        if (student) {
        //    console.log(req.body);
        student.rollNo = req.body.rollNo;
        student.studentName = req.body.studentName;
        student.fatherName = req.body.fatherName;
        student.course = req.body.course;
        student.branch = req.body.branch;
        student.yearOfAddmission = req.body.yearOfAddmission;
        await student.save();
        console.log("Student Updated Successfully...", req.body);

        let students = await Student.find({});
        res.render('welcomeAdmin', { students : students });
           
        } else {
            console.log(err);
            
        }   
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {
    addStudent,
    studentList,
    deleteStudent,
    editStudent,
    saveEditStudent,
}