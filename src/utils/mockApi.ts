// src/utils/mockApi.ts

// Define the ContactFormData interface matching all fields in Contact.tsx
export interface ContactFormData {
    formType: 'message' | 'collaborate' | 'event' | 'speaking' | 'teaching';
    name: string;
    email: string;
    message?: string;
    repoUrl?: string;
    role?: 'contributor' | 'maintainer' | 'reviewer' | 'attendee' | 'speaker' | 'organizer';
    timeCommitment?: '<5h' | '5-10h' | '10-20h' | '20+h';
    projectDetails?: string;
    eventUrl?: string;
    date?: string;
    eventName?: string;
    topic?: string;
    duration?: '30m' | '45m' | '60m' | 'custom' | '1h' | '2h' | '3h';
    audience?: 'developers' | 'students' | 'executives' | 'general';
    eventDate?: string;
    additionalNotes?: string;
    subject?: string;
    format?: 'workshop' | 'course' | 'tutorial' | 'mentorship';
    frequency?: 'single' | 'weekly' | 'bi-weekly' | 'monthly';
    audienceLevel?: 'beginner' | 'intermediate' | 'advanced';
    learningObjectives?: string;
    submittedAt?: string;
  }
  
  // Simulate a form submission with a delay and redirect
  export const submitContactForm = async (data: ContactFormData): Promise<void> => {
    // Simulate network delay (1 second)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Log the submission for debugging (optional)
    console.log('Form submitted:', data);
  
    // Return a resolved promise (simulating success)
    return Promise.resolve();
  };