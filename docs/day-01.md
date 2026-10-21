# Day 1 — Cloud-Based E-Learning Platform

**Project:** Cloud-Based E-Learning Platform
**Day:** 01 — Project Planning and Fundamentals
**Date:** 21 October 2026
**Technology Stack:** HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, AWS
**Development Status:** Planning and documentation

---

## 1. Project Introduction

The Cloud-Based E-Learning Platform is a full-stack web application designed to provide online learning opportunities for students and course management capabilities for instructors.

Students will be able to register, log in, explore courses, enroll, access lessons, and monitor their learning progress.

Instructors will be able to create courses, manage lessons, and update their own educational content.

The application will use React for the frontend, Node.js and Express for the backend, MongoDB for persistent data storage, and AWS for planned cloud deployment.

## 2. Day 1 Objectives

The main objectives of Day 1 are:

1. Understand the purpose and scope of the project.
2. Learn the responsibilities of frontend, backend, and database systems.
3. Understand how browser-server communication works.
4. Identify application features and user roles.
5. Define basic application security rules.
6. Plan the seven primary application pages.
7. Understand Git and GitHub.
8. Prepare the project documentation.

## 3. Frontend, Backend, and Database

### 3.1 Frontend

The frontend is the part of the application that users see and interact with through their web browsers.

**Technologies:**

- HTML — Defines the structure and content of web pages.
- CSS — Controls the appearance, colors, spacing, and responsive layout.
- JavaScript — Adds interactivity and dynamic behavior.
- React — Helps build reusable interface components and manage application state.

**Example:** When a student clicks an Enroll button, JavaScript can send a request to the backend and update the displayed enrollment status.

### 3.2 Backend

The backend is responsible for processing requests, validating information, enforcing application rules, and communicating with the database.

**Technologies:**

- Node.js — Executes JavaScript outside the browser.
- Express.js — Provides routing and middleware for backend APIs.

**Example:** When a student attempts to enroll in a course, the backend checks whether the student is authenticated, the course exists, the course has lessons, and the student is not already enrolled.

The backend must enforce permissions even when frontend buttons are hidden or disabled.

### 3.3 Database

A database stores application information so that it remains available after users close their browsers or restart their devices.

**Technology:** MongoDB

Planned collections:

| Collection  | Purpose                                |
| ----------- | -------------------------------------- |
| Users       | Store student and instructor accounts  |
| Courses     | Store course information and ownership |
| Lessons     | Store lessons belonging to courses     |
| Enrollments | Record student-course enrollment       |
| Completions | Record completed lessons               |

Passwords must be securely hashed before storage. Plaintext passwords must never be stored.

## 4. Application Architecture

The planned communication flow is:

```text
Student / Instructor
        |
        v
Web Browser
        |
        v
React Frontend
        |
        | HTTP Request
        v
Node.js + Express Backend
        |
        | Database Operation
        v
MongoDB Database
        |
        | Result
        v
Express Backend
        |
        | HTTP Response
        v
React Frontend
        |
        v
Updated User Interface
```

During development, the application can run locally. AWS deployment will be addressed in a later phase.

## 5. Core Project Features

### Student Features

- Register and log in.
- Browse and search courses.
- View course descriptions.
- Enroll in available courses.
- Access lessons after enrollment.
- Mark lessons as completed.
- Track learning progress.
- View enrolled courses on the student dashboard.

### Instructor Features

- Register and log in as an instructor.
- Create courses.
- Edit and delete owned courses.
- Add and manage lessons.
- View owned courses through the instructor dashboard.

### Application Security Rules

- Students cannot create or modify courses.
- Instructors cannot modify another instructor's courses.
- Protected lesson content requires enrollment or authorized course ownership.
- Students cannot modify another student's learning progress.
- Duplicate course enrollments must be prevented.
- Authentication and authorization must be checked on the backend.

## 6. Seven Planned Application Pages

| Page                 | Main components                            |
| -------------------- | ------------------------------------------ |
| Login                | Email, password, login button              |
| Registration         | Name, email, password, role selection      |
| Course Catalog       | Course cards, search, pagination           |
| Course Details       | Course information, instructor, enrollment |
| Student Dashboard    | Enrolled courses and progress              |
| Lesson Viewer        | Lesson content, navigation, completion     |
| Instructor Dashboard | Course creation and lesson management      |

All pages should eventually support desktop and mobile screens, clear error messages, and accessible navigation.

These are planned layouts; the visual sketches and actual pages are not yet implemented.

## 7. How Course Enrollment Works

1. A student logs into the application.
2. The student opens the course catalog.
3. The student selects a course.
4. The student clicks Enroll.
5. The frontend sends an HTTP request to the backend.
6. The backend validates authentication and student permissions.
7. The backend checks the course and enrollment rules.
8. MongoDB stores a unique enrollment record.
9. The backend returns a success or error response.
10. The frontend updates the student interface.

## 8. Enrollment Versus Lesson Completion

**Enrollment** records that a student has joined a particular course.

**Lesson completion** records that a student has finished a particular lesson.

Enrollment provides access to protected course lessons, while completion records help calculate learning progress.

For example, enrolling in a course with 10 lessons does not mean the student has completed any lessons.

## 9. Course Progress Calculation

The planned progress formula is:

**Progress (%) = (Completed current lessons / Total current lessons) × 100**

Example:

- Total lessons: 10
- Completed lessons: 4
- Progress: (4 / 10) × 100 = 40%

If two additional lessons are added, the course contains 12 lessons.

Updated progress:

(4 / 12) × 100 = 33.33%

The progress percentage changes because the total number of lessons changes.

For a course with zero lessons, progress is 0%, and new enrollments are not permitted.

## 10. Git and GitHub Fundamentals

**Git** is a version control system used to track changes to source code and project documentation.

**GitHub** is a platform used to host Git repositories and collaborate on software projects.

Important commands:

| Command      | Purpose                               |
| ------------ | ------------------------------------- |
| `git clone`  | Download a repository                 |
| `git status` | View working directory status         |
| `git add`    | Stage changes                         |
| `git commit` | Save changes in local history         |
| `git push`   | Upload commits to a remote repository |
| `git pull`   | Retrieve and integrate remote changes |

### Difference Between Commit and Push

A commit saves a snapshot in the local Git repository.

A push transfers local commits to a remote repository such as GitHub.

### Why .gitignore Is Important

The `.gitignore` file prevents selected files from being tracked.

For example, `.env` files can contain database credentials, API keys, and other secrets. These must not be committed to a public repository.

## 11. Day 1 Learning Questions and Answers

**Q1. What do HTML, CSS, and JavaScript do?**

HTML creates page structure, CSS styles the page, and JavaScript adds interactive behavior.

**Q2. What belongs in the frontend versus the backend?**

The frontend displays information and handles user interaction. The backend validates requests, enforces permissions, performs business operations, and communicates with the database.

**Q3. Why must the backend check permissions?**

Frontend controls can be bypassed. Backend permission checks prevent unauthorized access and changes to protected resources.

**Q4. What data must persist after closing the browser?**

User accounts, course information, lessons, enrollments, and lesson completion records must persist.

**Q5. How does enrollment differ from lesson completion?**

Enrollment records course membership, while completion records learning activity for individual lessons.

**Q6. What is the progress for four completed lessons out of ten?**

The progress is 40%.

**Q7. What changes when a new lesson is added?**

The total lesson count increases, which can decrease the calculated progress percentage until the additional lesson is completed.

**Q8. What is the difference between commit and push?**

Commit saves changes locally; push sends commits to the remote repository.

**Q9. Why does .gitignore exclude .env?**

Because `.env` commonly contains sensitive configuration values that must not be published.

## 12. Day 1 Project Status

### Documentation Completed

- [x] Project overview defined.
- [x] Technology stack selected.
- [x] Core features identified.
- [x] Student and instructor roles defined.
- [x] Application architecture documented.
- [x] Functional requirements documented.
- [x] Seven page layouts planned.
- [x] GitHub repository created.

### Remaining Activities

- [x] Draw and review seven page sketches.
- [x] Confirm local Git repository setup.
- [x] Review and personalize learning notes.
- [x] Commit and push Day 1 notes to GitHub.

## 13. Next Steps — Day 2

Day 2 will introduce HTML fundamentals and begin the first static application pages.

Topics will include:

- HTML document structure.
- Semantic HTML elements.
- Headings, paragraphs, and links.
- Forms, labels, and inputs.
- Basic form validation.
- Building the first static login and registration pages.

## Conclusion

Day 1 establishes the foundation for the Cloud-Based E-Learning Platform. The project scope, planned architecture, technologies, application rules, and page requirements have been documented.

The next phase will move from planning into frontend implementation, starting with HTML.

**Current Project Status:** Day 1 documentation prepared. Application development and deployment have not started.
