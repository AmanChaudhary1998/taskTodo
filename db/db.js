const mongoose = require('mongoose');
const config = require('config');
const db = "mongodb+srv://aman001:aman28@mycluster.o3hq5.mongodb.net/todoTask?retryWrites=true&w=majority";

const conncetDB = async () =>{
    try {
        await mongoose.connect(db,{
            useUnifiedTopology:true
        });

        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error(error.message)
        // Exit the process with failure

        process.exit(1);
    }
}

module.exports = conncetDB;