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
    
    // Check for key companies (using regex patterns to match the actual company names)
    const libertyMutualEntries = screen.getAllByText(/Liberty Mutual/)
    expect(libertyMutualEntries.length).toBeGreaterThan(0)
    expect(screen.getByText('Elegant Elephant Travel')).toBeInTheDocument()
    expect(screen.getByText(/Citigroup/)).toBeInTheDocument()
    expect(screen.getByText(/Compaq Computer Co\. \/ Hewlett Packard/)).toBeInTheDocument()
  })

  it('displays correct number of work experience entries', async () => {
    render(<CVDetails cvData={cvData} />)
    
    // Click to expand
    const expandButton = screen.getByRole('button')
    await act(async () => {
      expandButton.click()
    })
    
    // Should have 6 work experience entries based on the corrected data
    const workEntries = screen.getAllByText(/Solutions Engineer|Chief Technology Officer|Principal Software Engineer|Software Developer|Senior Programmer Analyst|Quality Assurance Engineer/)
    expect(workEntries).toHaveLength(6)
  })
}) 