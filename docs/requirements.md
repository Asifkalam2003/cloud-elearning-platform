# Project Requirements

## Goal

Build a learning platform where instructors manage courses and students enroll, study, and track progress.

## Roles

- Student: browse courses, enroll, access enrolled lessons, manage own progress.
- Instructor: create courses and manage only their own courses and lessons.
- For this learning version, users choose a role at registration. Instructor approval is outside initial scope.

## Functional requirements and acceptance checks

| Feature | Requirement | Acceptance check |
| --- | --- | --- |
| Registration | Collect name, email, password, role; validate input; hash passwords | Valid registration succeeds; duplicate email and invalid input fail; plaintext passwords are never stored |
| Login | Verify credentials and authenticate protected requests | Correct credentials work; incorrect credentials and expired/invalid tokens fail |
| Catalog | List courses and show public course details | Visitors can browse descriptions without gaining protected lesson access |
| Course management | Instructors create, view, update, and delete owned courses | Students are rejected; another instructor cannot change the course |
| Lessons | Instructors add, edit, order, and delete lessons in owned courses | Unauthorized requests fail on the backend |
| Enrollment | Students enroll once per course with at least one lesson | Duplicates are prevented by a database constraint; empty courses cannot be enrolled in |
| Lesson access | Enrolled students access lessons; owners can manage/preview their own lessons | Unenrolled requests and requests from unrelated instructors are rejected |
| Progress | Save unique student/lesson completion records | Repeated completion does not inflate progress; students cannot change others' progress |
| Student dashboard | Display own enrolled courses and progress | Different accounts see only their own learning records |
| Instructor dashboard | Display owned courses and management controls | Different instructor accounts see only their own management data |
| Search | Search the course catalog and paginate results | Matching, empty, and invalid-input cases behave clearly |
| Deployment | Make the frontend and API accessible online | Main student and instructor journeys work on the deployed system |

## Application rules

- Public registration supports student and instructor roles for this learning project.
- Role selection must never allow arbitrary privileged roles.
- Students cannot create courses.
- Instructors cannot edit or delete another instructor's courses or lessons.
- Course details are public; lesson content requires enrollment or course ownership.
- Enrollment is unique per student and course.
- Course deletion removes related lessons, enrollments, and completion records.
- Lesson deletion removes its completion records.
- Adding or deleting lessons changes the denominator used for progress.
- For courses with lessons: progress = completed current lessons / current lesson count * 100.
- A course with zero lessons shows 0% progress and cannot accept new enrollments.
- Confirm course deletion in the interface.
- Lesson content uses text and supported video links; select supported formats during lesson-viewer implementation.

## Quality requirements

- Responsive mobile and desktop layouts.
- Semantic HTML, labeled forms, visible keyboard focus, and readable contrast.
- Backend validation, authentication, role checks, and ownership checks.
- Password hashing; secrets excluded from Git.
- Loading, empty, success, and error feedback.
- Meaningful tests for authentication, permissions, enrollment, and progress.
- Production configuration, HTTPS, logging, and database recovery planning before release.

## Data model outline

- User: name, normalized email, password hash, role.
- Course: title, description, instructor reference.
- Lesson: course reference, title, text, optional video URL, order.
- Enrollment: student reference, course reference; unique pair.
- Completion: student reference, lesson reference; unique pair.

## Pages to sketch

1. Login: email, password, submit, registration link.
2. Registration: name, email, password, role, submit.
3. Catalog: navigation, search, course cards, pagination.
4. Course details: description, instructor, lesson count, enrollment action.
5. Student dashboard: enrolled courses, progress, continue action.
6. Lesson viewer: lesson navigation, content, completion action.
7. Instructor dashboard: owned courses, course editor, lesson management.

Sketches are an outstanding student task; this document is the sketch checklist, not completed visual designs.

## Deferred features

Payments, live classes, certificates, quizzes, live discussion, cover uploads, and video-file hosting.

## Day 1 verification

- Explain browser, server, and database responsibilities.
- Explain why hidden buttons do not enforce permissions.
- Review requirements and sketch the seven pages.
- Verify README, requirements, and .gitignore on GitHub.
- Explain commit versus push and why .env must stay out of Git.
