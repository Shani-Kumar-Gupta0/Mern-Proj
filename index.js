const express = require('express');
const path = require('path');
const connect = require('./connection')
const student = require('./routes/student');
const user = require('./routes/user');
const makeAdmin = require('./makeadmin');
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.use(user);
app.use(student);
connect(); 
makeAdmin();

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
// app.use(express.static('public'));


app.listen(3000, (err) => {
    if (err) {
        console.log("Error !!");
        
    } else {
        console.log("Server is running...");

    }
});