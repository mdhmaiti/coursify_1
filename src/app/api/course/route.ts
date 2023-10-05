// official next js docs
// import { NextResponse } from 'next/server'

import { connectToDB } from "@/lib/connectToDB";
import Courses from "@/lib/models/courses.model";
import { NextRequest, NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs";



export async function GET(request: Request) {
  const { userId } = auth();
  const user = currentUser();
  console.log(userId);
  if(!userId) return NextResponse.json({ message: "unauthentivated" }, { status: 404 });

  return NextResponse.json({ message: "authentivated" }, { status: 200 });
}

export async function POST(request: Request) {
  
  
 
  
  

    const { course_name, name, course_price, course_image } =
      await request.json();

    try {
      await connectToDB();

      
      await Courses.create({ course_name, name, course_price, course_image });

      return new NextResponse(JSON.stringify({ message: "authenticated" }), {
        status: 201,
      });
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: "Internal Server Error" }),
        { status: 500 }
      );
    }
  
}
