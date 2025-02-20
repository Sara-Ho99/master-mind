import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { isCreator } from "@/lib/creator";

export async function POST(req: Request) {
  try {
    // clerk documentation
    const { userId } = await auth();
    const isCreatorUser = isCreator(userId);
    if (!userId || !isCreatorUser) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { title } = await req.json();
    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });
    return NextResponse.json(course);
  } catch (error) {
    console.error("api/courses", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
