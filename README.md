# Zac Fermanis Portfolio

A professional portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 Next.js 15 with App Router
- ⚡ TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🧪 Jest and React Testing Library for testing
- 📱 Responsive design
- 🔍 SEO optimized
- ⚡ Fast performance with static generation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/zacfermanis/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## Project Structure

```
portfolio/
├── .memory-bank/          # Memory bank documentation
├── .specs/               # Feature specifications
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   │   ├── layout/       # Layout components
│   │   ├── sections/     # Page sections
│   │   └── ui/           # Reusable UI components
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── tests/                # Test utilities and setup
├── public/               # Static assets
└── docs/                 # Documentation
```

## Development Workflow

This project follows a test-driven development approach:

1. Write tests first
2. Implement features to make tests pass
3. Refactor while keeping tests green
4. Update documentation

## Testing

Tests are written using Jest and React Testing Library. Run tests with:

```bash
npm test
```

For watch mode:
```bash
npm run test:watch
```

## Deployment

The project is configured for static site generation and can be deployed to:

- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## License

This project is licensed under the ISC License.

## Contact

- Email: contact@zacfermanis.com
- GitHub: [@zacfermanis](https://github.com/zacfermanis)
- LinkedIn: [Zac Fermanis](https://linkedin.com/in/zacfermanis)
