import {Schema,model,models} from "mongoose";

const sectionSchema = new Schema({
    id: String,
    title: String,
    courseID: String,
  });

  const Section = model("Section", sectionSchema);

  export default Section