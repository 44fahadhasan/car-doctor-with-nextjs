import collections from "@/services/connectDB";
import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const { email, password } = credentials;

        // steap 1 : if email and password is null then return
        if (!email || !password) {
          return null;
        }

        // steap 2 : if email avilable then execute the code
        if (email) {
          const { usersCollection } = await collections();

          // checking user in database
          const res = await usersCollection.findOne({ email: email });

          // after checked user is null then return null
          if (!res) {
            return null;
          }

          // after checked user is avilable then execute the code
          if (res) {
            // first compare the password with user provided password and database stored password
            const isPasswordCorrect = bcrypt.compareSync(
              password,
              res?.password
            );

            // password compare is false then returen null
            if (!isPasswordCorrect) {
              return null;
            }

            // password compare is true then returen user data form database
            return res;
          }

          //
        }
        //
      },
    }),
  ],

  callbacks: {},

  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
