# Work History Update Requirements

## Overview
Update the work history section in CV details to accurately reflect the current resume, removing outdated entries and ensuring consistency with professional experience.

## User Stories

### US-1: Accurate Work History Display
**As a** portfolio visitor  
**I want to** see an accurate and up-to-date work history  
**So that** I can trust the professional information presented

**Acceptance Criteria:**
- Work history matches current resume exactly
- Only includes verified employment positions
- Displays correct company names, titles, and dates
- Shows accurate locations for each role

### US-2: Current Role Positioning
**As a** portfolio visitor  
**I want to** clearly understand the current professional focus  
**So that** I can assess relevant experience and expertise

**Acceptance Criteria:**
- Liberty Mutual Solutions Engineer clearly marked as current role
- EET CTO & Co-Founder shown as additional current role
- Former roles properly dated and positioned
- Professional progression clearly visible

### US-3: Professional Credibility
**As a** potential employer or client  
**I want to** see consistent and verifiable work history  
**So that** I can trust the candidate's professional background

**Acceptance Criteria:**
- All work history entries are accurate and verifiable
- No outdated or incorrect information
- Professional titles and responsibilities are current
- Company names and locations are correct

## Functional Requirements

### FR-1: Work History Data Update
**WHEN** the CV details section is displayed  
**THEN** the work history SHALL contain only the following entries:
- Liberty Mutual - Solutions Engineer (2017-Present, Remote)
- Elegant Elephant Travel - CTO & Co-Founder (2019-Present, Remote)
- Liberty Mutual - Principal Software Developer (2012-2017, Boston, MA)
- Liberty Mutual - Software Developer (2010-2012, Boston, MA)
- Citigroup - Senior Software Engineer (2008-2010, Boston, MA)
- Compaq Computer Co / Hewlett Packard - Software Engineer (2006-2008, Shrewsbury, MA)

### FR-2: Location Accuracy
**WHEN** work history entries are displayed  
**THEN** each entry SHALL show the correct location:
- Current Liberty Mutual role: Remote
- EET role: Remote
- Former Liberty Mutual roles: Boston, MA
- Citigroup role: Boston, MA
- Compaq/HP role: Shrewsbury, MA

### FR-3: Entry Removal
**WHEN** the CV details section is displayed  
**THEN** the following entries SHALL NOT be included:
- Fidelity Investments
- State Street Corporation
- Bank of America
- Wachovia Bank

## Non-Functional Requirements

### NFR-1: Data Consistency
- All work history data must match the current resume exactly
- No discrepancies between portfolio and resume information
- Professional titles and dates must be accurate

### NFR-2: Professional Presentation
- Work history must maintain professional appearance
- Information must be presented in a clear, readable format
- Chronological order must be maintained

## Success Criteria

1. **Accuracy**: All work history entries match current resume exactly
2. **Completeness**: All current and relevant former positions are included
3. **Consistency**: No outdated or incorrect information remains
4. **Professionalism**: Information is presented in a professional manner
5. **Verifiability**: All information can be verified against current resume

## Out of Scope

- Adding new work history entries not on current resume
- Modifying job descriptions or responsibilities
- Changing the visual presentation of work history
- Adding new CV details functionality 