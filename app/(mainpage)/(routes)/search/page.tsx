import CategoryPanel from "@/components/category-panel";
import { db } from "@/lib/db";
import { SearchInput } from "@/components/search-input";
import { getCourses } from "@/actions/get-courses";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

async function SearchPage({ searchParams }: SearchPageProps) {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const courses = await getCourses({
    userId,
    ...searchParams,
  });

  return (
    <>
      <div className="px-6 pt-6 block">
        <SearchInput />
      </div>
      <div className="p-6 space-y-4">
        <CategoryPanel items={categories} />
      </div>
    </>
  );
}

export default SearchPage;
