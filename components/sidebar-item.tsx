// indicate that the component should run on the client-side (browser) instead of the server-side (Node.js).
"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

// refine props type
interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string; // the target route path
}

// destructure props and annotate the type
function SidebarItem({ icon: Icon, label, href }: SidebarItemProps) {
  const pathname = usePathname(); // get the current pathname
  const router = useRouter(); // get the router object

  const isActive =
    (pathname === "/" && href === "/") || // current path is the root route
    pathname === href || // current path is the href route
    pathname?.startsWith(`${href}/`); // current path is a child of the href route

  const handleClick = () => {
    router.push(href); // navigate to the href route
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[700] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "text-[#3f37c9] bg-sky-200/20 hover:bg-sky-200/20 hover:text-[#3f37c9]"
      )}
    >
      {/* button */}
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-[#3f37c9]")}
        />
        {label}
      </div>
      {/* side indicator */}
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-[#3f37c9] h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
}

export default SidebarItem;
