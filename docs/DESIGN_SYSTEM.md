# WILDVERSE Design System Direction

## 1. Design identity

**Adaptive Hybrid Nature Luxury**: cinematic nature storytelling plus editorial scientific clarity. Use dark and light sections intentionally while retaining one brand system.

## 2. Core palette

| Token | Hex | Intended use |
|---|---|---|
| Deep Forest | `#122B20` | Primary dark surfaces, hero/footer |
| Forest | `#244A35` | Secondary dark surfaces, accents |
| Natural Gold | `#D4B77B` | Restrained highlight/accent |
| Warm Ivory | `#F3F0E7` | Scientific reading surfaces |
| Charcoal | `#202923` | Primary text/dark neutral |

Create separate semantic tokens for success, warning, danger, info, borders, muted text and focus rings. Do not use gold as the only status indicator. Verify all text/background pairs for WCAG contrast.

## 3. Typography

Direction:
- Editorial serif for selected display titles (DM Serif Display or an equivalent with compatible license/readability).
- Clean sans-serif for body, UI, forms and dense scientific content (Inter or Geist or equivalent).
- Scientific names use italic styling where appropriate and must remain legible.
- Use self-hosted or properly licensed font files where practical; do not commit fonts without checking licenses.

## 4. Layout and components

- Responsive grid designed separately for mobile, tablet and desktop.
- Consistent spacing/type/radius/shadow tokens.
- Generous image-led storytelling where it helps discovery.
- Dense scientific tables should remain readable and accessible.
- shadcn/ui is an accessible component foundation, not the final visual style.
- Use clear states for accepted/disputed/under-review and verified/supported/modeled evidence. Never rely on color alone.

## 5. Motion

- CSS for simple hover, transition and color changes.
- Motion for React for normal component/page transitions and selected scroll reveals.
- GSAP only for a small number of complex cinematic sequences.
- React Three Fiber for animation inside 3D scenes.
- Avoid overlapping libraries for the same effect.
- Respect `prefers-reduced-motion`; provide static alternatives.
- Do not animate essential data in ways that make it hard to read.

## 6. 3D and maps

- Selective 3D only: globe, selected animal models, anatomy, fossils and special ecosystem scenes.
- Lazy-load scenes, optimize assets and provide 2D/image fallback.
- MapLibre is the 2D geographic map layer; React Three Fiber is not a replacement for GIS.
- Basemap/data tile licenses and attribution must be visible as required.

## 7. Accessibility and performance

Target WCAG 2.2 AA. Include keyboard navigation, visible focus, semantic landmarks, appropriate alt text, accessible form labels, reduced motion and meaningful contrast.

Prioritize fast initial rendering, responsive images, lazy loading below the fold, limited third-party scripts and a low-end mobile fallback. Establish actual performance budgets during prototype testing.

## 8. Logo direction

Use a refined WILDVERSE wordmark with a restrained earth/leaf/ecosystem motif. Avoid generic paw-print clipart as the primary identity. Final logo requires original design and trademark/domain checks before public launch.
