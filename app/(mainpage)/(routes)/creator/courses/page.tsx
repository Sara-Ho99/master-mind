import { DataTable } from "@/components/data-table";
import { columns } from "@/components/data-table-columns";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getAnalytics } from "@/actions/get-analytics";
import { InfoCard } from "@/components/info-card";
import { ChartNoAxesCombined, Wallet } from "lucide-react";

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
  const { totalRevenue, totalSales } = await getAnalytics(userId);

  return (
    <>
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoCard
            color="#0096c7"
            icon={Wallet}
            label="Total Revenue"
            item="USD"
            items="USD"
            numberOfItems={totalRevenue}
          />
          <InfoCard
            icon={ChartNoAxesCombined}
            color="#208b3a"
            label="Total Sales"
            item="Course"
            items="Courses"
            numberOfItems={totalSales}
          />
        </div>

        <DataTable columns={columns} data={courses} />
      </div>
    </>
  );
}

export default OverviewPage;
