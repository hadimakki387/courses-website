import User from "@/Models/UserSchema";
import MongoConnection from "@/utils/MongoConnection";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import Plan from "@/Models/PlansSchema";
dayjs.extend(utc);

function calculateDaysPassedSinceDate(dateString: string) {
  const inputDate = dayjs(dateString);
  const currentDate = dayjs();
  const daysPassed = currentDate.diff(inputDate, "day");
  return daysPassed;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  MongoConnection();

  const parts = req.url.split("/");
  const id = parts[parts.length - 1];

  try {
    const user = await User.findOne({ _id: id });

    //check plan
    if (user.plan) {
      const plan = await Plan.findOne({ _id: user.plan });
      const daysPassed = calculateDaysPassedSinceDate(user.subscribed_at);
      if (plan.duration && daysPassed > plan?.duration) {
        await User.findOneAndUpdate({ _id: user.plan }, { plan: "" });
      }
    }

    return new Response(JSON.stringify(user));
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify(e));
  }
}
