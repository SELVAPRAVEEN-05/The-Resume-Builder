import React, { useState } from 'react';
import { Resume } from '../types/resume.type';
import TemplateSelect from './CreateResume/templateSelect';
import EducationSkills from './CreateResume/educationSkills';
import SkillsLanguagesScreen from './CreateResume/skillsLanguagesScreen';
import ExperienceScreen from './CreateResume/experienceScreen';
import CertificationsScreen from './CreateResume/certificationsScreen';
import PreviewScreen from './CreateResume/previewResume';
import ProjectScreen from './CreateResume/projectScreen';
import PersonalScreen from './CreateResume/personalDetails';

export default function CreateResumeFlow({ navigation }: any) {
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
      return <PreviewScreen resume={resume} navigation={navigation} />;
  }
}
