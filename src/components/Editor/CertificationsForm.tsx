import React from 'react';
import { useAppContext } from '../../AppContext';
import { Input, FormGroup, Label } from '../UI/FormControls';
import { Plus, Trash2 } from 'lucide-react';

export const CertificationsForm = () => {
  const { state, addCertification, updateCertification, removeCertification } = useAppContext();
  const certifications = state.data.certifications || [];

  const handleAdd = () => {
    addCertification({
      id: Date.now().toString(),
      name: '',
      date: '',
    });
  };

  return (
    <div className="space-y-4">
      {certifications.map((cert) => (
        <div key={cert.id} className="p-3 border border-slate-200 rounded-lg bg-slate-50 relative group shadow-sm flex items-center gap-2">
          <Input 
            value={cert.name} 
            onChange={(e) => updateCertification(cert.id, { name: e.target.value })} 
            placeholder="Certification Name"
            className="flex-1 bg-white"
          />
          <Input 
            value={cert.date} 
            onChange={(e) => updateCertification(cert.id, { date: e.target.value })} 
            placeholder="Year/Date"
            className="w-24 shrink-0 bg-white"
          />
          <button
            onClick={() => removeCertification(cert.id)}
            className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded bg-white border border-slate-200 shadow-sm transition-colors"
            title="Remove"
          >
            <Trash2 size={14} />
          </button>
        </div>
      ))}

      <button
        onClick={handleAdd}
        className="w-full py-2.5 border border-dashed border-slate-300 rounded-md text-xs font-bold text-indigo-600 hover:bg-slate-50 hover:border-indigo-300 flex items-center justify-center gap-1.5 transition-colors uppercase tracking-widest mt-4"
      >
        <Plus size={16} /> Add Certification
      </button>
    </div>
  );
};
