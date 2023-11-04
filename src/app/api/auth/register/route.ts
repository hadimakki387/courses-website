import User from "@/Models/UserSchema";
import MongoConnection from "@/utils/MongoConnection";
import { hash } from "bcrypt";
import httpStatus from "http-status";
import { sign } from "jsonwebtoken";
import moment from "moment";

export async function POST(req: Request) {
  MongoConnection();
  const body = await req.json();
  const user = await User.findOne({
    email: body.email,
  });

  if (user) {
    return new Response(
      JSON.stringify({
        message: "user already exists",
        status: httpStatus.CONFLICT,
      }),
      { status: httpStatus.CONFLICT }
    );
  } else {
    const user = new User({
      name: body.name,
      email: body.email,
      password: await hash(body.password, 10),
      image: "",
      isVIP: false,
      watchedVideos: [],
    });
    user.save();
    const token = sign(
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
    return new Response(
      JSON.stringify({
        UserData,
        token: {
          value: token,
          expires: moment().add(1, "h").toISOString(),
        },
      })
    );
  }
}
