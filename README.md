# Igor Dzichkovskii | Senior MERN Stack Developer - Portfolio

A high-performance, minimalist portfolio application showcasing enterprise-grade frontend architecture. This project serves as a production-ready demonstration of a developer-centric UI, localized design patterns, and clean engineering principles.

---

## 🛠️ Architecture & Core Tech Stack

- **Runtime & Core:** React 19.2 (Concurrent features, modern hooks) paired with TypeScript 6.0 (Strict mode typing).
- **Build Pipeline:** Vite 8.0 configured with explicit path aliasing for decoupled modular imports.
- **Styling Engine:** TailwindCSS v4.0 leveraging a strict geometric, design-token driven system.
- **Internationalization:** `i18next` lifecycle management with client-side localization persistence (`en`, `es`, `ru`).

---

## 🏗️ Technical Highlights & Design Patterns

### 1. Architectural Layout

The codebase adheres to a modular, domain-driven structure optimizing separation of concerns:

- **Custom Context Engines:** Global UI state (such as the notification pipeline) is managed natively via React Context API to eliminate third-party state overhead.
- **Optimized Rendering Layer:** Performance-critical scroll states and active viewport tracking are implemented using custom hooks leveraging the native **Intersection Observer API**.
- **Decoupled Modules:** Clean separation between presentation elements (`@components`), business logic (`@hooks`), layouts (`@views`), and localized static assets.

### 2. Tailored Design System

Built around a high-contrast Neo-brutalist / Minimalist aesthetic:

- **Typography:** Strict separation between display typeface (**Ubuntu Mono** for technical data and headers) and UI body prose (**Inter** for optimal scannability).
- **Stateful Micro-interactions:** Fluid element transformations, click-press feedback, and component enter/exit states built natively to maintain low runtime overhead.

---

## 📁 System Blueprint

```
portfolio-front/
├── src/
│   ├── components/          # Stateless, atomic UI components (Form controls, Buttons, Modals)
│   ├── context/             # Global application state wrappers (Toast notification orchestrator)
│   ├── hooks/               # Decoupled business logic (Viewport triggers, animation states)
│   ├── views/               # Layout structures and contextual viewport views
│   │   └── Sections/        # Section-specific views (Hero, Technical Stack, History, Projects)
│   ├── locales/            # Structured i18n dictionary resources (EN / ES / RU)
│   ├── types/              # Domain-specific TypeScript interfaces and types
│   ├── i18n.ts             # Internationalization bootstrap and client-side discovery logic
│   └── index.css           # TailwindCSS entry point and design system tokens
```

---

## 🚀 Deployment & Operations

### Local Workspace Setup

```bash
npm install
npm run dev
```

### Production Bundling

Ensures code optimization, asset compilation, and strict TypeScript compilation verification.

```bash
npm run build
```

---

## 👤 Executive Profile

- **Author:** Igor Dzichkovskii
- **Role:** Senior MERN Stack Developer
- **Location:** Valencia, Spain
- **GitHub:** [@CloudNine13](https://github.com/CloudNine13)
- **LinkedIn:** [Igor Dzichkovskii](https://www.linkedin.com/in/igor-dzichkovskii/)
