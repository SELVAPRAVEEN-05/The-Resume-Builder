import React, { useState } from 'react';
import { Resume } from '../types/resume.type';
import CertificationsScreen from './CreateResume/certificationsScreen';
import EducationSkills from './CreateResume/educationSkills';
import ExperienceScreen from './CreateResume/experienceScreen';
import PersonalScreen from './CreateResume/personalDetails';
import PreviewScreen from './CreateResume/previewResume';
import ProjectScreen from './CreateResume/projectScreen';
import SkillsLanguagesScreen from './CreateResume/skillsLanguagesScreen';
import TemplateSelect from './CreateResume/templateSelect';

export default function CreateResumeFlow() {
  const [step, setStep] = useState(1);
  const [resume, setResume] = useState<Resume>({
    templateKey: '',
    personal: {
      fullName: '',
      role: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      github: '',
    },
    objective: '',
    skills: [],
    languages: [],
    education: [],
    experience: [],
    projects: [],
    certifications: [],
  });

  const props = { resume, setResume, setStep };

  switch (step) {
    case 1:
      return <TemplateSelect {...props} />;
    case 2:
      return <PersonalScreen {...props} />;
    case 3:
      return <EducationSkills {...props} />;
    case 4:
      return <SkillsLanguagesScreen {...props} />;
    case 5:
      return <ExperienceScreen {...props} />;
    case 6:
      return <ProjectScreen {...props} />;
    case 7:
      return <CertificationsScreen {...props} />;
    default:
      console.log(resume);
      return <PreviewScreen {...props} />;
  }
}
