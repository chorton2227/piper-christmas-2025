# Final Integration Cheatsheet

## Packaging
- dist/ contains only needed HTML/CSS/JS/assets
- Remove dev-only scripts (test harness) from production
- Verify relative asset paths

## Accessibility Quick Pass
- Dialogs: role="dialog" aria-modal="true"
- Focus trap active in overlays
- Color contrast >= 4.5:1 (text), 3:1 (large text)
- Visible focus outline (avoid removing it)
- Reduced motion: @media (prefers-reduced-motion: reduce)

## Performance
- Inline critical CSS (above-the-fold) if needed
- Compress images (PNG→WebP/JPEG) where sensible
- Lazy load non-critical assets

## Release Notes Elements
- Version (SemVer)
- Features list
- Quality metrics (tests, open bugs)
- Known limitations
- Roadmap / future ideas

## Reflection Prompts
- Biggest challenge & solution
- Testing impact
- Feature that improved UX most

## Versioning
- Start at v1.0.0 when feature complete & stable
- Increment patch for bug fixes, minor for new features, major for breaking changes

## Quick Deployment (GitHub Pages)
1. Commit & push main branch
2. Settings → Pages → Select branch + /dist folder
3. Wait for build → test site

## Verification Smoke Test
- Tutorial opens first load (if reset)
- Audio plays or synthetic fallback triggers
- All-in sequence disables buttons correctly
- Stats update after a hand

Keep this sheet as your final launch checklist.
