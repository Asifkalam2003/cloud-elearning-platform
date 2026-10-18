# Day 1 — Project foundations

## Outcome and time

Spend 1–2 hours understanding the architecture, reviewing requirements, sketching pages, and practicing Git. This is a planning lesson; no running application is expected.

## Suggested session

| Minutes | Activity |
| --- | --- |
| 0–20 | Read the architecture explanation below |
| 20–40 | Review requirements and trace enrollment |
| 40–65 | Sketch the seven page layouts |
| 65–90 | Clone the repository and inspect its files |
| 90–120 | Write your answers, commit them, and verify on GitHub |

## Browser, server, database

The frontend is the interface displayed by the browser. HTML gives content structure, CSS controls appearance and layout, and JavaScript handles behavior. React will help us organize this interface into reusable components.

The backend runs on a server. Node.js runs JavaScript outside the browser; Express helps define HTTP endpoints and request handling. The backend validates input, authenticates users, checks permissions, and accesses data.

MongoDB stores persistent data. A document is one record, such as a course. Collections group documents of a similar purpose. Relationships connect records: a lesson refers to its course and an enrollment refers to a student and course.

During development these services can run locally. Deployment later makes them available through hosted infrastructure.

## Trace an enrollment

1. The student clicks Enroll in the browser.
2. The frontend sends an HTTP request with authentication information and the course identifier.
3. The backend verifies identity and student role.
4. It verifies the course exists and contains lessons.
5. It writes the enrollment, using a database uniqueness constraint to prevent duplicates even when simultaneous requests occur.
6. It returns an HTTP response describing success or failure.
7. The frontend shows the result and updates the interface.

An HTTP request asks a server to perform an operation. A response contains a status and often data. An API defines how clients communicate with a service. We will implement these later.

Hiding a button does not secure an operation: a person can send a request directly. The backend must enforce every protected operation.

## Review the scope

Read [requirements.md](requirements.md). Explain the difference between an enrollment and a completion record. Enrollment gives a student access to a course; completion records which lessons that student has finished.

Read [page-layouts.md](page-layouts.md) and draw the seven pages on paper. These are proposed layouts, not implemented screens.

## Get the project on your computer

Open a terminal in the parent folder where you want the project. If you already cloned this repository, open that existing folder instead of cloning again.

```bash
git clone https://github.com/Asifkalam2003/cloud-elearning-platform.git
cd cloud-elearning-platform
git status
```

- `git clone` downloads the repository and its history into a new folder. It also configures the remote called `origin`.
- `cd` changes the terminal's current folder.
- `git status` reports the current branch and any local changes. A fresh clone should have a clean working tree.

Open this folder through VS Code's File → Open Folder menu. Read README.md and the documents in docs.

## Your implementation task

Create `docs/day-01-notes.md` locally. Write answers in your own words:

1. What do HTML, CSS, and JavaScript each do?
2. What belongs in the frontend versus the backend?
3. Why must the backend check permissions?
4. What data must persist after closing the browser?
5. How does enrollment differ from lesson completion?
6. What is the progress for 4 completed lessons out of 10?
7. What changes when a new lesson is added?
8. What is the difference between commit and push?
9. Why does .gitignore exclude .env?

Add your observations from drawing the seven page layouts. Do not paste passwords, tokens, or other secrets into notes.

## Save your work with Git

Run each command separately from the project folder:

```bash
git status
git add docs/day-01-notes.md
git diff --cached
git commit -m "docs: add Day 1 learning notes"
git push
```

- `git add` stages the named file for the next commit.
- `git diff --cached` lets you review the staged content before saving it.
- `git commit` records a local snapshot with a message.
- `git push` sends local commits to the configured remote.

If Git asks for author identity, configure your name and actual GitHub email or private commit email with `git config user.name` and `git config user.email`. If authentication is requested, follow GitHub's supported sign-in flow. Never put credentials in repository files.

## Verify

Run `git status`; after a successful commit and push there should be no uncommitted changes and no commits ahead of the remote. Refresh GitHub and check that your notes appear with the correct content.

## Completion checklist

Repository preparation is complete; the learning tasks below remain for you to verify.

- [x] Repository created
- [x] Requirements and application rules documented
- [x] README and .gitignore committed
- [x] Proposed page layouts documented
- [ ] Explain architecture in your own words
- [ ] Draw and review seven page sketches
- [ ] Clone and open the project locally
- [ ] Write and push your learning notes

Next lesson: HTML structure, semantic elements, links, and accessible forms.
