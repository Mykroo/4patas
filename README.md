# 🛠 Basic Landing Page Plan for *Shelter 4Patas*

**Overall style:**
- Bright, emotional, pet-centered images
- Soft, friendly colors (e.g., pastel orange, blue, green)
- Rounded corners, big buttons, soft shadows
- Animations/transitions (subtle hover effects)
- Responsive from the beginning (Mobile-First with Tailwind)

---

### Frontend (React)
- Functional components and hooks.
- Tailwind CSS for mobile-first design.
- State managed with Redux Toolkit or Zustand.
- Atomic component design (Atoms → Molecules → Organisms → Templates → Pages).

---


# 🖼 Landing Page Sections (Proposed 6 Sections)

| # | Section             | Purpose                                                                                      |
|---|----------------------|----------------------------------------------------------------------------------------------|
| 1 | Hero Section         | First impression: Big photo, slogan, Call-to-Action buttons (Adopt / Donate)                  |
| 2 | About Us             | A short mission statement and a photo of the shelter or happy pets                          |
| 3 | Featured Pets        | Showcase 3-4 pets urgently needing adoption                                                  |
| 4 | How You Can Help     | Cards/grid layout: Adopt, Foster, Volunteer, Donate                                          |
| 5 | Success Stories      | Show happy adoptions (maybe a carousel or simple quotes with photos)                        |
| 6 | Contact / Donate     | Contact form + Donation info, social media links, map location (optional for future)         |

---

# 🌟 Basic User Journey

- **Step 1**: They land → Get emotional by photos → Immediate CTA: *"Adopt" / "Donate"*
- **Step 2**: They scroll → Learn who you are
- **Step 3**: See animals → Get interested in one
- **Step 4**: Understand how they can help
- **Step 5**: Feel reassured by success stories
- **Step 6**: Act (Contact / Donate)

---

# 🧱 Basic File Structure (React + Tailwind)

```bash
shelter-4patas/
├── public/
│   └── images/           # Dog and cat images
├── src/
│   ├── assets/           # For logos, icons
│   ├── components/       # Each section = 1 component
│   ├── pages/
│   │   └── HomePage.jsx  # The landing page
│   ├── App.jsx
│   ├── index.css         # Tailwind base
│   └── main.jsx
├── tailwind.config.js
├── package.json
└── README.md
```

---

# 🧰 Tech Stack

- **Frontend Framework:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Version Control & Collaboration:** Git & GitHub
- **Linting:** [ESLint](https://eslint.org/)
- **Code Formatting:** [Prettier](https://prettier.io/)
- **Testing:** [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

# 🎨 Color Palette Suggestion

| Name           | Hex Code     | Use                                |
|----------------|--------------|------------------------------------|
| Soft Orange    | `#FFD6A5`     | Buttons, highlights                |
| Soft Blue      | `#A0C4FF`     | Backgrounds                        |
| Light Mint     | `#CAFFBF`     | Cards and small sections           |
| White          | `#FFFFFF`     | Backgrounds                        |
| Soft Gray      | `#F1F5F9`     | Background sections, separators    |

---

### 🎨 Desgin principles 
- **Separation of Concerns**: custom hooks for logic, components for UI.
- **Functional Component Design**: favor pure, stateless components.
- **Custom Hooks Pattern**: encapsulate logic like forms, fetching, and auth.
- **Context + Provider Pattern**: for global state (auth, language, theme).
- **Atomic Design**: organize UI as atoms, molecules, organisms.
- **Folder-by-Feature Structure**: maintainable directory layout.
- **Composition over Inheritance**: pass props and children for flexibility.
- **SOLID Principles** for class and logic design.
- **Separation of Concerns (SoC)**: views, serializers, services, and models clearly separated.
- **DRY (Don't Repeat Yourself)**: reusable utilities, mixins, and service layers.
- **Fat Models, Thin Views**: business logic prioritized in models or service layers.
- **YAGNI and KISS**: only build what is needed, keep logic simple.
- **Clean Architecture Inspiration**: structured as domain-driven with optional `services/`, `repositories/`, and 

---

# 👋 Immediate To-Do:

- [ ] Set up basic React + Tailwind project
- [ ] Create file structure (components for each section)
- [ ] Draft simple HTML structure for each section (no fancy styling yet)
- [ ] Add base Tailwind classes for responsiveness and spacing
- [ ] Later: Add nice images, hover effects, scroll animations


