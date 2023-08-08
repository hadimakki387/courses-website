import MongoConnection from "@/utils/MongoConnection";
import User from "@/Models/UserSchema";

export async function POST(req: Request) {
  await MongoConnection();
  console.log("connected");
  const body = await req.json();
  console.log(body);

  const user = new User({
    name: body.param.userName,
    email: body.param.signUpEmail,
    password: body.param.UserPassword,
    image: "",
    isVIP: false,
    watchedVideos: "",
  });
  console.log(user.name);

  return new Response(JSON.stringify(user));
}
