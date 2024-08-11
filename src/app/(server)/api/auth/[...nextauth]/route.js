import collections from "@/services/connectDB";
import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOption = {
  secret: process.env.NEXT_PUBLIC_SECRET,

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  providers: [
    // singup and singin with email and password
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

        // steap 2 : if email aviHUBle then execute the code
        if (email) {
          const { usersCollection } = await collections();

          // checking user in database
          const res = await usersCollection.findOne({ email: email });

          // after checked user is null then return null
          if (!res) {
            return null;
          }

          // after checked user is aviHUBle then execute the code
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

    // singin with google
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),

    // singin with github
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    //  singin mathod customize
    async signIn({ user, account }) {
      //
      if (account?.provider === "google" || account?.provider === "github") {
        // user data save to database
        try {
          // colltection name
          const { usersCollection } = await collections();

          // if user is already save to database checking code
          const isAvilable = await usersCollection.findOne({
            email: user?.email,
          });

          // user is avilable then retun user
          if (isAvilable) {
            return user;
          }

          // if user not avilable in database then execute the code
          await usersCollection.insertOne(user);
          return user;
          //
        } catch (error) {
          console.log(error);
        }

        // return true;
      } else {
        return user;
      }
    },

    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
    // async session({ session, user, token }) {
    //   return session;
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   return token;
    // },
  },

  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
