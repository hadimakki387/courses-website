import { Schema, model, models } from "mongoose";

const plansSchema = new Schema({
  name:String,
  pricing:Number,
  duration:Number
  
});

const Plan = models.Plan || model("Plan", plansSchema);

export default Plan;
