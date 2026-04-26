import React from 'react';
import { AppState } from '../../types';

export const ModernTemplate = ({ data, settings }: { data: AppState['data'], settings: AppState['settings'] }) => {
  return (
    <div className={`p-8 md:p-10 flex flex-col h-full print:h-auto print:p-0 bg-white text-slate-800 ${settings.fontFamily}`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight uppercase text-slate-900" style={{ color: settings.primaryColor }}>
            {data.personalInfo.firstName} {data.personalInfo.lastName}
          </h3>
          <p className="font-semibold text-xs tracking-widest uppercase mt-0.5 text-slate-500">
            {data.personalInfo.jobTitle}
          </p>
        </div>
        <div className="text-right text-[11px] text-slate-500 space-y-0.5">
          {data.personalInfo.location && <p>{data.personalInfo.location}</p>}
          {data.personalInfo.email && <p><a href={`mailto:${data.personalInfo.email}`} className="hover:text-slate-800 transition-colors">{data.personalInfo.email}</a></p>}
          {data.personalInfo.phone && <p><a href={`tel:${data.personalInfo.phone}`} className="hover:text-slate-800 transition-colors">{data.personalInfo.phone}</a></p>}
          {data.personalInfo.website && <p><a href={data.personalInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-slate-800 transition-colors">{data.personalInfo.website.replace(/^https?:\/\//, '')}</a></p>}
          {data.personalInfo.linkedin && <p><a href={data.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-800 transition-colors">{data.personalInfo.linkedin.replace(/^https?:\/\//, '')}</a></p>}
          {data.personalInfo.github && <p><a href={data.personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-800 transition-colors">{data.personalInfo.github.replace(/^https?:\/\//, '')}</a></p>}
        </div>
      </div>

      {/* Hidden ATS Keywords (Invisible but machine readable) */}
      {data.personalInfo.atsContent && (
        <div className="absolute top-0 left-0 w-0 h-0 overflow-hidden text-[1px] text-transparent select-none z-[-1] opacity-0 print:opacity-100 print:text-[#ffffff]">
          {data.personalInfo.atsContent}
        </div>
      )}

      {data.personalInfo.summary && (
        <div className="flex gap-4 mb-6 print:break-inside-avoid">
           <div className="w-24 shrink-0 border-r border-slate-100">
             <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Profile</h4>
           </div>
          <div className="flex-1">
            <p className="text-[13px] text-slate-600 leading-relaxed tabular-nums">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-6">
        {data.experience.length > 0 && (
          <div className="flex gap-4">
            <div className="w-24 shrink-0 border-r border-slate-100">
              <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Experience</h4>
            </div>
            <div className="flex-1 space-y-4">
              {data.experience.map(exp => (
                <div key={exp.id} className="space-y-1 print:break-inside-avoid">
                  <div className="flex justify-between items-center">
                    <span className="text-[13px] font-bold text-slate-800">{exp.role}</span>
                    <span className="text-[10px] text-slate-400 font-medium italic">{exp.startDate} – {exp.endDate}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">{exp.company}</p>
                  {exp.description && (
                    <p className="text-[12px] text-slate-600 leading-relaxed whitespace-pre-line mt-1">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {data.skills.length > 0 && (
          <div className="flex gap-4 print:break-inside-avoid">
            <div className="w-24 shrink-0 border-r border-slate-100">
              <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Skills</h4>
            </div>
            <div className="flex-1 text-[11px] text-slate-600 leading-relaxed">
              {data.skills.map((skill) => skill.name).join(' • ')}
            </div>
          </div>
        )}

        {(data.certifications || []).length > 0 && (
          <div className="flex gap-4 print:break-inside-avoid">
            <div className="w-24 shrink-0 border-r border-slate-100">
               <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Certifications</h4>
            </div>
            <div className="flex-1 space-y-2">
              {(data.certifications || []).map(cert => (
                <div key={cert.id} className="flex justify-between items-start">
                  <span className="text-[12px] font-bold text-slate-800">{cert.name}</span>
                  <span className="text-[10px] text-slate-400 italic">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.education.length > 0 && (
          <div className="flex gap-4">
            <div className="w-24 shrink-0 border-r border-slate-100">
               <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Education</h4>
            </div>
            <div className="flex-1 space-y-3">
              {data.education.map(edu => (
                <div key={edu.id} className="print:break-inside-avoid">
                  <div className="flex justify-between items-start">
                    <span className="text-[12px] font-bold text-slate-800">{edu.degree}</span>
                    <span className="text-[10px] text-slate-400 italic">{edu.startDate} – {edu.endDate}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {(data.hobbies || []).length > 0 && (
          <div className="flex gap-4 print:break-inside-avoid">
            <div className="w-24 shrink-0 border-r border-slate-100">
               <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Interests</h4>
            </div>
            <div className="flex-1 text-[11px] text-slate-600 leading-relaxed">
              {(data.hobbies || []).map((h) => h.name).join(' • ')}
            </div>
          </div>
        )}
      </div>

      <div className="mt-auto pt-6 border-t border-slate-100 flex justify-center">
        <div className="flex gap-3 opacity-40">
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: settings.primaryColor }}></div>
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: settings.primaryColor }}></div>
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: settings.primaryColor }}></div>
        </div>
      </div>
    </div>
  );
};
