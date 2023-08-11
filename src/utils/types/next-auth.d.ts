import NextAuth from "next-auth";
declare module "next-auth" {
  interface Session {
    user: {
      id: any;
      name: string;
      email: string;
      image: string;
    };
    expires: Date; // This is the expiry of the session, not any of the tokens within the session
  }
}
