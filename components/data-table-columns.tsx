"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Course } from "@prisma/client";

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "publish",
    header: "Published",
  },
];
