import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  numberOfItems: number;
  color?: string;
  label: string;
  item: string;
  items: string;
  icon: LucideIcon;
}

export const InfoCard = ({
  color,
  icon: Icon,
  numberOfItems,
  item,
  items,
  label,
}: InfoCardProps) => {
  return (
    <div className="border rounded-md flex items-center gap-x-2 p-3">
      <Icon color={color} />
      <div>
        <p className="font-medium" style={{ color: color }}>
          {label}
        </p>
        <p className="text-gray-500 text-sm">
          {numberOfItems} {numberOfItems === 1 ? item : items}
        </p>
      </div>
    </div>
  );
};
