import { Schema, model, models } from "mongoose";

const courseSchema = new Schema({
  id: String,
  name: String,
});

const Course = models.Course || model("Course", courseSchema);

export default Course;
