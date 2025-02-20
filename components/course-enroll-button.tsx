"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";

interface CourseEnrollButtonProps {
  price: number;
  courseId: string;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const CourseEnrollButton = ({
  price,
  courseId,
}: CourseEnrollButtonProps) => {
  const onClick = async () => {};

  return (
    <Button
      variant="dark"
      onClick={onClick}
      size="sm"
      className="w-full md:w-auto"
    >
      Enroll for {formatPrice(price)}
    </Button>
  );
};
