import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import CourseProgress from "@/components/course-progress";

interface CourseCardProps {
  id: string;
  title: string;
  imageUrl: string;
  chaptersLength: number;
  price: number;
  progress: number | null;
  category: string;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const CourseCard = ({
  id,
  title,
  imageUrl,
  chaptersLength,
  price,
  progress,
  category,
}: CourseCardProps) => {
  return (
    <Link href={`/courses/${id}`}>
      <div className="group hover:border-sky-100 hover:shadow-lg transition overflow-hidden border rounded-lg p-2 h-full">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image fill className="object-cover" alt={title} src={imageUrl} />
        </div>
        <div className="flex flex-col pt-2 justify-between">
          <div>
            <div className="text-lg md:text-base font-medium line-clamp-2">
              {title}
            </div>
            <p className="text-xs text-muted-foreground">{category}</p>
          </div>
          <div className="mt-3 flex items-center justify-between gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-[#219ebc]">
              <BookOpen size="20" color="#219ebc" />
              <span>
                {chaptersLength} {chaptersLength === 1 ? "Chapter" : "Chapters"}
              </span>
            </div>
            {progress !== null ? (
              <CourseProgress
                variant={progress === 100 ? "success" : "default"}
                size="sm"
                value={progress}
              />
            ) : (
              <p className="text-md md:text-sm font-medium">
                {formatPrice(price)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
