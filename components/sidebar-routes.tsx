// indicate that the component should run on the client-side (browser) instead of the server-side (Node.js).
"use client";
import { Search, BookOpen, ListChecks, PieChart, ListPlus } from "lucide-react";
import { usePathname } from "next/navigation";
import SidebarItem from "./sidebar-item";

const learnerRoutes = [
  {
    icon: BookOpen,
    label: "MyCourse",
    href: "/",
  },
  {
    icon: Search,
    label: "Browse",
    href: "/search",
  },
];

const creatorRoutes = [
  {
    icon: ListChecks,
    label: "Overview",
    href: "/creator/courses",
  },
  {
    icon: ListPlus,
    label: "NewCourse",
    href: "/creator/create",
  },
];

function SidebarRoutes() {
  const pathname = usePathname();
  const isCreatorPage = pathname?.includes("/creator");

  const routes = isCreatorPage ? creatorRoutes : learnerRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
}

export default SidebarRoutes;
