import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  image: String,
  created_at: { type: Date, default: Date.now },
  watchedVideos: [String],
  plan:String,
  subscribed_at:Date,
  isAdmin:{type:Boolean,default:false},
});

const User = models.User || model("User", userSchema);

export default User;
