import Plan from "../../../Models/PlansSchema";
import MongoConnection from "@/utils/MongoConnection";
import Payment from "../../../Models/PaymentsSchema";
import Video from "../../../Models/VideoSchema";
import User from "@/Models/UserSchema";

export async function GET(req: any, res: any) {
  await MongoConnection();

  const plans = await Plan.find();
  const videos = await Video.find();

  return new Response(JSON.stringify({ plans: plans, videos: videos }));
}

export async function POST(req: any, res: any) {
  const body = await req.json();
  console.log(body);
  await MongoConnection();

  if(body.toDo==="sendPayment"){
   try {
    const payment = new Payment({
      imgURL: body.data.billingImg.imgURL,
      imgID: body.data.billingImg.imgID,
      planType: body.data.plan,
      payerID: body.data.payerID,
    });
    payment.save();
    return new Response(JSON.stringify("saved"));
  } catch (err) {
    if (err) {
      console.log(err);
      return new Response(JSON.stringify("error"));
    }
  } 
  }

  if(body.toDo==="getUser"){
   console.log(body)
    const user = await User.findById(body.id)
    console.log(user)
    return new Response(JSON.stringify(user))
  }
  
}
