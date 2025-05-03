import Plan from "@/Models/PlansSchema";
import User from "@/Models/UserSchema";
import MongoConnection from "@/utils/MongoConnection";
import { NextResponse } from "next/server";

export async function GET(req: any, res: any) {
  await MongoConnection();
  //   const page = parseInt(req.nextUrl.searchParams.get("page"));
  //   const limit = parseInt(req.nextUrl.searchParams.get("limit"));
  //   const skip = (page - 1) * limit;
  const users = await User.find().lean().sort({ created_at: -1 });
  // .skip(skip)
  // .limit(limit);
  let usersWithPlan: any[] = [];
  const userPromises = users.map(async (user) => {
    let newUser = user;
    const plan = await Plan.findById(user.plan).lean();
    newUser.plan = plan;
    return newUser;
  });
  usersWithPlan = await Promise.all(userPromises);
  return NextResponse.json(usersWithPlan);
}
