import React from 'react';
import { useAppContext } from '../../AppContext';
import { Input } from '../UI/FormControls';
import { X, Plus } from 'lucide-react';

export const SkillsForm = () => {
  const { state, addSkill, updateSkill, removeSkill } = useAppContext();
  const { skills } = state.data;

  const handleAdd = () => {
    addSkill({
      id: Date.now().toString(),
      name: '',
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div key={skill.id} className="flex items-center gap-1.5 bg-slate-100 pl-2 pr-1 py-1 rounded-md border border-slate-200 focus-within:ring-2 focus-within:ring-indigo-500/30">
            <input
              type="text"
              value={skill.name}
              onChange={(e) => updateSkill(skill.id, { name: e.target.value })}
              className="bg-transparent focus:outline-none text-[11px] text-slate-700 w-24 min-w-[60px]"
              placeholder="Skill name"
              autoFocus={!skill.name}
              style={{ width: `${Math.max(8, skill.name.length)}ch` }}
            />
            <button
              onClick={() => removeSkill(skill.id)}
              className="text-slate-400 hover:text-red-500 flex-shrink-0 p-0.5"
            >
              <X size={12} />
            </button>
          </div>
        ))}

        <button
          onClick={handleAdd}
          className="px-3 py-1.5 border border-dashed border-slate-300 rounded-md text-xs font-bold text-indigo-600 hover:border-indigo-300 hover:bg-slate-50 flex items-center gap-1 transition-colors uppercase tracking-widest"
        >
          <Plus size={14} /> Add
        </button>
      </div>
    </div>
  );
};
