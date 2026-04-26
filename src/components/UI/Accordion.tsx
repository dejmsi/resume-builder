import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionSectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const AccordionSection = ({ title, icon, children, defaultOpen = false }: AccordionSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border rounded-md overflow-hidden transition-colors ${isOpen ? 'border-indigo-100 bg-white' : 'border-slate-200 bg-slate-50/50 hover:border-slate-300'}`}>
      <button
        className={`w-full flex items-center justify-between p-3 transition-colors ${isOpen ? 'bg-indigo-50/30' : 'hover:bg-slate-50'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">{title}</span>
        </div>
        {isOpen ? <ChevronUp size={14} className="text-slate-400" /> : <ChevronDown size={14} className="text-slate-400" />}
      </button>
      {isOpen && (
        <div className="p-4 border-t border-indigo-50">
          {children}
        </div>
      )}
    </div>
  );
};
