import { Schema, model, models } from "mongoose";

const plansSchema = new Schema({
  name:String,
  pricing:Number
});

const Plan = models.Plan || model("Plan", plansSchema);

export default Plan;
