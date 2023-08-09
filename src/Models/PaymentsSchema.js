import { Schema, model, models } from "mongoose";

const paymentsSchema = new Schema({
  imgURL: String,
  imgID: String,

  payed_at: { type: Date, default: Date.now },
  planType: String,
  payerID: String,
});

const Payment = models.Payment || model("Payment", paymentsSchema);

export default Payment;
