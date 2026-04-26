import React from 'react';
import { useAppContext } from '../../AppContext';
import { MinimalTemplate } from './MinimalTemplate';
import { ModernTemplate } from './ModernTemplate';
import { ClassicTemplate } from './ClassicTemplate';

export const ResumePreview = () => {
  const { state } = useAppContext();

  const renderTemplate = () => {
    switch (state.settings.template) {
      case 'minimal':
        return <MinimalTemplate data={state.data} settings={state.settings} />;
      case 'classic':
        return <ClassicTemplate data={state.data} settings={state.settings} />;
      case 'modern':
      default:
        // By default use Modern (Clean Minimalism)
        return <ModernTemplate data={state.data} settings={state.settings} />;
    }
  };

  return (
    <div className="h-full overflow-y-auto p-4 md:p-8 flex justify-center items-start print:p-0 print:block">
      {/* 
        A4 proportion wrapper 
        A4 is 210x297mm. The ratio is ~1:1.414.
      */}
      <div className="w-full max-w-[850px] min-h-[1202px] bg-white shadow-2xl rounded-sm print:shadow-none print:max-w-none print:w-full print:h-auto origin-top transition-all">
        {renderTemplate()}
      </div>
    </div>
  );
};
