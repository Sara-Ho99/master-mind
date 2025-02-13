// indicate that the component should run on the client-side (browser) instead of the server-side (Node.js).
"use client";
import { Search, BookOpen } from "lucide-react";
import { usePathname } from "next/navigation";
import SidebarItem from "./sidebar-item";

const studentRoutes = [
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

function SidebarRoutes() {
  const pathname = usePathname();

  const routes = studentRoutes;

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
