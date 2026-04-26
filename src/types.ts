export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface Skill {
  id: string;
  name: string;
}

export interface Certification {
  id: string;
  name: string;
  date: string;
}

export interface Hobby {
  id: string;
  name: string;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  summary: string;
  atsContent: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  certifications: Certification[];
  hobbies: Hobby[];
}

export interface Settings {
  template: 'minimal' | 'modern' | 'classic';
  fontFamily: string;
  primaryColor: string;
}

export interface AppState {
  data: ResumeData;
  settings: Settings;
}
