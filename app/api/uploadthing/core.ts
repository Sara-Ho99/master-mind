import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@clerk/nextjs/server";
import { isCreator } from "@/lib/creator";

const f = createUploadthing();
const handleAuth = async () => {
  const { userId } = await auth();
  const isCreatorUser = isCreator(userId);
  if (!userId || !isCreatorUser) throw new UploadThingError("Unauthorized");
  return { userId };
};

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  courseImage: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    // Set permissions and file types for this FileRoute
    .middleware(() => handleAuth())
    .onUploadComplete(async ({ metadata, file }) => {
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),
  courseAttachment: f({
    pdf: {
      maxFileSize: "4MB",
    },
  })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),

  chapterVideo: f({
    video: {
      maxFileSize: "16MB",
      maxFileCount: 1,
    },
  })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
