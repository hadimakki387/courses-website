import { Schema, model, models } from "mongoose";

const videoSchema = new Schema({
  title: String,
  url: String,
  duration: {
    mins: Number,
    secs: Number,
  },
  sectionID: String,
  videoId: Number,
  isFree:{type:Boolean , default:false}
});

const Video = models.Video || model("Video", videoSchema);

export default Video;
