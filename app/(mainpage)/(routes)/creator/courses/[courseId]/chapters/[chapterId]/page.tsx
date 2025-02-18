import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, PlusCircle, Video, ShieldCheck } from "lucide-react";
import { db } from "@/lib/db";
import ChapterTitleForm from "@/components/chapter-title-form";
import ChapterDescForm from "@/components/chapter-desc-form";

const ChapterIdPage = async ({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) => {
  const chapter = await db.chapter.findUnique({
    where: {
      id: params.chapterId,
      courseId: params.courseId,
    },
    include: {
      muxData: true,
    },
  });

  if (!chapter) {
    return redirect("/");
  }

  const requiredFields = [chapter.title, chapter.description, chapter.videoUrl];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <Link
              href={`/creator/courses/${params.courseId}`}
              className="flex items-center text-sm text-[#023047] font-bold hover:text-[#219ebc] hover:opacity-75 transition mb-6"
            >
              <ArrowLeft color="#219ebc" size="22" className="mr-1" />
              Back to Course Setup
            </Link>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl font-medium">Chapter Creation</h1>
                <span className="text-sm text-slate-700">
                  Complete all fields {completionText}
                </span>
              </div>
              <div>ACTION</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-x-2">
                <PlusCircle color="#219ebc" size="30" />
                <h2 className="text-xl">Customize Your Chapter</h2>
              </div>
              <ChapterTitleForm
                initialData={chapter}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
              <ChapterDescForm
                initialData={chapter}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <ShieldCheck size="30" />
                <h2 className="text-xl">Access Settings</h2>
              </div>
              <div>Access form</div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <Video size="30" />
              <h2 className="text-xl">Add a video</h2>
            </div>
            <div>Video form</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChapterIdPage;
