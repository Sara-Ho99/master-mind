import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import Mux from "@mux/mux-node";
// import { isCreator } from "@/lib/creator";

const { Video } = new Mux(
  process.env.MUX_TOKEN_ID!,
  process.env.MUX_SECRET_KEY!
);

export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId: userId,
      },
      include: {
        chapters: {
          include: {
            muxData: true,
          },
        },
      },
    });

    if (!course) {
      return new NextResponse("Not found", { status: 404 });
    }

    // Delete all the video assets associated with the course
    for (const chapter of course.chapters) {
      if (chapter.muxData?.assetId) {
        await Video.Assets.del(chapter.muxData.assetId);
      }
    }
    // only need to delete course, chapters will be deleted due to cascade
    const deletedCourse = await db.course.delete({
      where: {
        id: params.courseId,
      },
    });

    return NextResponse.json(deletedCourse);
  } catch (error) {
    console.log("[COURSE_ID_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = await auth();

    const { courseId } = params;
    const values = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.update({
      where: {
        id: courseId,
        userId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
