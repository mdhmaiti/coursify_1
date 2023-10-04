
// official next js docs
// import { NextResponse } from 'next/server'

import { connectToDB } from "@/lib/connectToDB";
import Courses from "@/lib/models/courses.model";
import { NextRequest, NextResponse } from "next/server";
import { auth,currentUser } from '@clerk/nextjs';



 
// export async function GET(request: Request) {
//   return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
// }

// building the CRUD API 

// {
//     "course_name": "bangla sekho ",
//     "name": " medhashis ",
//     "course_price": 10,
//     "course_image": " ja mon chai "
// }kk
//const {course_name,name,course_price,course_image}= await request.json()
//await connectToDB();
//await Courses.create({course_name,name,course_price,course_image});
//return Response.json({ message:"authenticated" },{status:201});

export async function POST(request:Request){
    if (!auth) {
        return new NextResponse("Unauthorized", { status: 401 });
      }
    if(!currentUser)  return new NextResponse("Unauthorized", { status: 401 });
   
    
      const { course_name, name, course_price, course_image } = await request.json();
      
      try {
        await connectToDB();
        
    
        // Replace 'Courses' with your actual database model
        await Courses.create({ course_name, name, course_price, course_image });
    
        return new NextResponse(JSON.stringify({ message: "authenticated" }), { status: 201 });
      } catch (error) {
        return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
      }
    
}
