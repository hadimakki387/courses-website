import User from "@/Models/UserSchema";
import MongoConnection from "@/utils/MongoConnection";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  MongoConnection()

  const parts = req.url.split("/");
  const id = parts[parts.length - 1];

  try {
    const user = await User.findOne({ _id: id });
    return new Response(JSON.stringify(user));
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify(e));
  }
}
