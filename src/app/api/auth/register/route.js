import User from "@/models/User";
import dbConnect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  
  if(!name || !email || !password){
    return NextResponse.json({
      success:false,
      message:"all parameters are required"
    },{status:404})
  }

  await dbConnect();

  try {
    const user = await User.findOne({
      email: email,
    });

    if (user) {
      return NextResponse.json({
        success:false,
        message:"user already exists"
      }, {
        status: 400,
      });
    }


    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return NextResponse.json({
      success:true,
      message:"User has been registered successfully"
    }, {
      status: 201,
    });
  } catch (err) {
    return NextResponse.json({
      success:false,
      message:err.message
    }, {
      status: 500,
    });
  }
};


export const GET = async (request) => {
  return new NextResponse("register work fine", {
    status: 200,
  });
};
