import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getChapter } from "@/actions/get-chapter";
import { VideoPlayer } from "@/components/video-player";
import { CourseEnrollButton } from "@/components/course-enroll-button";

async function ChapterIdPage({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const {
    chapter,
    course,
    muxData,
    attachments,
    nextChapter,
    userProgress,
    purchase,
  } = await getChapter({
    userId,
    chapterId: params.chapterId,
    courseId: params.courseId,
  });

  if (!chapter || !course) {
    return redirect("/");
  }

  const isLocked = !chapter.isFree && !purchase;
  const completeOnEnd = !!purchase && !userProgress?.isCompleted;

  return (
    <div className="flex flex-col max-w-4xl mx-auto pb-20">
      <div className="p-4">
        <VideoPlayer
          chapterId={params.chapterId}
          title={chapter.title}
          courseId={params.courseId}
          nextChapterId={nextChapter?.id}
          playbackId={muxData?.playbackId!}
          isLocked={isLocked}
          completeOnEnd={completeOnEnd}
        />
      </div>
      <div>
        <div className="p-4 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl font-semibold mb-2">{chapter.title}</h2>

          <CourseEnrollButton
            courseId={params.courseId}
            price={course.price!}
          />
        </div>
      </div>
    </div>
  );
}

export default ChapterIdPage;
