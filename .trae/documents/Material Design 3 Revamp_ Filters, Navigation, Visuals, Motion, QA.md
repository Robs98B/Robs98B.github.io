## Smart Filtering
- Replace static filter options with dynamic options derived from current cards.
- Scan rendered items on load and after any update to compute valid years and categories.
- Generate filter pills from these sets; hide or disable options that have zero matches.
- Update in real time when cards are added/removed (hook into section render functions and use a MutationObserver for safety).
- Clarify active vs. inactive states: pressed/selected visuals, focus-visible rings, and disabled styles.
- Ensure i18n keys update correctly when regenerating pills.

## Navigation Redesign
- Replace underline effect with a polished bottom indicator bar that scales in/out on hover and persists on active.
- Use MD3 easing and durations (standard curve for hover, emphasized for focus) and add focus-visible styling.
- Ensure consistent color roles across light/dark themes; maintain sticky header with soft blur.
- Keep clear feedback: hover lift, active indicator, and selected state with state layer tint.

## MD3 Visual Design Alignment
- Audit color usage to map to MD3 tokens (primary, secondary, tertiary, surface, outline, containers).
- Enforce WCAG AA contrast for text on surfaces; adjust container/background colors where needed.
- Introduce fun, organic shapes with multiple variants (blobs A/B/C) and apply coherent gradients per token.
- Use shape tokens (extraSmall/small/medium/large/extraLarge) consistently; unify corner radii across cards.
- Make shapes and animations responsive: tune sizes and motion for breakpoints.

## Engaging Animations
- Standardize motion: subtle entry (opacity/translate), restrained hover lift, and variant blob motions per card.
- Prefer transform/opacity for performance; avoid layout thrash and heavy filters.
- Add reduced-motion support via media query; fall back to non-animated states when requested.
- Smooth transitions between states using MD3 standard/elevated curves and short durations.

## Quality Assurance
- Filter QA: test with datasets that include/exclude specific years/categories; verify pills update correctly and selections persist.
- Visual QA: check light/dark modes, contrast ratios, and token consistency on main pages.
- Motion QA: verify smoothness on low-end devices; ensure no jank; validate reduced-motion behavior.
- Accessibility QA: keyboard navigation, focus-visible states on pills/nav, ARIA states for selections.
- Responsive QA: exercise key breakpoints (mobile, tablet, desktop) and confirm coherent layouts.

## Implementation Notes
- Extend the existing filter engine to compute and render filter options; avoid redundant new files when feasible.
- Update styles in the existing stylesheet to keep consistency; reuse token variables.
- Integrate changes across Science, Activities, and Projects renderers; resume keeps timeline year only.
- Validate changes locally in the IDE preview on all target pages before any push.