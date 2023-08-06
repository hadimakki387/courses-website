import {Schema,model,models} from "mongoose";

const videoSchema = new Schema({
  title: String,
  url: String,
  duration: {
    mins: Number,
    secs: Number,
  },
  sectionID: { type: Schema.Types.ObjectId, ref: "Section" },
});
const Video = models.Video || model("Video", videoSchema);

export default Video