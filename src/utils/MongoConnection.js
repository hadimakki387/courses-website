import { env } from "process";

// db.js
async function MongoConnection() {
  const mongoose = require('mongoose');
  try {
    const environment = 'local'
    const URI = environment==='local'?process.env.MONGO_URI_LOCAL:process.env.MONGO_URI
    console.log(URI)
    await mongoose.connect(URI);  

    console.log(`Connected successfully!`);
    
  } catch (error) {
    console.log(`MongoDB connection error: ${error}`);
  }
};


export default MongoConnection;
