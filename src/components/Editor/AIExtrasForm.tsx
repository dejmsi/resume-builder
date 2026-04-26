import React from 'react';
import { useAppContext } from '../../AppContext';
import { Textarea, FormGroup, Label } from '../UI/FormControls';

export const AIExtrasForm = () => {
  const { state, updatePersonalInfo } = useAppContext();
  const { personalInfo } = state.data;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updatePersonalInfo({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-3">
      <FormGroup className="text-xs">
        <Label>Hidden Keywords (ATS / AI Scrapers)</Label>
        <p className="text-slate-500 text-[10px] mb-2">This text will be embedded semi-invisibly in your PDF. It is highly useful for matching applicant tracking systems (ATS) via keyword stuffing, without ruining visual appeal for human recruiters.</p>
        <Textarea 
          name="atsContent" 
          rows={5} 
          value={personalInfo.atsContent || ''} 
          onChange={handleChange} 
          className="bg-white" 
          placeholder="e.g., SEO, Agile, Scrum, JIRA, SQL, Product Management..." 
        />
      </FormGroup>
    </div>
  );
};
