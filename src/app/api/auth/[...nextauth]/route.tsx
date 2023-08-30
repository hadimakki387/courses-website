import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Token } from "typescript";

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {},
      async authorize(credentials, req) {
        console.log(credentials);

        const res = await fetch("https://codestream.netlify.app/api/landingPage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            // signInEmail: credentials?.email,
            // UserPassword: credentials?.password,
            credentials
          ),
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const user = await res.json();
        console.log("connected to auth");
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          console.log(user._doc._id);

          return user._doc;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          console.log("failed");
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ user, token }: any) => {
      if (user) {
        token.uid = user._id;
        console.log(user);
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        // // Add the 'id' property to the session user object
        // session.user.id = token.uid || null;
        session.user.id = token.uid || null;
        console.log(token);
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
});
export { handler as GET, handler as POST };
