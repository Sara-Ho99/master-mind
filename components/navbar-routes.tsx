"use client";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";
import Link from "next/link";

function NavbarRoutes() {
  const pathname = usePathname();

  const isCreatorPage = pathname?.startsWith("/creator");
  const isCoursePage = pathname?.includes("/courses");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isCreatorPage || isCoursePage ? (
        <Link href="/">
          <Button size="sm" variant="custom">
            <LogOut className="h-4 w-4 mr-2" />
            Learner mode
          </Button>
        </Link>
      ) : (
        <Link href="/creator">
          <Button size="sm" variant="custom">
            <LogIn className="h-4 w-4 mr-2" />
            Creator mode
          </Button>
        </Link>
      )}
      <UserButton />
    </div>
  );
}

export default NavbarRoutes;
