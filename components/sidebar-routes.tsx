// indicate that the component should run on the client-side (browser) instead of the server-side (Node.js).
"use client";
import { Search, BookOpen } from "lucide-react";
import { usePathname } from "next/navigation";
import SidebarItems from "./sidebar-items";

const studentRoutes = [
  {
    icon: BookOpen,
    label: "Dashboard",
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
        <SidebarItems />
      ))}
    </div>
  );
}

export default SidebarRoutes;
