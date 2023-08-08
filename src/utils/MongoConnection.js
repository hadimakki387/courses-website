// db.js
async function MongoConnection() {
  const mongoose = require('mongoose');
  try {

    await mongoose.connect('mongodb+srv://HadiMakki:Idlsisfs7@cluster0.m1wv8gg.mongodb.net/courses', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`Connected successfully!`);
    
  } catch (error) {
    console.log(`MongoDB connection error: ${error}`);
  }
};


export default MongoConnection;
