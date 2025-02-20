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
    <div className="h-full border-r flex flex-col overflow-y-auto bg-sky-200/20 shadow-sm">
      <div className="h-[66.5px] p-6 flex flex-col border-b">
        <h1 className=" font-bold text-[#023047]">{course.title}</h1>
      </div>
      <div className="flex flex-col w-full">
        {course.chapters.map((chapter) => (
          <CourseSidebarItem
            key={chapter.id}
            id={chapter.id}
            label={chapter.title}
            isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
            courseId={course.id}
            isLocked={!chapter.isFree && !purchase}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseSidebar;
