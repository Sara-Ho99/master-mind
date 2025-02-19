import { DataTable } from "@/components/data-table";
import { columns } from "@/components/data-table-columns";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function OverviewPage() {
  const { userId } = await auth();
  // avoid null userId
  if (!userId) {
    return redirect("/");
  }
  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="p-6">
      <DataTable columns={columns} data={courses} />
    </div>
  );
}

export default OverviewPage;
