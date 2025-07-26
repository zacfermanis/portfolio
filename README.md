# Zac Fermanis Portfolio

A professional portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🌐 Live Site

**[Visit ZacFermanis.com →](https://zacfermanis.com)**

*Professional portfolio showcasing 20+ years of software engineering experience, AI leadership, and enterprise architecture expertise.*

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

3. Set up environment variables:
   
   Create a `.env.local` file in the root directory with the following content:
   ```bash
   # Resend API Configuration
   # Get your API key from https://resend.com/api-keys
   RESEND_API_KEY=your_resend_api_key_here
   
   # Environment
   NODE_ENV=development
   ```
   
   **Important**: You need a Resend API key to test the contact form locally. Sign up at [resend.com](https://resend.com) and verify your domain (zacfermanis.com is already verified for production).

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

### Environment Variables for Production

For production deployment, set the following environment variables:

- `RESEND_API_KEY`: Your Resend API key for email functionality
- `NODE_ENV`: Set to `production`

## Troubleshooting

### Contact Form Issues

If the contact form isn't working:

1. **Local Development**: Ensure you have a valid `RESEND_API_KEY` in your `.env.local` file
2. **Domain Verification**: The domain `zacfermanis.com` is already verified with Resend for production
3. **API Key**: Make sure your Resend API key is valid and has the necessary permissions
4. **Environment Variables**: Verify that environment variables are properly set in your deployment platform

### Common Error Messages

- **"RESEND_API_KEY environment variable is required"**: Set up your `.env.local` file for local development
- **"Domain is not verified"**: This should not occur in production as `zacfermanis.com` is verified
- **"Failed to send email"**: Check your Resend API key and account status

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
