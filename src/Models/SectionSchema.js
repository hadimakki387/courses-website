import {Schema,model,models} from "mongoose";

const sectionSchema = new Schema({
    id: String,
    title: String,
    courseID: { type: Schema.Types.ObjectId, ref: "Course" },
  });

  const Section = model("Section", sectionSchema);

  export default Section