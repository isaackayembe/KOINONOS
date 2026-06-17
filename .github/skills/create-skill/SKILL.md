---
name: create-skill
title: Create a `SKILL.md`
description: Guide a developer through creating a workspace `SKILL.md` for VS Code agent customization.
user-invocable: true
---

# Create a `SKILL.md`

This skill helps you create a workspace skill file that documents a repeatable workflow, captures decision points, and exposes a useful chat prompt.

## When to use this skill

- You want a reusable, project-scoped workflow documented as a skill.
- You need a prompt that guides the agent through a multi-step process.
- You want to preserve conventions for custom agent behavior in this repo.

## What this skill produces

A workspace skill file at `.github/skills/<name>/SKILL.md` with:

- `name`: a short lowercase identifier matching the folder name
- `title`: a clear human-facing title
- `description`: concise trigger text that describes the workflow
- body content with step-by-step guidance

## How to create a `SKILL.md`

1. Choose the workflow or task you want to capture.
2. Pick a stable skill name and folder under `.github/skills/`.
3. Create `SKILL.md` in that folder.
4. Write YAML frontmatter with `name`, `title`, `description`, and `user-invocable: true`.
5. Add a body that includes:
   - the workflow goal
   - decision points or branching logic
   - completion checks or quality criteria
   - example prompts to use the skill

## Example skill template

```md
---
name: example-skill
title: Example Skill
description: Guide the user through example workflow creation.
user-invocable: true
---

# Example Skill

This skill helps create an example workflow document.

## Steps

1. Identify the goal.
2. Choose file locations.
3. Write clear instructions.
4. Validate the frontmatter.
```

## Best practices

- Keep the `description` specific and discoverable.
- Use natural trigger phrases a developer would type.
- Match `name` to the folder name for consistency.
- Prefer workspace scope for project-specific behavior.

## Example prompts to try

- `Create a workspace skill for adding new landing page sections.`
- `Explain how to write a SKILL.md for deployment checklist automation.`
- `Show me the required frontmatter for a custom skill.`
