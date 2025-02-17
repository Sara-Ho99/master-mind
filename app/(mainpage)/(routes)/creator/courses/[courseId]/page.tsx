import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { BadgeInfo, ListVideo, BadgeDollarSign } from "lucide-react";
import TitleForm from "@/components/title-form";
import DescForm from "@/components/desc-form";
import ImageForm from "@/components/image-form";
import CategoryForm from "@/components/category-form";
import PriceForm from "@/components/price-form";
import AttachmentForm from "@/components/attachment-form";
import ChaptersForm from "@/components/chapters-form";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      attachments: {
        orderBy: {
          createdAt: "desc",
        },
      },
      chapters: {
        orderBy: {
          position: "asc",
        },
      },
    },
  });
  if (!course) {
    return redirect("/");
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const requiredFields = [
    course.title,
    course.description,
    course.price,
    course.categoryId,
    course.imageUrl,
    course.chapters.some((chapter) => chapter.isPublished),
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Course Setup</h1>
          <span className="text-sm text-slate-700">
            Complete all fields {completionText}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div>
          <div className="flex items-center gap-x-2">
            <BadgeInfo size="30" color="#219ebc" />
            <h2 className="text-xl">Customize Your Course</h2>
          </div>
          <TitleForm initialData={course} courseId={course.id} />
          <DescForm initialData={course} courseId={course.id} />
          <CategoryForm
            initialData={course}
            courseId={course.id}
            options={categories.map((category) => ({
              label: category.name,
              value: category.id,
            }))}
          />
          <ImageForm initialData={course} courseId={course.id} />
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-x-2">
              <BadgeDollarSign size="30" color="#219ebc" />
              <h2 className="text-xl">Sell Your Course</h2>
            </div>
            <PriceForm initialData={course} courseId={course.id} />
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <ListVideo size="30" color="#219ebc" />
              <h2 className="text-xl">Chapters & Resource</h2>
            </div>
            <ChaptersForm initialData={course} courseId={course.id} />
            <AttachmentForm initialData={course} courseId={course.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseIdPage;
