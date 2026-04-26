import React from 'react';
import { useAppContext } from '../../AppContext';
import { Input, Textarea, Label, FormGroup } from '../UI/FormControls';
import { Trash2, Plus } from 'lucide-react';

export const ExperienceForm = () => {
  const { state, addExperience, updateExperience, removeExperience } = useAppContext();
  const { experience } = state.data;

  const handleAdd = () => {
    addExperience({
      id: Date.now().toString(),
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      description: ''
    });
  };

  return (
    <div className="space-y-4">
      {experience.map((exp, index) => (
        <div key={exp.id} className="p-4 border border-slate-200 rounded-lg bg-slate-50 relative group shadow-sm">
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => removeExperience(exp.id)}
              className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded bg-white border border-slate-200 shadow-sm transition-colors"
              title="Remove Experience"
            >
              <Trash2 size={14} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-3">
            <FormGroup className="mb-0">
              <Label>Company</Label>
              <Input 
                value={exp.company} 
                onChange={(e) => updateExperience(exp.id, { company: e.target.value })} 
                className="bg-white"
              />
            </FormGroup>
            <FormGroup className="mb-0">
              <Label>Role</Label>
              <Input 
                value={exp.role} 
                onChange={(e) => updateExperience(exp.id, { role: e.target.value })} 
                className="bg-white"
              />
            </FormGroup>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-3">
            <FormGroup className="mb-0">
              <Label>Start Date</Label>
              <Input 
                value={exp.startDate} 
                onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })} 
                placeholder="e.g. 2020"
                className="bg-white"
              />
            </FormGroup>
            <FormGroup className="mb-0">
              <Label>End Date</Label>
              <Input 
                value={exp.endDate} 
                onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })} 
                placeholder="e.g. Present"
                className="bg-white"
              />
            </FormGroup>
          </div>

          <FormGroup className="mb-0">
            <Label>Description</Label>
            <Textarea 
              rows={3} 
              value={exp.description} 
              onChange={(e) => updateExperience(exp.id, { description: e.target.value })} 
              className="bg-white"
              placeholder="Describe your responsibilities and achievements..."
            />
          </FormGroup>
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
