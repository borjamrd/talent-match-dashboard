import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    CredentialProvider({
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "usertest",
        },
      },
      async authorize(credentials, req) {
        //!TODO add here login logic

        if (credentials?.username === "TalentAdmin") {
          const user = {
            id: "1",
            name: "TalentAdmin",
            email: "admin@talentmatch.com",
            username: credentials?.username,
            rol: "admin",
          };
          return user;
        } else if (credentials?.username === "johndoe") {
          const user = {
            id: "userid_1",
            name: "John Doe",
            email: "johndoe@gmail.com",
            username: credentials?.username,
            rol: "admin",
          };
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
};
