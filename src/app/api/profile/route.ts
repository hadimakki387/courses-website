import Plan from "../../../Models/PlansSchema";
import MongoConnection from "@/utils/MongoConnection";
import Payment from "../../../Models/PaymentsSchema";
import Video from "../../../Models/VideoSchema";
import User from "@/Models/UserSchema";
import * as bcrypt from "bcrypt";

export async function GET(req: any, res: any) {
  await MongoConnection();
  const plans = await Plan.find();
  const videos = await Video.find();
  return new Response(JSON.stringify({ plans: plans, videos: videos }));
}

export async function POST(req: any, res: any) {
  const body = await req.json();

  await MongoConnection();

  const payerID = body.data.payerID;
  const user = await User.findById({ _id: payerID });
  if (user) {
    const passwordsMatch = await bcrypt.compare(
      body.data.password,
      user.password
    );
    if (passwordsMatch) {
      try {
        const payment = new Payment({
          imgURL: body.data.billingImg.imgURL,
          imgID: body.data.billingImg.imgID,
          planType: body.data.plan,
          payerID: body.data.payerID,
        });
        payment.save();
        return new Response(
          JSON.stringify({ message: "Payment Saved", status: 200 })
        );
      } catch (err) {
        if (err) {
          console.log(err);
          return new Response(JSON.stringify({ message: err, status: 500 }));
        }
      }
    } else {
      return new Response(
        JSON.stringify({ message: "Incorrect password", status: 401 }),
        {
          status: 401,
        }
      );
    }
  }
}
