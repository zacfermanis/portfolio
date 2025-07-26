# Featured Projects Cleanup - Design

## Overview
This design document outlines the approach for updating the Featured Projects section to accurately reflect Zac Fermanis's actual GitHub repositories, ensuring professional presentation and alignment with current portfolio positioning.

## Architecture

### Current State Analysis
The current `projectsData` in `src/data/portfolio.ts` contains:
- 6 projects total (2 featured, 4 non-featured)
- Mix of real projects (Liberty Mutual AI, EET) and placeholder projects
- Inconsistent with actual GitHub repositories

### Target State
Updated `projectsData` will contain:
- Projects based on actual GitHub repositories
- ai-ga-tetris and memory-banks as required
- Professional descriptions and accurate technology stacks
- Proper categorization and featured status

## Components

### Data Structure
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category: 'ai' | 'web' | 'mobile' | 'backend' | 'other';
}
```

### Repository Analysis
Based on GitHub profile analysis and current portfolio, the following repositories are identified:

1. **ai-ga-tetris** (Java) - AI/Genetic Algorithm implementation
2. **memory-banks** (TypeScript) - NPX script for Memory Bank system with SPEC design and Agentic Coding
3. **movingsystems** (Java) - Moving Systems Software
4. **fermanis_and_sons_lawncare** - Lawn care business management system
5. **Elegant Elephant Travel Platform** - Private repository (keep from current site)
6. **Bad Neighbor Repo** - LUA game using Love2D framework (private repository)

## Data Models

### Project Selection Criteria
- **Mature**: Complete functionality, good documentation
- **Professional**: Clean code, proper structure, meaningful purpose
- **Showcase-worthy**: Demonstrates relevant skills and experience

### Technology Mapping
- **Java projects**: Java, JUnit, Android (for VolumeBuddy)
- **TypeScript projects**: TypeScript, React, Next.js (likely for memory-banks)
- **AI projects**: AI/ML, Genetic Algorithms, Neural Networks

### Category Assignment
- **ai**: ai-ga-tetris, memory-banks
- **web**: fermanis_and_sons_lawncare, Elegant Elephant Travel Platform
- **other**: movingsystems, Bad Neighbor Repo

## Implementation Strategy

### Phase 1: Repository Analysis
1. Review each GitHub repository for completeness and quality
2. Identify technology stacks and key features
3. Determine professional presentation value

### Phase 2: Content Creation
1. Write professional descriptions for selected projects
2. Identify accurate technology stacks
3. Create appropriate GitHub URLs and live demo links
4. Design visual indicators for private repositories

### Phase 3: Data Update
1. Update `projectsData` in `src/data/portfolio.ts`
2. Ensure proper categorization and featured status
3. Maintain portfolio consistency
4. Add private repository indicators

## Error Handling

### Missing Repository Information
- Use available information from GitHub profile
- Create professional descriptions based on repository names and languages
- Provide accurate GitHub URLs

### Technology Stack Uncertainty
- Base technology lists on repository language and common patterns
- Include relevant technologies for each project type
- Maintain accuracy while being comprehensive

## Testing Strategy

### Content Validation
- Verify all GitHub URLs are accessible
- Ensure project descriptions are professional and accurate
- Validate technology stacks are appropriate

### Portfolio Integration
- Test that updated projects display correctly
- Verify featured/non-featured status works properly
- Ensure responsive design is maintained

## Success Metrics

- [ ] All featured projects are actual GitHub repositories or current portfolio projects
- [ ] ai-ga-tetris and memory-banks are included
- [ ] Project descriptions are professional and accurate
- [ ] Technology stacks reflect actual project technologies
- [ ] GitHub links are functional (where applicable)
- [ ] Private repositories have clear visual indicators
- [ ] Live demo links are provided where available
- [ ] Portfolio maintains professional presentation 