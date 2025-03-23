# [Vista Nova Website](https://vistanova.pt/)

**Corporate website for Vista Nova**, developed using modern full-stack practices with performance, accessibility, and maintainability in mind.

---

## 🌐 Overview

This project delivers a responsive, mobile-first experience powered by **Next.js**, styled with **Tailwind CSS**, and fully typed with **TypeScript**. Email handling is managed via **EmailJS**, allowing client-side form submissions without a backend.

---

## 🚧 Tech Stack

- **Framework:** Next.js `15.0.4`
- **Language:** TypeScript `5`
- **UI Library:** React `19.0.0`
- **Styling:** Tailwind CSS `3.4.1`
- **Components:** Headless UI `2.2.0`
- **Email Integration:** EmailJS `4.4.1`

---

## 🆕 Latest Updates (v0.2.4)

- Mobile navigation: new animated hamburger menu
- Accessibility: improved UX and keyboard navigation
- Content: updated services and legal sections
- Responsiveness: layout refinements on all breakpoints
- Bug fixes: SVG rendering issues resolved

---

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/gustavofalcao1/vistanova.pt.git
cd vistanova.pt
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Start development server
```bash
npm run dev
# or
yarn dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🗂 Project Structure

```
vistanova.pt/
├── assets/             # Design assets (e.g. mockups, raw images)
├── public/             # Static files served directly
├── src/
│   ├── app/            # Main routes using Next.js App Router
│   └── components/     # Reusable UI components
├── .eslintrc.json      # ESLint rules and formatting
├── next.config.js      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS theme setup
└── tsconfig.json       # TypeScript config and strict typing
```

---

## ✨ Key Features

- **Responsive Design** — Mobile-first, fluid grid layouts
- **Form Handling** — Integrated with EmailJS (no server needed)
- **Type Safety** — Full TypeScript coverage
- **Utility-First Styling** — Rapid styling with Tailwind
- **SEO-Friendly** — Next.js optimized head and structure

---

## 🔧 Available Scripts

```bash
npm run dev     # Start development server
npm run build   # Generate production build
npm run start   # Run production server
npm run lint    # Lint code with ESLint
npm run serve   # Serve 'out' directory locally
```

---

## 🚀 Deployment

This project uses **GitHub Pages** for deployment. Every commit to `main` triggers an automatic deploy.

### Manual Deployment
```bash
npm run build
# Output will be in the `out/` folder
```

### Image Handling
- Store images in `public/`
- Reference like:
```jsx
<img src="/images/example.jpg" alt="Description" />
```

---

## 📐 Development Guidelines

### Code Style
- Follow ESLint rules strictly
- Use TypeScript with explicit types
- Prioritize readability and component isolation

### Component Architecture
- Keep components atomic and reusable
- Use interfaces for props
- Implement graceful error boundaries

### Styling Conventions
- Tailwind-first styling approach
- Consistent use of spacing, font scales, and breakpoints
- Prefer semantic HTML wherever possible

### Performance
- Use optimized images only
- Implement lazy loading for non-critical content
- Regularly check build size and static output

---

## 🛠 Environment Requirements

- Node.js `18+` (LTS recommended)
- npm or yarn package manager

---

## 📄 License

This project is **private** and intended solely for internal use by Vista Nova.
All rights reserved.

---

## 👤 Author
**Gustavo Falcão**  
[GitHub @gustavofalcao1](https://github.com/gustavofalcao1)  
[Project Repository](https://github.com/gustavofalcao1/vistanova.pt)

