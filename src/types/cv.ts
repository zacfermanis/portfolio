// CV Details TypeScript interfaces

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  yearRange: string;
}

export interface WorkExperienceEntry {
  yearRange: string;
  company: string;
  location: string;
  title: string;
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface CVData {
  education: EducationEntry[];
  workExperience: WorkExperienceEntry[];
} 