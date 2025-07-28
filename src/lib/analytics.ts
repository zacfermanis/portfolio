// Google Analytics 4 Configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID!, {
      page_location: url,
    });
  }
};

// Log specific events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track contact form submissions
export const trackContactForm = () => {
  event({
    action: 'submit_contact_form',
    category: 'engagement',
    label: 'contact_form',
  });
};

// Track project clicks
export const trackProjectClick = (projectName: string) => {
  event({
    action: 'click_project',
    category: 'engagement',
    label: projectName,
  });
};

// Track CV details view
export const trackCVView = () => {
  event({
    action: 'view_cv_details',
    category: 'engagement',
    label: 'cv_details',
  });
};

// Track skills filter usage
export const trackSkillsFilter = (category: string) => {
  event({
    action: 'filter_skills',
    category: 'engagement',
    label: category,
  });
};

// Track navigation clicks
export const trackNavigation = (section: string) => {
  event({
    action: 'navigate_section',
    category: 'navigation',
    label: section,
  });
};

// Declare gtag on window object
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
} 