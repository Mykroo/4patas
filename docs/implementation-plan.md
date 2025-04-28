⚠️ Opportunities for Improvement

1. Break Into Atomic Components
   - Description: Decompose the landing page into reusable UI primitives following Atomic Design principles.
   - Actions:
     1. Identify Atoms: buttons, typography, form inputs, images.
     2. Create `src/components/atoms` and implement each Atom with Tailwind classes, accessibility props, and strict TS types.
     3. Identify Molecules: e.g., Card combining image + title + button.
     4. Create `src/components/molecules` and refactor existing JSX into these components.
     5. Identify Organisms: HeroSection, FeaturedPets, SuccessStories.
     6. Create `src/components/organisms`, assemble Molecules and Atoms into cohesive sections.
     7. Define Templates: `src/components/templates/LandingPage.tsx` orchestrating layout and passing data down to Organisms.
     8. Update `pages/index.tsx` to render the LandingPage template.
   - Benefits: Improves reusability, consistency, maintainability, and testability.

2. Wrap Content in `<main>` and `<footer>`
   - Description: Add semantic landmarks for accessibility and SEO.
   - Actions:
     1. Wrap page sections (Hero, About, FeaturedPets, etc.) inside `<main role="main">`.
     2. Create a `Footer` Organism under `src/components/organisms` for Contact and Donate links.
     3. Wrap `<Footer>` inside `<footer role="contentinfo">` at the bottom of the layout.
     4. Ensure the document structure follows `<header>`, `<main>`, `<footer>` order for logical reading.
   - Benefits: Enhances screen reader navigation, improves SEO signals, and clarifies document structure.

3. Explicit Return Types & Strict TypeScript
   - Description: Enforce strong typing across components for better safety and clarity.
   - Actions:
     1. Enable strict mode in `tsconfig.json` (`"strict": true`, `"noImplicitAny": true`, `"strictNullChecks": true`).
     2. Declare component signatures explicitly: `const HomePage: React.FC = (): JSX.Element => { ... }` or `function HomePage(): JSX.Element { ... }`.
     3. Export and import interfaces for component props in each file.
     4. Replace any `any` types with precise interfaces or generics.
     5. Use `ReadonlyArray<T>` for static collections.
   - Benefits: Catches errors early, improves autocompletion, and serves as documentation for component contracts.

4. Data‐Driven Pet Lists
   - Description: Replace hard-coded arrays with a centralized data module to simplify maintenance.
   - Actions:
     1. Create `src/lib/pets.ts` exporting:
        ```ts
        export interface Pet { id: number; name: string; image: string }
        export const featuredPets: ReadonlyArray<Pet> = [ /* … */ ];
        ```
     2. In `FeaturedPets.tsx`, import `featuredPets` and map over it to render cards with `key={pet.id}`.
     3. Add fallback UI for empty lists (e.g., "No pets found").
     4. Write unit tests to verify rendering logic for different data scenarios.
   - Benefits: Reduces duplication, centralizes updates, and improves test coverage.

5. Use ShadCN UI & Centralize Styles
   - Description: Leverage ShadCN components to ensure consistent styling and accessible defaults.
   - Actions:
     1. Verify installation of ShadCN primitives (`Button`, `Input`, `Card`, etc.).
     2. In `src/components/atoms`, wrap ShadCN components to enforce brand tokens (e.g., colors, spacing).
     3. Replace raw `<Link className="...">` elements with `<Button asChild><Link href="...">Donate</Link></Button>` for consistent button styling.
     4. Centralize theme overrides in `src/styles/theme.ts` for colors, fonts, and spacing.
   - Benefits: Maintains design consistency, reduces custom CSS, and improves accessibility out of the box.

6. Public Assets Path
   - Description: Organize and reference static assets under Next.js `public` for seamless serving.
   - Actions:
     1. Move `static/images/*` into `public/images/*`.
     2. Update source references from `/static/images/…` to `/images/…`.
     3. Use Next.js `<Image>` component for optimized loading, specifying `alt`, `width`, and `height`.
   - Benefits: Simplifies asset management, takes advantage of built-in optimizations, and improves caching.

7. Accessibility Enhancements
   - Description: Ensure all interactive elements are keyboard-navigable and screen-reader friendly.
   - Actions:
     1. Add `aria-label` or `aria-labelledby` to icons, images, and buttons lacking visible text.
     2. Ensure focus indicators are visible: apply Tailwind classes `focus:outline-none focus:ring-2 focus:ring-offset-2`.
     3. For clickable non-button elements (e.g., divs/spans), add `tabIndex={0}`, `role="button"`, `onKeyDown` for Enter/Space, and `onClick` handlers.
     4. Run an automated audit with `axe-core` or browser devtools Accessibility panel.
     5. Manually test keyboard navigation across the full page to identify focus traps and fix them.
   - Benefits: Meets WCAG guidelines, broadens user reach, and provides inclusive UX.