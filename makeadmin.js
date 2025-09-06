const User = require('./models/User');
const bcrypt = require('bcrypt');

async function makeAdmin() {
    try {
        let user = await User.findOne({email : "spsunnyyt09@gmail.com"});

        if (user) {
            console.log("User Updated...");
            
        }else{
            let user = new User();
            user.firstName = "Sunny";
            user.lastName = "Gupta";
            user.email = "spsunnyyt09@gmail.com";
            let encryptedPassword = bcrypt.hashSync("123456", 10);
            user.password = encryptedPassword;
            user.userType = "Admin";
            await user.save();
            console.log("Admin Saved Successfully...");
        }
        
    } catch (error) {
        console.log(error);
        
    }

}

module.exports = makeAdmin;