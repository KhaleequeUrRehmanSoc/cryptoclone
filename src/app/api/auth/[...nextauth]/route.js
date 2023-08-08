import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import dbConnect from "@/utils/db";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        //Check if the user exists.
        await dbConnect();

        try {
          const user = await User.findOne({
            email: credentials.email,
          });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials!");
              // return NextResponse.json({
              //   success:false,
              //   message:"Wrong Credentials!"
              // }, {
              //   status: 403,
              // });
            }
          } else {
            throw new Error("User not found!");
            // return NextResponse.json({
            //   success:false,
            //   message:"User not found!"
            // }, {
            //   status: 404,
            // });
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  pages: {
    error: "/nft/login",
  },

});

export { handler as GET, handler as POST };
