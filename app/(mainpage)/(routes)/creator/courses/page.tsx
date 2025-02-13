import { Button } from "@/components/ui/button";
import Link from "next/link";

function OverviewPage() {
  return (
    <div className="p-6">
      <Link href="/creator/create">
        <Button>Create new course</Button>
      </Link>
    </div>
  );
}

export default OverviewPage;
