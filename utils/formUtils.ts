// Form utilities and helpers for resume creation

export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const formatDate = (date: Date | string): string => {
  if (typeof date === 'string') return date;
  return date.toISOString().split('T')[0];
};

export const parseDate = (dateString: string): Date | null => {
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
};

// Validation helpers
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length >= 10;
};

export const isValidURL = (url: string): boolean => {
  if (!url.trim()) return true; // Optional field
  try {
    new URL(url.startsWith('http') ? url : `https://${url}`);
    return true;
  } catch {
    return false;
  }
};

// Form state helpers
export const createEmptyEntryForm = (type: string) => {
  const id = generateId();
  
  switch (type) {
    case 'education':
      return {
        id,
        collegeName: '',
        degree: '',
        specialization: '',
        grade: '',
        graduationYear: '',
      };
    case 'experience':
      return {
        id,
        company: '',
        jobTitle: '',
        description: '',
        startDate: '',
        endDate: '',
      };
    case 'skill':
      return {
        id,
        name: '',
      };
    case 'project':
      return {
        id,
        title: '',
        description: '',
        techStack: '',
      };
    case 'certification':
      return {
        id,
        name: '',
        grade: '',
        date: '',
        link: '',
        description: '',
      };
    case 'reference':
      return {
        id,
        name: '',
        title: '',
        company: '',
        email: '',
        phone: '',
      };
    case 'language':
      return {
        id,
        name: '',
        proficiency: 'Intermediate',
      };
    default:
      return { id };
  }
};

// Resume data cleanup
export const cleanupResumeData = (data: any) => {
  return {
    ...data,
    education: data.education?.filter((e: any) => e.collegeName?.trim() || e.degree?.trim()),
    experience: data.experience?.filter((e: any) => e.company?.trim() || e.jobTitle?.trim()),
    skills: data.skills?.filter((s: any) => s.name?.trim()),
    projects: data.projects?.filter((p: any) => p.title?.trim()),
  };
};

// Export utilities
export const formatResumeForExport = (resume: any) => {
  return {
    templateId: resume.templateId,
    templateName: resume.templateName,
    objective: resume.objective || '',
    personalDetails: resume.personalDetails,
    education: resume.education || [],
    experience: resume.experience || [],
    skills: resume.skills || [],
    projects: resume.projects || [],
    certifications: resume.certifications || [],
    languages: resume.languages || [],
    references: resume.references || [],
  };
};
