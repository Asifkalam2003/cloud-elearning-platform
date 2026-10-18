# Proposed Page Layouts

These low-fidelity layout plans guide paper sketches and future implementation. They are not completed interface screens.

## Shared design rules

Use a consistent header, clear page title, readable content width, and visible primary action. Use real form labels, keyboard-accessible controls, and text explanations for errors. Stack columns on narrow screens. Show loading, empty, and failure states where data is fetched.

| Page | Top-to-bottom layout | Primary action and destination | Important states |
| --- | --- | --- | --- |
| Login | Brand/header; heading; email label/input; password label/input; error area; submit; register link | Login → role-appropriate dashboard | Submitting, invalid credentials, network failure |
| Registration | Brand/header; heading; name; email; password; role selector; validation area; submit; login link | Register → login with success message | Invalid fields, duplicate email, submitting |
| Catalog | Header/navigation; heading; search; course-card grid; pagination | Course card → course details | Loading, no courses, no search matches, retry on failure |
| Course details | Header; title; instructor; description; lesson count; enrollment action | Enroll → enrolled state and lesson-viewer link | Login required, empty course, already enrolled, enrollment failure |
| Student dashboard | Header; welcome/title; enrolled-course cards with progress and Continue Learning | Continue → lesson viewer | Loading, no enrollments with Browse Courses link, failure |
| Lesson viewer | Header; course title; lesson navigation; current lesson title; text/video; completion button | Mark complete → updated progress | Unauthorized, loading, missing lesson, save failure, completed |
| Instructor dashboard | Header; heading/Create Course; owned-course list; edit/delete controls; course form; lesson management panel | Create/Edit → validated save and updated list | No courses, validation errors, saving, deletion confirmation, failure |

## Desktop and mobile placement

- Login and registration: centered single-column forms.
- Catalog and student dashboard: multi-column cards on wide screens, one column on narrow screens.
- Course details: main content followed by enrollment controls; avoid hiding essential actions on mobile.
- Lesson viewer: lesson list beside content on wide screens, accessible expandable lesson list above content on mobile.
- Instructor dashboard: list and editor may share a wide layout; stack them on mobile.

## Sketch exercise

Draw one rectangle for each page. Place the elements in the order above. Label buttons and draw arrows to destination pages. For each page, add a small note describing its empty or error state.

Review two journeys:

1. Student: register → login → catalog → course details → enroll → lesson viewer → mark complete → dashboard.
2. Instructor: register → login → instructor dashboard → create course → add lesson → edit lesson → review course.

The sketches remain a student exercise. Save them later if useful, after checking they contain no personal information or secrets.
