"use client";
import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

function NavbarRoutes() {
  const pathname = usePathname();
  const router = useRouter();

  const isCreatorPage = pathname?.startsWith("/creator");
  const isCoursePage = pathname?.includes("/courses");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isCreatorPage || isCoursePage ? (
        <Button size="sm" variant="custom">
          <LogOut className="h-4 w-4 mr-2" />
          Exit
        </Button>
      ) : (
        <Link href="/creator">
          <Button size="sm" variant="custom">
            creator mode
          </Button>
        </Link>
      )}
      <UserButton />
    </div>
  );
}

export default NavbarRoutes;
