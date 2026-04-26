import React, { useRef } from 'react';
import { useAppContext } from '../../AppContext';
import { PersonalInfoForm } from './PersonalInfoForm';
import { ExperienceForm } from './ExperienceForm';
import { EducationForm } from './EducationForm';
import { SkillsForm } from './SkillsForm';
import { SettingsForm } from './SettingsForm';
import { CertificationsForm } from './CertificationsForm';
import { HobbiesForm } from './HobbiesForm';
import { AIExtrasForm } from './AIExtrasForm';
import { AccordionSection } from '../UI/Accordion';
import { User, Briefcase, GraduationCap, Wrench, Settings, Download, Upload, FileText, Award, Heart, Bot } from 'lucide-react';

export const Editor = () => {
  const { state, importState } = useAppContext();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(state, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `resume-${state.data.personalInfo.firstName || 'export'}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (json.data && json.settings) {
          importState(json);
        } else {
          alert('Invalid resume file format.');
        }
      } catch (err) {
        alert('Failed to parse JSON file.');
      }
    };
    reader.readAsText(file);
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <div className="h-full flex flex-col bg-white print:hidden">
      <div className="h-14 p-3 border-b border-slate-200 flex items-center justify-between shrink-0 bg-white z-10">
        <h1 className="text-base font-bold tracking-tight text-slate-900 flex items-center gap-2">
          <div className="w-6 h-6 bg-indigo-600 rounded-md flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-white rounded-sm"></div>
          </div>
          ResuMake <span className="text-indigo-600">Pro</span>
        </h1>
        <div className="flex items-center gap-2">
          <button 
            onClick={handleExportJSON}
            className="px-2.5 py-1 text-[11px] font-medium text-slate-600 hover:bg-slate-50 border border-slate-200 rounded flex items-center gap-1 transition-colors" 
            title="Export JSON"
          >
            ↓ Export
          </button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImportJSON} 
            accept=".json" 
            className="hidden" 
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="px-2.5 py-1 text-[11px] font-medium text-slate-600 hover:bg-slate-50 border border-slate-200 rounded flex items-center gap-1 transition-colors"
            title="Import JSON"
          >
            ↑ Import
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white relative">
        <AccordionSection title="Basic Information" icon={<User size={16} className="text-indigo-500" />} defaultOpen>
          <PersonalInfoForm />
        </AccordionSection>
        
        <AccordionSection title="Work Experience" icon={<Briefcase size={16} className="text-indigo-500" />}>
          <ExperienceForm />
        </AccordionSection>

        <AccordionSection title="Education" icon={<GraduationCap size={16} className="text-indigo-500" />}>
          <EducationForm />
        </AccordionSection>

        <AccordionSection title="Skills & Expertise" icon={<Wrench size={16} className="text-indigo-500" />}>
          <SkillsForm />
        </AccordionSection>

        <AccordionSection title="Certifications" icon={<Award size={16} className="text-indigo-500" />}>
          <CertificationsForm />
        </AccordionSection>

        <AccordionSection title="Hobbies & Interests" icon={<Heart size={16} className="text-indigo-500" />}>
          <HobbiesForm />
        </AccordionSection>

        <AccordionSection title="AI Optimization (ATS)" icon={<Bot size={16} className="text-indigo-500" />}>
          <AIExtrasForm />
        </AccordionSection>

        <AccordionSection title="Settings" icon={<Settings size={16} className="text-slate-400" />}>
          <SettingsForm />
        </AccordionSection>
      </div>

      <div className="p-3 border-t border-slate-200 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20 shrink-0">
        <button 
          onClick={handlePrintPDF}
          className="w-full px-4 py-2 bg-indigo-600 text-white text-[13px] font-semibold rounded hover:bg-indigo-700 transition-colors shadow-sm flex items-center justify-center gap-2"
        >
          <FileText size={16} /> Export to PDF
        </button>
      </div>
    </div>
  );
};
