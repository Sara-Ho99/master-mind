import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Chapter, Course, UserProgress } from "@prisma/client";
import { db } from "@/lib/db";
import CourseSidebarItem from "@/components/course-sidebar-item";

interface CourseSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}
async function CourseSidebar({ course, progressCount }: CourseSidebarProps) {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const purchase = await db.purchase.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId: course.id,
      },
    },
  });

  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-8 flex flex-col border-b">
        <h1 className="font-semibold">{course.title}</h1>
      </div>
      <div className="flex flex-col w-full">
        {course.chapters.map((chapter) => (
          <CourseSidebarItem />
        ))}
      </div>
    </div>
  );
}

export default CourseSidebar;
