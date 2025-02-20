import { LucideIcon } from "lucide-react";

interface ProgressInfoCardProps {
  numberOfItems: number;
  color?: string;
  label: string;
  icon: LucideIcon;
}

export const ProgressInfoCard = ({
  color,
  icon: Icon,
  numberOfItems,
  label,
}: ProgressInfoCardProps) => {
  return (
    <div className="border rounded-md flex items-center gap-x-2 p-3">
      <Icon color={color} />
      <div>
        <p className="font-medium" style={{ color: color }}>
          {label}
        </p>
        <p className="text-gray-500 text-sm">
          {numberOfItems} {numberOfItems === 1 ? "Course" : "Courses"}
        </p>
      </div>
    </div>
  );
};
