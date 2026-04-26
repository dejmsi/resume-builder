import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AppState, ResumeData, Settings, Experience, Education, Skill, PersonalInfo, Certification, Hobby } from './types';
import { defaultState } from './defaultData';

interface AppContextType {
  state: AppState;
  updatePersonalInfo: (info: Partial<PersonalInfo>) => void;
  
  addExperience: (exp: Experience) => void;
  updateExperience: (id: string, exp: Partial<Experience>) => void;
  removeExperience: (id: string) => void;

  addEducation: (edu: Education) => void;
  updateEducation: (id: string, edu: Partial<Education>) => void;
  removeEducation: (id: string) => void;

  addSkill: (skill: Skill) => void;
  updateSkill: (id: string, skill: Partial<Skill>) => void;
  removeSkill: (id: string) => void;

  addCertification: (cert: Certification) => void;
  updateCertification: (id: string, cert: Partial<Certification>) => void;
  removeCertification: (id: string) => void;

  addHobby: (hobby: Hobby) => void;
  updateHobby: (id: string, hobby: Partial<Hobby>) => void;
  removeHobby: (id: string) => void;

  updateSettings: (settings: Partial<Settings>) => void;
  importState: (newState: AppState) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AppState>(defaultState);

  const updatePersonalInfo = (info: Partial<PersonalInfo>) => {
    setState(prev => ({
      ...prev,
      data: { ...prev.data, personalInfo: { ...prev.data.personalInfo, ...info } }
    }));
  };

  const addExperience = (exp: Experience) => {
    setState(prev => ({
      ...prev,
      data: { ...prev.data, experience: [...prev.data.experience, exp] }
    }));
  };

  const updateExperience = (id: string, exp: Partial<Experience>) => {
    setState(prev => ({
      ...prev,
      data: {
        ...prev.data,
        experience: prev.data.experience.map(e => e.id === id ? { ...e, ...exp } : e)
      }
    }));
  };

  const removeExperience = (id: string) => {
    setState(prev => ({
      ...prev,
      data: { ...prev.data, experience: prev.data.experience.filter(e => e.id !== id) }
    }));
  };

  const addEducation = (edu: Education) => {
    setState(prev => ({
      ...prev,
      data: { ...prev.data, education: [...prev.data.education, edu] }
    }));
  };

  const updateEducation = (id: string, edu: Partial<Education>) => {
    setState(prev => ({
      ...prev,
      data: {
        ...prev.data,
        education: prev.data.education.map(e => e.id === id ? { ...e, ...edu } : e)
      }
    }));
  };

  const removeEducation = (id: string) => {
    setState(prev => ({
      ...prev,
      data: { ...prev.data, education: prev.data.education.filter(e => e.id !== id) }
    }));
  };

  const addSkill = (skill: Skill) => {
    setState(prev => ({
      ...prev,
      data: { ...prev.data, skills: [...prev.data.skills, skill] }
    }));
  };

  const updateSkill = (id: string, skill: Partial<Skill>) => {
    setState(prev => ({
      ...prev,
      data: {
        ...prev.data,
        skills: prev.data.skills.map(s => s.id === id ? { ...s, ...skill } : s)
      }
    }));
  };

  const removeSkill = (id: string) => {
    setState(prev => ({
      ...prev,
      data: { ...prev.data, skills: prev.data.skills.filter(s => s.id !== id) }
    }));
  };

  const addCertification = (cert: Certification) => {
    setState(prev => ({
      ...prev,
      data: { ...prev.data, certifications: [...(prev.data.certifications || []), cert] }
    }));
  };

  const updateCertification = (id: string, cert: Partial<Certification>) => {
    setState(prev => ({
      ...prev,
      data: {
        ...prev.data,
        certifications: (prev.data.certifications || []).map(s => s.id === id ? { ...s, ...cert } : s)
      }
    }));
  };

  const removeCertification = (id: string) => {
    setState(prev => ({
      ...prev,
      data: { ...prev.data, certifications: (prev.data.certifications || []).filter(s => s.id !== id) }
    }));
  };

  const addHobby = (hobby: Hobby) => {
    setState(prev => ({
      ...prev,
      data: { ...prev.data, hobbies: [...(prev.data.hobbies || []), hobby] }
    }));
  };

  const updateHobby = (id: string, hobby: Partial<Hobby>) => {
    setState(prev => ({
      ...prev,
      data: {
        ...prev.data,
        hobbies: (prev.data.hobbies || []).map(s => s.id === id ? { ...s, ...hobby } : s)
      }
    }));
  };

  const removeHobby = (id: string) => {
    setState(prev => ({
      ...prev,
      data: { ...prev.data, hobbies: (prev.data.hobbies || []).filter(s => s.id !== id) }
    }));
  };

  const updateSettings = (settings: Partial<Settings>) => {
    setState(prev => ({
      ...prev,
      settings: { ...prev.settings, ...settings }
    }));
  };

  const importState = (newState: AppState) => {
    setState(newState);
  };

  return (
    <AppContext.Provider value={{
      state,
      updatePersonalInfo,
      addExperience, updateExperience, removeExperience,
      addEducation, updateEducation, removeEducation,
      addSkill, updateSkill, removeSkill,
      addCertification, updateCertification, removeCertification,
      addHobby, updateHobby, removeHobby,
      updateSettings, importState
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
