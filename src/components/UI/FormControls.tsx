import React from 'react';

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className={`w-full p-2 text-[13px] border border-slate-200 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50 transition-colors ${props.className || ''}`}
  />
);

export const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...props}
    className={`w-full p-2 text-[13px] border border-slate-200 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50 transition-colors ${props.className || ''}`}
  />
);

export const Label = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <label className={`block text-[11px] font-semibold text-slate-500 uppercase mb-1 tracking-wide ${className}`}>
    {children}
  </label>
);

export const FormGroup = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`mb-3 ${className}`}>
    {children}
  </div>
);
