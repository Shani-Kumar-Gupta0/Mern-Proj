const User = require('../models/User');
const bcrypt = require('bcrypt');
const Student = require('../models/Student');

async function addUser(req, res) {
    try {
        console.log(req.body, 'req.body');
        let user = new User(req.body);
        let encryptedPassword =  bcrypt.hashSync(req.body.password, 10);
        console.log(encryptedPassword, 'encryptedPassword')
        user.password = encryptedPassword;
        await user.save();
        res.redirect('/');
        console.log("data saved successfully...")
    } catch (err) {
        console.log(err)
    }
}

async function doLogin(req,res){
    try{
      console.log(req.body,'req.body')
      let user = await User.findOne({email:req.body.email})
      console.log(user)
      if(user){
           let validPassword = await bcrypt.compare(req.body.password, user.password)
           if(validPassword){
            let students = await Student.find({});
            
            res.render('welcomeAdmin', { students : students })

           }else{
            res.end("invalid login/Password...")
           }
      }else{
        console.log("no user found, please try login instead")
      }
    }catch(err){
        console.log(err)
    }
}



module.exports = {
    addUser,
    doLogin
}