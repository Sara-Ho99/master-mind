"use client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface CategoryItemProps {
  label: string;
  value?: string;
}

function CategoryItem({ label, value }: CategoryItemProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategoryId = searchParams.get("categoryId");
  const currentTitle = searchParams.get("title");

  const isSelected = currentCategoryId === value;

  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: currentTitle,
          categoryId: isSelected ? null : value,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(url);
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "py-2 px-3 text-sm font-[600] text-[#023047] border border-[#e3f2fd] bg-[#e3f2fd] rounded-full flex items-center gap-x-1 hover:border-[#023047] transition",
        isSelected && "border-[#023047] bg-[#023047] text-white"
      )}
      type="button"
    >
      <div className="truncate">{label}</div>
    </button>
  );
}

export default CategoryItem;
