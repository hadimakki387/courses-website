import User from "@/Models/UserSchema";
import MongoConnection from "@/utils/MongoConnection";
import * as bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { UserInterface } from "@/interfaces";
import moment from "moment"

export async function POST(req: Request, res: Response) {
  MongoConnection();
  const body = await req.json();

  const user: UserInterface | null = await User.findOne({
    email: body.email,
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {

    const token = jwt.sign(
      { email: user.email, id: user.id, name: user.name },
      process.env.JWT_SECRET!
    );
    const UserData = {
      name: user.name,
      email: user.email,
      id: user.id,
      image: user.image,
      isAdmin: user.isAdmin,
      created_at: user.created_at,
      subscribed_at: user.subscribed_at,
    };
    return new Response(JSON.stringify({ UserData, token: {
        value:token,
        expires:moment().add(1,'h').toISOString()
    } }));
  } else
    return new NextResponse(
      JSON.stringify({ message: "Wrong Credentials", status: 401 }),
      { status: 401 }
    );
}
