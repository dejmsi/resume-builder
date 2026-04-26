import React from 'react';
import { useAppContext } from '../../AppContext';
import { Label, FormGroup } from '../UI/FormControls';

export const SettingsForm = () => {
  const { state, updateSettings } = useAppContext();
  const { settings } = state;

  const fontOptions = [
    { value: 'font-sans', label: 'Inter (Sans)' },
    { value: 'font-serif', label: 'Merriweather (Serif)' },
    { value: 'font-mono', label: 'Fira Code (Mono)' },
  ];

  const colorOptions = [
    { value: '#0f172a', label: 'Slate' },
    { value: '#1e3a8a', label: 'Navy' },
    { value: '#4f46e5', label: 'Indigo' },
    { value: '#0f766e', label: 'Teal' },
    { value: '#b91c1c', label: 'Red' },
    { value: '#ea580c', label: 'Orange' },
  ];

  return (
    <div className="space-y-5">
      <FormGroup>
        <Label>Template</Label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {['modern', 'classic'].map((tpl) => (
            <button
              key={tpl}
              onClick={() => updateSettings({ template: tpl as any })}
              className={`p-2.5 border rounded-md text-xs font-bold uppercase tracking-widest transition-all ${
                settings.template === tpl 
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-700 ring-1 ring-indigo-600' 
                  : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-white'
              }`}
            >
              {tpl}
            </button>
          ))}
        </div>
      </FormGroup>

      <FormGroup>
        <Label>Font Family</Label>
        <select
          value={settings.fontFamily}
          onChange={(e) => updateSettings({ fontFamily: e.target.value })}
          className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-sm text-slate-700"
        >
          {fontOptions.map(font => (
            <option key={font.value} value={font.value}>{font.label}</option>
          ))}
        </select>
      </FormGroup>

      <FormGroup>
        <Label>Theme Color</Label>
        <div className="flex flex-wrap gap-2.5 mt-2">
          {colorOptions.map((color) => (
            <button
              key={color.value}
              onClick={() => updateSettings({ primaryColor: color.value })}
              className={`w-8 h-8 rounded-md border-2 transition-transform ${
                settings.primaryColor === color.value ? 'scale-110 border-indigo-200' : 'border-transparent'
              }`}
              style={{ backgroundColor: color.value }}
              title={color.label}
            />
          ))}
        </div>
      </FormGroup>
    </div>
  );
};
