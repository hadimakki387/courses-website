import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  id: String,
  name: String,
  email: String,
  password: String,
  image: String,
  created_at: { type: Date, default: Date.now },
  watchedVideos: [String],
  isVIP: Boolean,
});

const User = models.User || model("User", userSchema);

export default User;