import React from 'react'
import { render, screen } from '@testing-library/react'
import Page from './page'

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Page />)
  })

  it('displays the hero section with name and title', () => {
    render(<Page />)
    
    const nameElements = screen.getAllByText('Zac Fermanis');
    expect(nameElements.length).toBeGreaterThan(0);
    expect(screen.getByText('Solutions Engineer, Architect & AI Leader')).toBeInTheDocument();
  });

  it('contains the about section', () => {
    render(<Page />)
    
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('contains the projects section', () => {
    render(<Page />)
    
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
  });

  it('contains the skills section', () => {
    render(<Page />)
    
    expect(screen.getByText('Skills & Technologies')).toBeInTheDocument();
  });

  it('contains the contact section', () => {
    render(<Page />)
    
    // Look for the contact section heading specifically
    const contactHeadings = screen.getAllByText('Get In Touch')
    expect(contactHeadings.length).toBeGreaterThan(0)
  });

  it('displays the header with navigation', () => {
    render(<Page />)
    
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('displays the footer', () => {
    render(<Page />)
    
    expect(screen.getByText(/© \d{4} Zac Fermanis/)).toBeInTheDocument();
  });
});
