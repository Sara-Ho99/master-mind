import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getMyCourses } from "@/actions/get-mycourse";
import { CoursesList } from "@/components/courses-list";

async function HomePage() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const { completedCourses, coursesInProgress } = await getMyCourses(userId);

  return (
    <div className="p-6 space-y-4">
      <CoursesList items={[...coursesInProgress, ...completedCourses]} />
    </div>
  );
}
export default HomePage;
