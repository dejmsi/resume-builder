import React from 'react';
import { useAppContext } from '../../AppContext';
import { Input, Label, FormGroup } from '../UI/FormControls';
import { Trash2, Plus } from 'lucide-react';

export const EducationForm = () => {
  const { state, addEducation, updateEducation, removeEducation } = useAppContext();
  const { education } = state.data;

  const handleAdd = () => {
    addEducation({
      id: Date.now().toString(),
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
    });
  };

  return (
    <div className="space-y-4">
      {education.map((edu) => (
        <div key={edu.id} className="p-4 border border-slate-200 rounded-lg bg-slate-50 relative group shadow-sm">
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => removeEducation(edu.id)}
              className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded bg-white border border-slate-200 shadow-sm transition-colors"
              title="Remove Education"
            >
              <Trash2 size={14} />
            </button>
          </div>
          
          <FormGroup className="mb-3">
            <Label>Institution</Label>
            <Input 
              value={edu.institution} 
              onChange={(e) => updateEducation(edu.id, { institution: e.target.value })} 
              className="bg-white"
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Label>Degree & Major</Label>
            <Input 
              value={edu.degree} 
              onChange={(e) => updateEducation(edu.id, { degree: e.target.value })} 
              className="bg-white"
            />
          </FormGroup>
          
          <div className="grid grid-cols-2 gap-3 mb-1">
            <FormGroup className="mb-0">
              <Label>Start Date</Label>
              <Input 
                value={edu.startDate} 
                onChange={(e) => updateEducation(edu.id, { startDate: e.target.value })} 
                className="bg-white"
              />
            </FormGroup>
            <FormGroup className="mb-0">
              <Label>End Date</Label>
              <Input 
                value={edu.endDate} 
                onChange={(e) => updateEducation(edu.id, { endDate: e.target.value })} 
                className="bg-white"
              />
            </FormGroup>
          </div>
        </div>
      ))}

      <button
        onClick={handleAdd}
        className="w-full py-2.5 border border-dashed border-slate-300 rounded-md text-xs font-bold text-indigo-600 hover:bg-slate-50 hover:border-indigo-300 flex items-center justify-center gap-1.5 transition-colors uppercase tracking-widest mt-4"
      >
        <Plus size={16} /> Add Item
      </button>
    </div>
  );
};
