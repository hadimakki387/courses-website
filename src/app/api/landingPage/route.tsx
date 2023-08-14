import MongoConnection from "@/utils/MongoConnection";
import User from "../../../Models/UserSchema";
import * as bcrypt from "bcrypt";

export async function POST(req: Request) {
  await MongoConnection();

  const body = await req.json();

  if (body.signUpEmail) {
    const user = await User.findOne({
      email: body.signUpEmail,
    });

    if (user) {

      return new Response(JSON.stringify(true));
    } else {
      const user = new User({
        name: body.name,
        email: body.signUpEmail,
        password: await bcrypt.hash(body.UserPassword, 10),
        image: "",
        isVIP: false,
        watchedVideos: [],
      });
      user.save();
      return new Response(JSON.stringify(false));
    }
  }
  if (body.signInEmail) {
    const user = await User.findOne({
      email: body.signInEmail,
    });
    console.log(body.UserPassword);
    if (user && (await bcrypt.compare(body.UserPassword, user.password))) {
      const { password, ...userWithoutPass } = user;
      return new Response(JSON.stringify(userWithoutPass));
    } else return new Response(JSON.stringify(null));
  }
}
