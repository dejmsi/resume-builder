import React from 'react';
import { useAppContext } from '../../AppContext';
import { Input, Textarea, Label, FormGroup } from '../UI/FormControls';

export const PersonalInfoForm = () => {
  const { state, updatePersonalInfo } = useAppContext();
  const { personalInfo } = state.data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updatePersonalInfo({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <FormGroup className="mb-0">
          <Label>First Name</Label>
          <Input name="firstName" value={personalInfo.firstName} onChange={handleChange} className="bg-white" />
        </FormGroup>
        <FormGroup className="mb-0">
          <Label>Last Name</Label>
          <Input name="lastName" value={personalInfo.lastName} onChange={handleChange} className="bg-white" />
        </FormGroup>
      </div>
      <FormGroup className="mb-0">
        <Label>Job Title</Label>
        <Input name="jobTitle" value={personalInfo.jobTitle} onChange={handleChange} className="bg-white" />
      </FormGroup>
      <div className="grid grid-cols-2 gap-3">
        <FormGroup className="mb-0">
          <Label>Email</Label>
          <Input name="email" type="email" value={personalInfo.email} onChange={handleChange} className="bg-white" />
        </FormGroup>
        <FormGroup className="mb-0">
          <Label>Phone</Label>
          <Input name="phone" value={personalInfo.phone} onChange={handleChange} className="bg-white" />
        </FormGroup>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <FormGroup className="mb-0">
          <Label>Location</Label>
          <Input name="location" value={personalInfo.location} onChange={handleChange} className="bg-white" />
        </FormGroup>
        <FormGroup className="mb-0">
          <Label>Website / Link</Label>
          <Input name="website" value={personalInfo.website} onChange={handleChange} className="bg-white" />
        </FormGroup>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <FormGroup className="mb-0">
          <Label>LinkedIn</Label>
          <Input name="linkedin" value={personalInfo.linkedin} onChange={handleChange} className="bg-white" />
        </FormGroup>
        <FormGroup className="mb-0">
          <Label>GitHub</Label>
          <Input name="github" value={personalInfo.github || ''} onChange={handleChange} className="bg-white" />
        </FormGroup>
      </div>
      <FormGroup className="mb-0 text-xs">
        <Label>Summary</Label>
        <Textarea name="summary" rows={3} value={personalInfo.summary} onChange={handleChange} className="bg-white" />
      </FormGroup>
    </div>
  );
};
