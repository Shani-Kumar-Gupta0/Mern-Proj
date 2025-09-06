const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/ejsstudentproject')
        console.log("Database connection successfully... ");
        
        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports = connect;