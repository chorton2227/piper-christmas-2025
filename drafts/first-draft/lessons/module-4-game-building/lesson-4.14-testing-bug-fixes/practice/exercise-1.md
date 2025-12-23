# Exercise 1 – Build a Bug Log

## Objective
Create a structured bug log to record issues systematically.

## Requirements
- Fields: ID, Title, Severity, Status (Open/In Progress/Fixed), Steps to Reproduce, Expected, Actual, Date Found
- Create a Markdown table or JSON array (choose one) in a `BUG_LOG.md`
- Add 2 sample entries (e.g., previously fixed all-in button disable, duplicate pot award)

## Steps
1. Decide format: Markdown table or JSON inside code block
2. Add header row (if using table) or object keys (if JSON)
3. Write concise reproducible steps
4. Include Expected vs. Actual clearly
5. Update log whenever a new defect is discovered

## Example (Markdown Row)
```
| ID | Title | Severity | Status | Steps | Expected | Actual | Date |
| 1 | Duplicate pot award | High | Fixed | Finish hand after all-in | Pot awarded once | Pot awarded twice | 2025-11-10 |
```

## Validation Checklist
- Fields present
- Sample entries added
- Clear difference between Expected & Actual

## Stretch
Add a "Root Cause" column once you fix a bug.

Proceed to Exercise 2 when the log is established.
