import React from 'react'
import { render, screen, act } from '@testing-library/react'
import CVDetails from './CVDetails'
import { cvData } from '../../data/portfolio'

describe('CVDetails', () => {
  it('renders without crashing', () => {
    render(<CVDetails cvData={cvData} />)
  })

  it('displays education section', () => {
    render(<CVDetails cvData={cvData} />)
    expect(screen.getByText('Education')).toBeInTheDocument()
  })

  it('displays work history section', () => {
    render(<CVDetails cvData={cvData} />)
    expect(screen.getByText('Work History')).toBeInTheDocument()
  })

  it('displays all work experience entries when expanded', async () => {
    render(<CVDetails cvData={cvData} />)
    
    // Click to expand
    const expandButton = screen.getByRole('button')
    await act(async () => {
      expandButton.click()
    })
    
    // Check for key companies (using getAllByText for Liberty Mutual since there are multiple entries)
    const libertyMutualEntries = screen.getAllByText('Liberty Mutual')
    expect(libertyMutualEntries.length).toBeGreaterThan(0)
    expect(screen.getByText('Elegant Elephant Travel')).toBeInTheDocument()
    expect(screen.getByText('Fidelity Investments')).toBeInTheDocument()
    expect(screen.getByText('State Street Corporation')).toBeInTheDocument()
    expect(screen.getByText('Bank of America')).toBeInTheDocument()
    expect(screen.getByText('Wachovia Bank')).toBeInTheDocument()
  })

  it('displays correct number of work experience entries', async () => {
    render(<CVDetails cvData={cvData} />)
    
    // Click to expand
    const expandButton = screen.getByRole('button')
    await act(async () => {
      expandButton.click()
    })
    
    // Should have 10 work experience entries (including Elegant Elephant Travel and all historical positions)
    const workEntries = screen.getAllByText(/Solutions Engineer|Principal Software Developer|Software Developer|CTO & Co-Founder|Senior Software Engineer|Software Engineer|Associate Software Developer|Junior Developer/)
    expect(workEntries).toHaveLength(10)
  })
}) 