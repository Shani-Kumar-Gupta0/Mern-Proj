const express = require('express');
const multer = require('multer');
const studentController = require('../controllers/StudentController')
const router = express.Router();

const upload = multer({
    storage : multer.diskStorage({}),
    limits : {fileSize : 10*1024*1024 }
});


router.get('/addstudent',(req,res)=>{
    res.render('addstudent');
});

router.get('/list-student', (req, res)=> {
    studentController.studentList(req,res);
});

router.get('/delete/student/:_id', (req, res)=> {
    studentController.deleteStudent(req, res);
});

router.get('/edit/student/page/:_id', (req, res)=> {
    studentController.editStudent(req, res);
});

router.post('/add/student', upload.single('studentImage'), (req,res)=>{
    studentController.addStudent(req,res);
});

router.post('/edit/student/:_id', (req, res)=> {
    studentController.saveEditStudent(req, res);
});









module.exports = router;
