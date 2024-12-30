# Vista Nova Website

## Project Overview
Corporate website for Vista Nova, built with Next.js and hosted on GitHub Pages. The project follows modern web development practices and is optimized for both desktop and mobile devices.

## Tech Stack
- **Framework:** Next.js 15.0.4
- **UI Library:** React 19.0.0
- **Styling:** Tailwind CSS 3.4.1
- **Language:** TypeScript 5
- **Email Service:** EmailJS 4.4.1
- **UI Components:** Headless UI 2.2.0

## Latest Updates (v0.2.4)
- Improved mobile navigation with animated hamburger menu
- Enhanced UI/UX for better accessibility
- Updated services descriptions
- Refined legal information display
- Optimized responsive design
- Fixed SVG icons display issues

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/your-user/vistanova.pt.git
cd vistanova.pt
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Access the development server at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
vistanova.pt/
├── assets/           # Design assets and base images
├── public/           # Static files and images
├── src/
│   ├── app/         # Next.js app router and main pages
│   └── components/  # Reusable React components
├── .eslintrc.json   # ESLint configuration
├── next.config.js   # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json    # TypeScript configuration
```

## Key Features
- **Responsive Design:** Mobile-first approach with optimized layouts for both mobile and desktop
- **Type Safety:** Full TypeScript implementation
- **Modern Styling:** Tailwind CSS for utility-first styling
- **Contact Form:** Integrated with EmailJS for form submissions
- **Performance:** Optimized builds with Next.js

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run serve` - Serve production build locally

## Deployment
The website automatically deploys to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment
```bash
npm run build
# Files will be generated in the 'out' directory
```

### Image Guidelines
- Store all images in the `public` directory
- When referencing images in code, include the full path:
```jsx
<img src="/vistanova.pt/images/example.jpg" alt="Description" />
```

## Development Guidelines
1. **Code Style**
   - Follow ESLint configuration
   - Use TypeScript strictly
   - Follow component-based architecture

2. **Component Structure**
   - Keep components small and focused
   - Use TypeScript interfaces for props
   - Implement proper error handling

3. **Styling**
   - Use Tailwind CSS classes
   - Follow mobile-first approach
   - Maintain consistent spacing and typography

4. **Performance**
   - Optimize images before committing
   - Implement lazy loading where appropriate
   - Monitor bundle size

## Environment Setup
The project requires:
- Node.js 18+ (LTS recommended)
- npm or yarn package manager

## License
This project is private and for internal use only. All rights reserved.
