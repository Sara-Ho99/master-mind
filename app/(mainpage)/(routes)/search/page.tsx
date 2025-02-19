import CategoryPanel from "@/components/category-panel";
import { db } from "@/lib/db";
import { SearchInput } from "@/components/search-input";

async function SearchPage() {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
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
