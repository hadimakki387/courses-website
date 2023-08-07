// db.js
async function MongoConnection() {
  const mongoose = require('mongoose');
  try {

    await mongoose.connect('mongodb+srv://hmakki387:Idlsisfs7@cluster0.pidt6ya.mongodb.net/course-website', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`Connected to ${databaseType} successfully!`);
    
  } catch (error) {
    console.log(`MongoDB connection error: ${error}`);
  }
};


export default MongoConnection;
