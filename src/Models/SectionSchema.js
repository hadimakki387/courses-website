import {Schema,model,models} from "mongoose";

const sectionSchema = new Schema({
    title: String,
    courseID: String,
    isVIP:Boolean
  });

  const Section =models.Section || model("Section", sectionSchema);

  export default Section