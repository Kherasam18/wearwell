# 🔍 Project Audit Command

You are performing a full project audit. Your job is to deeply analyze this entire codebase and produce a comprehensive `implemented.md` file at the root of the project.

## Instructions

1. **Scan the entire project** — go through every file and folder recursively. Do NOT skip any file.
2. **Understand the architecture** — identify the tech stack, frameworks, libraries, folder structure, and design patterns used.
3. **Document what is implemented** — for every feature, module, or functionality you find evidence of, document it clearly.
4. **Be specific and factual** — only document things that are actually implemented (have real code behind them), not things that are planned or in comments.

---

## Output Format

Create a file called `implemented.md` at the root of the project with the following structure:
```markdown
# Project: [Project Name]
> Last audited: [current date]

## 🗂️ Tech Stack
- **Language(s):** ...
- **Framework(s):** ...
- **Database:** ...
- **Key Libraries:** ...
- **Dev Tools:** ...

## 📁 Project Structure
Briefly explain the folder/file layout and what each major folder is responsible for.

## ✅ Implemented Features

### [Feature or Module Name]
- What it does
- Where it lives (file paths)
- Any important notes (e.g., uses X pattern, integrates with Y)

### [Next Feature...]
- ...

## 🔌 Integrations & APIs
List any third-party services, APIs, or external integrations that are wired up and working.

## 🗄️ Database / Data Models
List all models/schemas/tables that exist, with their key fields.

## 🔐 Auth & Permissions
Describe what authentication/authorization is in place, if any.

## 🧩 Pending / Incomplete
List anything that appears to be started but not fully implemented (e.g., empty functions, TODO comments, stub files).

## 📝 Notes for AI Assistants
Any important context another AI assistant should know before touching this codebase (e.g., naming conventions, patterns to follow, things to avoid).
```

---

## After Creating the File

Once `implemented.md` is created, respond with:
> ✅ `implemented.md` has been created at the project root. You can now share this file with any AI IDE (Windsurf, Claude Code, Cursor, etc.) to give it full context about this project.