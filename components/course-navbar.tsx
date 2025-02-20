import { Chapter, Course, UserProgress } from "@prisma/client";
import NavbarRoutes from "@/components/navbar-routes";

interface CourseNavbarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

const CourseNavbar = ({ course, progressCount }: CourseNavbarProps) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-sky-200/20 shadow-sm">
      <NavbarRoutes />
    </div>
  );
};

export default CourseNavbar;
