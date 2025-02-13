"use client";
import * as z from "zod"; // zod for schema validation
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function CreatePage() {
  // Form validation
  const formSchema = z.object({
    title: z.string().min(1, {
      message: "Title is required",
    }),
  });

  return (
    <div>
      <h1>CreatePage</h1>
    </div>
  );
}

export default CreatePage;
