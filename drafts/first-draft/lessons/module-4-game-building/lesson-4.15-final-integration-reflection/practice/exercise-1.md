# Exercise 1 – Production Bundle Preparation

## Objective
Organize a clean `dist/` folder containing only necessary assets for deployment.

## Requirements
- Create `dist/` folder
- Copy final HTML (single entry point) + CSS + JS
- Remove test harness & debug logs from production build
- Verify relative paths for audio/images correct

## Steps
1. Decide which HTML file is the main entry
2. Concatenate or import needed scripts (avoid duplicates)
3. Strip `console.log` debugging (keep error logs)
4. Manual test of production folder locally

## Validation Checklist
- Loading `dist/index.html` works offline (except external fonts/CDNs)
- No 404 errors in console

## Stretch
Add simple script to automate copying & pruning.

Proceed to Exercise 2 for accessibility review.
