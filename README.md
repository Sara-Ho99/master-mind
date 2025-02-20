# MasterMind

🚀 Live Demo: https://master-mind-one.vercel.app/

## Overview

**MasterMind** is an innovative learning management platform tailored for individual creators/ educators
who want to publish and manage online courses. It provides a user-friendly interface for educators
to share their expertise while enabling learners to explore and enroll in courses that align with their learning interest.
This platform is designed to empower independent creators, helping them build a digital presence as knowledge leaders.

## Features

As a creator:

- Publish online courses with structured video content.
- Create, edit, and delete courses and chapters as needed.
- View and manage published courses in one table list.

As a learner:

- Browse and view published courses.
- Search for courses using title and category.

## Tech Stack

- TypeScript
- Framework: Next.js
- UI Library: Tailwind CSS & Shadcn
- Frontend: React.js
- Backend: Node.js
- Database: PostgreSQL (Neon Serverless Postgres)
- ORM using Prisma
- Upload image, attachments and videos using UploadThing
- Video processing and HLS Video player using Mux
- Authentication using Clerk
- Deployment: Vercel

## Sitemap

### For Creators

- Overview page:

  https://master-mind-one.vercel.app/creator/courses

- Create new course page:

  https://master-mind-one.vercel.app/creator/create

- Publish/Delete course page:

  https://master-mind-one.vercel.app/creator/courses/:courseId

- Publish/Delete chapter page:

  https://master-mind-one.vercel.app/creator/courses/:courseId/chapters/:chapterId

### For Learners

- Home page (MyCourse):

  https://master-mind-one.vercel.app/

- Course Browse page:

  https://master-mind-one.vercel.app/search

- Course (chapter) Detail page:

  https://master-mind-one.vercel.app/courses/:courseId/chapters/:chapterId
