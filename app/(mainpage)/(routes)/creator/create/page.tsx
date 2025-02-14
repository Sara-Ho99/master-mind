"use client";

import * as z from "zod"; // zod for schema validation
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

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

// Form validation
const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

function CreatePage() {
  // Initialize useForm hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const router = useRouter();

  // use formState to get the state of the form
  const { isSubmitting, isValid } = form.formState;

  // Handle form submission
  const handleFormSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { data } = await axios.post("/api/courses", values);
      router.push(`/creator/courses/${data.id}`);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl">Start creating...</h1>
        <p className="text-sm text-slate-600">
          Choose a name for your course. You can edit it anytime.
        </p>
        {/* Shadcn UI */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleFormSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'React for Beginners'"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter a name for your course
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href="/">
                <Button type="button" variant="custom">
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                variant="dark"
                disabled={!isValid || isSubmitting}
              >
                Next
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default CreatePage;
