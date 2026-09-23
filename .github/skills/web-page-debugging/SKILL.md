---
name: web-page-debugging
description: "Use when: fixing a broken HTML page, debugging CSS layout, repairing JavaScript behavior, validating static website changes, or following a repeatable frontend implementation workflow in this workspace."
---

# Web Page Debugging Workflow

This skill helps turn ad-hoc fixes into a reliable, repeatable workflow for static websites built with HTML, CSS, and JavaScript.

## When to use

Use this skill for:
- broken layouts or missing styles
- JavaScript that does not respond to clicks or events
- incorrect page structure or navigation
- validating a new section, page, or feature in a static project
- debugging before making a change or before declaring a task complete

## Workflow

### 1. Reproduce the problem clearly

Start with a precise description of the symptom:
- what should happen
- what actually happens
- where it happens in the page
- which file is involved

If the bug is visual, inspect the relevant page and identify the exact section. If it is behavior-related, trace the event or interaction that should trigger the change.

### 2. Narrow the likely source

Check the smallest relevant surface before changing code:
- HTML: structure, IDs, classes, semantics, missing elements
- CSS: selectors, specificity, spacing, responsive rules, inheritance
- JavaScript: event listeners, selectors, DOM queries, variable names, script loading order

Prefer reading the exact file and the specific section that matches the issue instead of editing broadly.

### 3. Form one hypothesis at a time

Before editing, state the likely cause in one sentence. For example:
- “The button is not responding because the script runs before the DOM is ready.”
- “The card layout is broken because the parent container does not have a flex layout.”

Then make the smallest possible change to test that hypothesis.

### 4. Apply the minimal fix

Keep edits targeted:
- fix the root cause, not a symptom
- avoid unrelated cleanup while debugging
- maintain project style and naming consistency
- do not add broad refactors unless required by the bug

If the issue is in HTML, update the structure or attributes; if it is in CSS, adjust selectors and layout rules; if it is in JavaScript, fix the event logic or script timing.

### 5. Verify the result with evidence

Check the result using the actual behavior:
- open the page in the browser
- test the specific interaction or layout condition
- verify the fix did not break adjacent elements
- confirm no console errors or obvious warnings

Completion requires evidence, not assumption.

### 6. Check for regressions

Before finishing, review nearby behavior:
- does the page still load correctly
- are other navigation links or buttons unaffected
- does the change preserve responsiveness and readability
- are there any references to missing files, invalid paths, or broken IDs

## Decision points

### If the issue is visual

Focus on:
- CSS selectors and class names
- layout rules such as display, gap, flex, grid, and width
- margins, padding, and alignment
- media queries and viewport-specific rules

### If the issue is interactive

Focus on:
- script placement and load order
- DOM event listeners and selectors
- variables and function names
- conditions that prevent the expected callback from firing

### If the issue is structural

Focus on:
- HTML hierarchy and nesting
- form fields, anchors, and button labels
- missing IDs or repeated classes
- broken internal navigation between pages

### If the task is a new feature or page

Use this order:
1. inspect the existing project structure and style
2. reuse the same conventions used by nearby pages
3. build the minimal HTML skeleton
4. add styling to match the current design language
5. add the smallest script needed for interactivity
6. verify the page loads and works as expected

## Quality criteria

A task is complete only when all of the following are true:
- the original issue is reproduced and addressed
- the fix is minimal and directly tied to the root cause
- the page or behavior has been tested in context
- related sections still work without obvious regression
- the final result is consistent with the surrounding project style

## Best practices for this workspace

This workspace contains HTML/CSS/JS projects and static pages. Favor these habits:
- keep file paths relative and consistent
- confirm script and stylesheet references match actual filenames
- prefer small, readable selectors and clear class names
- test page behavior in the browser instead of relying only on code inspection
- use the local project structure as the source of truth when choosing naming and layout patterns

## Example prompts

- “Fix the layout issue in the ONG home page and verify the result in the browser.”
- “The menu is not working on the static site; find the root cause and repair it.”
- “Create a consistent section for a new project card page using the same styling patterns as the existing HTML pages.”
- “Review this page for broken stylesheet links, missing classes, and JavaScript errors.”

## Related customizations

Possible follow-up customizations to create next:
- a project-specific instruction file for HTML/CSS consistency
- a prompt for reviewing static pages before launch
- a custom agent for frontend troubleshooting and layout validation
- a skill for creating reusable component patterns in this workspace
