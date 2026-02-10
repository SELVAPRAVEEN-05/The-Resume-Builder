
export const DUMMY_DATA = {
  resume: {
    _id: 'resume123',
    templateKey: 'classic_1',
    objective:
      'Seeking a challenging role to leverage my skills and experience in building scalable, user-friendly applications.',
  },

  personalDetails: {
    fullName: 'John Anderson',
    email: 'john.anderson@email.com',
    phone: '+1 (555) 123-4567',
    address: 'San Francisco, CA',
    website: 'johnanderson.dev',
    linkedin: 'linkedin.com/in/johnanderson',
    github: 'github.com/johnanderson',
    imageUrl: '',
  },

  education: [
    {
      collegeId: {
        _id: 'college1',
        collegeName: 'University of California',
      },
      degreeId: {
        _id: 'degree1',
        degreeName: 'Bachelor of Science',
      },
      specializationId: {
        _id: 'spec1',
        specializationName: 'Computer Science',
      },
      graduationYear: 2021,
      grade: 3.8,
    },
  ],

  skills: [
    {
      skillId: { _id: 's1', skillName: 'React Native' },
    },
    {
      skillId: { _id: 's2', skillName: 'TypeScript' },
    },
    {
      skillId: { _id: 's3', skillName: 'Node.js' },
    },
    {
      skillId: { _id: 's4', skillName: 'MongoDB' },
    },
    {
      skillId: { _id: 's5', skillName: 'UI Design' },
    },
    {
      skillId: { _id: 's6', skillName: 'UX Research' },
    },
    {
      skillId: { _id: 's7', skillName: 'Figma' },
    },
    {
      skillId: { _id: 's8', skillName: 'Adobe XD' },
    },
    {
      skillId: { _id: 's9', skillName: 'Agile Methodologies' },
    },
  ],

  languages: [
    {
      languageId: { _id: 'l1', languageName: 'English' },
    },
    {
      languageId: { _id: 'l2', languageName: 'Spanish' },
    },
  ],

  experience: [
    {
      jobTitle: 'Frontend Developer',
      companyId: {
        _id: 'c1',
        companyName: 'TechNova Solutions',
      },
      startDate: 'Jan 2022',
      endDate: 'Present',
      description:
        'Developed mobile applications using React Native. Collaborated with designers and backend teams to deliver high-quality products.',
    },
  ],

  projects: [
    {
      title: 'Resume Builder App',
      description:
        'A full-stack resume builder application with multiple templates, live preview, and PDF export.',
      techStack: 'React Native, Node.js, MongoDB',
    },
    {
      title: 'Task Management System',
      description:
        'Built a task management app with authentication, role-based access, and real-time updates.',
      techStack: 'React, Express, MySQL',
    },
  ],

  certifications: [
    {
      name: 'Full Stack Web Development',
      date: '2023',
      description: 'Completed an intensive full-stack development program.',
    },
    {
      name: 'React Native Advanced',
      date: '2022',
      description: 'Advanced mobile application development with React Native.',
    },
  ],

  sections: [
    { sectionKey: 'objective', isVisible: true, orderIndex: 1 },
    { sectionKey: 'education', isVisible: true, orderIndex: 2 },
    { sectionKey: 'skills', isVisible: true, orderIndex: 3 },
    { sectionKey: 'experience', isVisible: true, orderIndex: 4 },
    { sectionKey: 'projects', isVisible: true, orderIndex: 5 },
    { sectionKey: 'certifications', isVisible: true, orderIndex: 6 },
    { sectionKey: 'languages', isVisible: true, orderIndex: 7 },
  ],
};