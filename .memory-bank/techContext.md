# Technical Context: Portfolio Technologies

## Technology Stack

### Core Technologies
- **Next.js** - React framework for static site generation
- **TypeScript** - Type-safe JavaScript development
- **React** - UI library for component-based development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth interactions

### Development Tools
- **Node.js** - JavaScript runtime
- **Yarn** - Package manager (already configured)
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Jest** - Testing framework
- **React Testing Library** - Component testing utilities

### Build & Deployment
- **Vercel** - Recommended deployment platform for Next.js
- **GitHub** - Version control and CI/CD
- **Static Site Generation** - Pre-built HTML for optimal performance

## Development Setup

### Prerequisites
- Node.js (v18 or higher)
- Yarn package manager
- Git for version control

### Environment Setup
```bash
# Install dependencies
yarn install

# Development server
yarn dev

# Build for production
yarn build

# Run tests
yarn test

# Lint code
yarn lint
```

### Project Structure
```
portfolio/
├── .memory-bank/          # Memory bank documentation
├── .specs/               # Feature specifications
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   ├── pages/           # Next.js pages
│   ├── styles/          # Global styles
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── tests/               # Test files
├── package.json         # Dependencies and scripts
└── README.md           # Project documentation
```

## Technical Constraints

### Performance Requirements
- **First Contentful Paint**: < 1.5 seconds
- **Largest Contentful Paint**: < 2.5 seconds
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Progressive Enhancement**: Core functionality without JavaScript

### Accessibility Requirements
- **WCAG 2.1 AA** compliance
- **Keyboard Navigation** support
- **Screen Reader** compatibility
- **Color Contrast** ratios
- **Focus Management** for interactive elements

### SEO Requirements
- **Meta Tags** for social sharing
- **Structured Data** markup
- **Sitemap** generation
- **Robots.txt** configuration
- **Performance** optimization for Core Web Vitals

## Dependencies

### Current Dependencies
- `@zacfermanis/memory-bank` - Custom memory bank package

### Planned Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.0.0",
    "framer-motion": "^10.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.0.0",
    "jest": "^29.0.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.0.0"
  }
}
```

## Tool Usage Patterns

### Development Workflow
1. **TDD Approach**: Write tests first, then implementation
2. **Component Development**: Create reusable, testable components
3. **Type Safety**: Full TypeScript coverage, no `any` types
4. **Code Quality**: ESLint + Prettier for consistent formatting
5. **Testing**: Behavior-driven tests with React Testing Library

### Git Workflow
- **Feature Branches**: Create branches for new features
- **Commit Messages**: Conventional commits format
- **Pull Requests**: Code review before merging
- **Main Branch**: Always deployable state

### Deployment Workflow
- **Automatic Deployment**: Deploy on push to main branch
- **Preview Deployments**: Automatic preview for pull requests
- **Performance Monitoring**: Track Core Web Vitals
- **Rollback Capability**: Quick rollback if issues arise 