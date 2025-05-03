import Plan from "@/Models/PlansSchema";
import User from "@/Models/UserSchema";
import { NextResponse } from "next/server";

export async function GET(req: any, res: any) {
  const plans = await Plan.find().lean();
  return NextResponse.json(plans);
}

export async function POST(req: any, res: any) {
  const { planId, userId } = await req.json();
  const plan = await Plan.findById(planId).lean();
  if (!plan) {
    return NextResponse.json({ error: "Plan not found" }, { status: 404 });
  }
  const user = await User.findById(userId).lean();
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  await User.findByIdAndUpdate(userId, { plan: planId });

  return NextResponse.json({ message: "Plan updated" });
}
