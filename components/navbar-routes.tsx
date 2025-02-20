"use client";
import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { isCreator } from "@/lib/creator";

function NavbarRoutes() {
  const { userId } = useAuth(); // useAuth() only works in the client
  const pathname = usePathname();

  const isCreatorPage = pathname?.startsWith("/creator");
  const isCoursePage = pathname?.includes("/courses");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isCreatorPage || isCoursePage ? (
        <Link href="/">
          <Button size="sm" variant="custom">
            <LogOut className="h-4 w-4 p-0" />
            Exit
          </Button>
        </Link>
      ) : isCreator(userId) ? (
        <Link href="/creator/courses">
          <Button size="sm" variant="custom">
            <LogIn className="h-4 w-4 p-0" />
            Creator mode
          </Button>
        </Link>
      ) : null}
      <UserButton />
    </div>
  );
}

export default NavbarRoutes;
