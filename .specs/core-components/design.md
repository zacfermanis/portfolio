# Core Components Design

## Overview

This specification covers the design and implementation of the core portfolio components, including layout, sections, and reusable UI components.

## Architecture

### Component Hierarchy

```
Layout
├── Header
│   ├── Logo/Brand
│   └── Navigation
├── Main Content
│   ├── Hero Section
│   ├── About Section
│   ├── Projects Section
│   ├── Skills Section
│   └── Contact Section
└── Footer
    ├── Contact Info
    └── Social Links
```

### Component Structure

```
src/components/
├── layout/
│   ├── Layout.tsx          # Main layout wrapper
│   ├── Header.tsx          # Site header with navigation
│   ├── Footer.tsx          # Site footer
│   └── Navigation.tsx      # Navigation component
├── sections/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects showcase
│   ├── Skills.tsx          # Skills display
│   └── Contact.tsx         # Contact form and info
└── ui/
    ├── Button.tsx          # Reusable button component
    ├── Card.tsx            # Card component for projects
    ├── Icon.tsx            # Icon component
    └── Typography.tsx      # Typography components
```

## Components

### Layout Components

#### Layout.tsx

```typescript
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
```

#### Header.tsx

```typescript
interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 bg-white/90 backdrop-blur-sm ${className}`}>
      <nav className="container mx-auto px-4 py-4">
        {/* Logo and navigation */}
      </nav>
    </header>
  );
};
```

### Section Components

#### Hero.tsx

```typescript
interface HeroProps {
  name: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image?: string;
}

const Hero: React.FC<HeroProps> = ({
  name,
  title,
  description,
  ctaText,
  ctaLink,
  image
}) => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {name}
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
          {title}
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Button href={ctaLink} variant="primary" size="large">
          {ctaText}
        </Button>
      </div>
    </section>
  );
};
```

#### Projects.tsx

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState<string>('all');

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
```

### UI Components

#### Button.tsx

```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  disabled = false,
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500'
  };

  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
```

#### Card.tsx

```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'small' | 'medium' | 'large';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padding = 'medium'
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-sm border border-gray-200';
  const hoverClasses = hover ? 'hover:shadow-md hover:border-gray-300 transition-all duration-200' : '';
  const paddingClasses = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  };

  return (
    <div className={`${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
};
```

## Data Models

### Project Type

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'backend' | 'other';
  date: string;
}
```

### Skill Type

```typescript
interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}
```

### Contact Type

```typescript
interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    portfolio?: string;
  };
}
```

## Error Handling

### Component Error Boundaries

- Each major section wrapped in error boundary
- Graceful fallback for failed component renders
- Error logging for debugging

### Form Validation

- Client-side validation for contact form
- Clear error messages for users
- Server-side validation for form submissions

### Image Loading

- Fallback images for failed loads
- Loading states for image components
- Optimized image formats and sizes

## Testing Strategy

### Component Testing

- Unit tests for each component
- Props validation testing
- User interaction testing
- Accessibility testing

### Integration Testing

- Section component integration
- Layout component behavior
- Navigation functionality
- Form submission flow

### Visual Testing

- Responsive design testing
- Cross-browser compatibility
- Accessibility compliance
- Performance testing

## Implementation Notes

### Styling Approach

- Tailwind CSS for utility-first styling
- Custom CSS variables for theme consistency
- Responsive design with mobile-first approach
- Dark mode support (future enhancement)

### Performance Optimization

- Component lazy loading for sections
- Image optimization with Next.js Image
- Code splitting for large components
- Memoization for expensive computations

### Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Color contrast compliance
