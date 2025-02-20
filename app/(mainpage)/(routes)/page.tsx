import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getMyCourses } from "@/actions/get-mycourse";
import { CoursesList } from "@/components/courses-list";
import { ProgressInfoCard } from "@/components/progress-info-card";
import { CheckCircle, Clock } from "lucide-react";

async function HomePage() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const { completedCourses, coursesInProgress } = await getMyCourses(userId);

  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ProgressInfoCard
          color="#0096c7"
          icon={Clock}
          label="In Progress"
          numberOfItems={coursesInProgress.length}
        />
        <ProgressInfoCard
          icon={CheckCircle}
          color="#208b3a"
          label="Completed"
          numberOfItems={completedCourses.length}
        />
      </div>
      <CoursesList items={[...coursesInProgress, ...completedCourses]} />
    </div>
  );
}
export default HomePage;
