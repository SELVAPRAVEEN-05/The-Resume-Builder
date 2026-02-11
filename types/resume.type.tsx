export interface Resume {
  id?: string;
  templateKey: string;

  personal: {
    fullName: string;
    role: string;
    email: string;
    phone: string;
    address: string;
    linkedin?: string;
    github?: string;
    imageUrl?: string;
  };

  objective: string;

  skills: {
    skillId: string;
    skill: string;
  }[];
  languages: {
    languageId: string;
    language: string;
  }[];

  education: {
    collegeId: string;
    degreeId: string;
    specializationId: string;
    degree: string;
    specialization: string;
    college: string;
    graduationYear: number;
    grade?: number;
  }[];

  experience: {
    companyId?: string;
    company: string;
    jobTitle: string;
    startDate: string;
    endDate?: string;
    description: string;
  }[];

  projects: {
    title: string;
    description: string;
    techStack: string[];
  }[];

  certifications: {
    name: string;
    grade: Number;
    date: string;
    link: String;
    description: String;
  }[];
}
