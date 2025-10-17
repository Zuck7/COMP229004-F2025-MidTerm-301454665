require('dotenv').config()
const mongoose = require('mongoose');
let ConnectionString = "mongodb+srv://admin_db_user:f5tEe98wdHxZDSNY@cluster003.5tnqo7i.mongodb.net/midterm?retryWrites=true&w=majority"

module.exports = function(){

    mongoose.connect(ConnectionString);

    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', ()=>{
        console.log('====> Connected to MongoDB.');
    })

    return mongodb;
}