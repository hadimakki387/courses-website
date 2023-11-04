import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import httpStatus from "http-status";
import { verifyToken } from "./lib/auth";

// This function can be marked `async` if using `await` inside
export async function middleware(request: Request) {
  const bereer = request.headers.get("Authorization");


  if (!bereer) {
    return new NextResponse(
      JSON.stringify({
        message: "Authorization header missing",
        status: httpStatus.UNAUTHORIZED,
      }),
      { status: httpStatus.UNAUTHORIZED }
    );
  }

  const verify =
    bereer &&
    (await verifyToken(bereer).catch((err) => {
      console.log(err);
    }));

  if (!verify) {
    return NextResponse.json(
      { error: "Invalid Token" },
      { status: httpStatus.UNAUTHORIZED }
    );
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/api/admin/:path*",
    "/api/home/:path*",
    "/api/landingPage/:path*",
    "/api/MERN/:path*",
    "/api/profile/:path*",
    "/api/users/:path*",
  ],
};
