// db.js

async function MongoConnection(){
  const mongoose = require('mongoose'); 
  mongoose.connect('mongodb://127.0.0.1:27017/course-website');
}


export default MongoConnection;