# Project Setup Design

## Overview
This specification covers the technical setup and configuration of the Next.js portfolio project, including all development tools, testing framework, and project structure.

## Architecture

### Project Structure
```
portfolio/
├── .memory-bank/          # Memory bank documentation (existing)
├── .specs/               # Feature specifications (existing)
├── .cursorrules          # Cursor rules file (existing)
├── package.json          # Dependencies and scripts (may exist)
├── LICENSE               # License file (may exist)
├── .gitignore            # Git ignore file (may exist)
├── public/               # Static assets (created by Next.js)
│   ├── images/          # Image assets
│   ├── icons/           # Icon assets
│   └── favicon.ico      # Site favicon
├── src/
│   ├── components/      # React components
│   │   ├── layout/      # Layout components
│   │   ├── sections/    # Page sections
│   │   └── ui/          # Reusable UI components
│   ├── pages/           # Next.js pages
│   ├── styles/          # Global styles
│   │   └── globals.css  # Global CSS with Tailwind
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── tests/               # Test utilities and setup
├── .eslintrc.js         # ESLint configuration
├── .prettierrc          # Prettier configuration
├── jest.config.js       # Jest configuration
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── yarn.lock            # Yarn lock file
```

### Technology Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint + Prettier
- **Package Manager**: Yarn

## Components

### Configuration Files

#### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
```

#### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
      },
      fontFamily: {
        // Custom fonts
      },
    },
  },
  plugins: [],
}
```

#### jest.config.js
```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

module.exports = createJestConfig(customJestConfig)
```

## Data Models

### Package.json Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "type-check": "tsc --noEmit"
  }
}
```

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Error Handling

### Development Environment
- Clear error messages for missing dependencies
- TypeScript compilation errors displayed in development
- ESLint errors shown in editor and console
- Test failures with detailed output

### Production Build
- TypeScript errors prevent build
- ESLint errors prevent build
- Missing environment variables cause clear errors
- Build optimization warnings logged

## Testing Strategy

### Test Setup
- Jest configuration with Next.js integration
- React Testing Library for component testing
- Custom test utilities for common patterns
- Coverage reporting configured

### Test Structure
```
tests/
├── setup.ts              # Test setup and configuration
├── utils/                # Test utilities
│   ├── render.tsx        # Custom render function
│   └── test-utils.ts     # Common test helpers
└── __mocks__/            # Mock files
```

### Testing Patterns
- Component tests co-located with components
- Integration tests for page-level functionality
- Unit tests for utility functions
- Behavior-driven test descriptions

## Implementation Notes

### Development Workflow
1. Initialize Next.js using npx create-next-app while preserving existing files
2. Merge any existing package.json with Next.js generated one
3. Configure all development tools
4. Set up project structure alongside existing files
5. Create initial pages and components
6. Verify all scripts work correctly

### File Preservation Strategy
- Use npx create-next-app with --typescript flag
- Manually preserve .memory-bank, .specs, and .cursorrules files
- Merge existing package.json dependencies with Next.js defaults
- Preserve existing LICENSE and .gitignore files
- Ensure no existing configuration is overwritten

### Quality Assurance
- All configuration files properly formatted
- TypeScript strict mode enforced
- ESLint rules prevent common issues
- Prettier ensures consistent formatting
- Tests run without errors

### Performance Considerations
- Next.js optimized for static generation
- Tailwind CSS purged in production
- TypeScript compilation optimized
- Development server fast refresh enabled 