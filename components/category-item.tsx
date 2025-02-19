"use client";
import { cn } from "@/lib/utils";

interface CategoryItemProps {
  label: string;
  value?: string;
}

function CategoryItem({ label, value }: CategoryItemProps) {
  return (
    <button
      className={cn(
        "py-2 px-3 text-sm font-[600] text-[#023047] border-2 border-[#e3f2fd] bg-[#e3f2fd] rounded-full flex items-center gap-x-1 hover:border-[#219ebc] transition"
        // style for active category
      )}
      type="button"
    >
      <div className="truncate">{label}</div>
    </button>
  );
}

export default CategoryItem;
