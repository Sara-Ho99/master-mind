# Project Title

Learning Platform for On-Site Tutoring & Online Courses

## Overview

A learning platform that connects students with tutors for on-site tutoring and provides online courses for self-paced learning.

### Problem Space

- C2C tutoring: Enables tutors to offer in-person and remote tutoring sessions.
- Online courses: Allows tutors to publish pre-recorded courses that students can enroll in.

### User Profile

- Tutor/Teacher: Provides on-site or remote tutoring and publishes online courses.
- Student: Enrolls in online courses or books on-site/remote tutoring sessions.

## Features

### For Tutors

- Create and manage on-site/remote tutoring services.
- Publish online courses with videos and materials.
- Manage bookings and revenue tracking.

### For Students

- Browse and enroll in online courses.
- Book on-site or remote tutoring sessions.
- Manage course progress and booking history.

## Implementation

### Tech Stack

- Frontend:

  - React
  - React Router (Routing)
  - Axios (API calls)

- Backend:

  - Express.js (Node.js)
  - MySQL (Relational Database)
  - Knex (ORM for database migrations)
  - Auth

### APIs

- Unsplash API for images.

## Sitemap

### For Tutors

- Home page (Browse and manage services)
- Course management (Create/edit courses)
- Revenue management (Track earnings)
- Register/Login

### For Students

- Home page (Browse tutors & courses)
- Course management (Enrolled courses)
- Order management (Bookings & history)
- Register/Login

## Mockups

_To be added later._

## Database Design

### Tables & Relationships

- Users (Tutors & Students)
- Courses (Created by tutors, enrolled by students)
- Bookings (For on-site/remote tutoring)
- Payments (For both courses & tutoring sessions)
- _To be added later._

## Endpoints

### Register APIs

- `POST /api/auth/register` → Register a new user
- `POST /api/auth/login` → Authenticate user

### Tutor APIs

- `POST /api/tutor/courses` → Create a new course
- `GET /api/tutor/courses` → List tutor’s courses
- `GET /api/tutor/bookings` → View tutoring bookings

### Student APIs

- `GET /api/courses` → Browse available courses
- `POST /api/courses/enroll/:id` → Enroll in a course
- `POST /api/bookings` → Book a tutoring session

### Payment API (need more study)

- `POST /api/payment` → Process payments for courses/tutoring

## Roadmap

- Create client

  - Initialize React project
  - Setup routes and basic folders

- Create server

  - Setup Express.js with routes, middleware, and controller folder

- Create Database

  - Migrations & seeds for Users, Courses, and Bookings

- Feature Branches

  - tickets

- Fix Branches
- DEMO DAY

## Future Implementations

_To be added later._
