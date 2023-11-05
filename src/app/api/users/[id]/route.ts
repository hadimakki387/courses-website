import User from "@/Models/UserSchema";
import {
  checkPasswordMatch,
  extractIdFromUrl,
} from "@/utils/globalFunctions/global-functions";
import httpStatus from "http-status";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, res: NextResponse) {
  const id = extractIdFromUrl(req.url);
  const body = await req.json();
  const user = await User.findById(id);

  if (!user)
    return new Response(
      JSON.stringify({
        message: "UNAUTHORIZED",
        status: httpStatus.UNAUTHORIZED,
      }),
      { status: httpStatus.UNAUTHORIZED }
    );

  if (user) {
    const userMatch = await checkPasswordMatch(body.password, user.password);
    if (user && !userMatch)
      return new Response(
        JSON.stringify({
          message: "Wrong Password",
          status: httpStatus.CONFLICT,
        }),
        { status: httpStatus.CONFLICT }
      );

    if (user && userMatch) {
      const updateUser = await User.findOneAndUpdate(
        { _id: id },
        { name: body.name }
      );
      const newUser = await User.findById(id);
     
      return new Response(
        JSON.stringify({
            name:newUser.name
        }),
        {status:httpStatus.OK}
      )
    }
  }
}
