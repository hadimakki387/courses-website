import MongoConnection from "@/utils/MongoConnection";
import User from "@/Models/UserSchema";
import * as bcrypt from "bcrypt";

export async function POST(req: Request) {
  await MongoConnection();
  console.log("connected");
  const body = await req.json();
  console.log(body);
  if (body.signUpEmail) {
    const user = new User({
      name: body.userName,
      email: body.signUpEmail,
      password: await bcrypt.hash(body.UserPassword, 10),
      image: "",
      isVIP: false,
      watchedVideos: [],
    });
    // console.log(await bcrypt.hash("nigga", 10));
    user.save();
    return new Response(JSON.stringify(user));
  } else {
    // const user = await User.find();
    // console.log(user);
  }
}
