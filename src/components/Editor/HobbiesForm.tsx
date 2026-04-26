import React from 'react';
import { useAppContext } from '../../AppContext';
import { Input } from '../UI/FormControls';
import { Plus, X } from 'lucide-react';

export const HobbiesForm = () => {
  const { state, addHobby, updateHobby, removeHobby } = useAppContext();
  const hobbies = state.data.hobbies || [];

  const handleAdd = () => {
    addHobby({
      id: Date.now().toString(),
      name: '',
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2">
        {hobbies.map((hobby) => (
          <div key={hobby.id} className="flex items-center gap-2 bg-slate-50 p-2 rounded-md border border-slate-200 focus-within:ring-2 focus-within:ring-indigo-500/30">
            <input
              type="text"
              value={hobby.name}
              onChange={(e) => updateHobby(hobby.id, { name: e.target.value })}
              className="bg-transparent focus:outline-none text-xs text-slate-700 flex-1"
              placeholder="e.g. Photography, Hiking"
              autoFocus={!hobby.name}
            />
            <button
              onClick={() => removeHobby(hobby.id)}
              className="text-slate-400 hover:text-red-500 flex-shrink-0"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={handleAdd}
        className="w-full py-2.5 border border-dashed border-slate-300 rounded-md text-xs font-bold text-indigo-600 hover:border-indigo-300 hover:bg-slate-50 flex items-center justify-center gap-1 transition-colors uppercase tracking-widest"
      >
        <Plus size={14} /> Add Hobby / Interest
      </button>
    </div>
  );
};
