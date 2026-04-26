import React from 'react';
import { AppState } from '../../types';

export const ClassicTemplate = ({ data, settings }: { data: AppState['data'], settings: AppState['settings'] }) => {
  return (
    <div className={`max-w-4xl mx-auto bg-white p-8 print:p-0 print:h-auto print:max-w-none shadow-sm ${settings.fontFamily}`}>
      <header className="border-b-2 mb-6 pb-4" style={{ borderColor: settings.primaryColor }}>
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-1">
          {data.personalInfo.firstName} {data.personalInfo.lastName}
        </h1>
        <h2 className="text-lg text-gray-600 mb-2">{data.personalInfo.jobTitle}</h2>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[13px] text-gray-600">
          {data.personalInfo.email && <span><a href={`mailto:${data.personalInfo.email}`} className="hover:text-gray-900 transition-colors">{data.personalInfo.email}</a></span>}
          {data.personalInfo.phone && <span>| <a href={`tel:${data.personalInfo.phone}`} className="hover:text-gray-900 transition-colors">{data.personalInfo.phone}</a></span>}
          {data.personalInfo.location && <span>| {data.personalInfo.location}</span>}
          {data.personalInfo.website && <span>| <a href={data.personalInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">{data.personalInfo.website.replace(/^https?:\/\//, '')}</a></span>}
          {data.personalInfo.linkedin && <span>| <a href={data.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">{data.personalInfo.linkedin.replace(/^https?:\/\//, '')}</a></span>}
          {data.personalInfo.github && <span>| <a href={data.personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">{data.personalInfo.github.replace(/^https?:\/\//, '')}</a></span>}
        </div>
      </header>

      {/* Hidden ATS Keywords (Invisible but machine readable) */}
      {data.personalInfo.atsContent && (
        <div className="absolute top-0 left-0 w-0 h-0 overflow-hidden text-[1px] text-transparent select-none z-[-1] opacity-0 print:opacity-100 print:text-[#ffffff]">
          {data.personalInfo.atsContent}
        </div>
      )}

      {data.personalInfo.summary && (
        <section className="mb-6 print:break-inside-avoid">
          <h3 className="text-[15px] font-bold uppercase tracking-wider mb-2 text-gray-800" style={{ color: settings.primaryColor }}>Professional Summary</h3>
          <p className="text-gray-700 leading-relaxed text-[13px]">{data.personalInfo.summary}</p>
        </section>
      )}

      {data.experience.length > 0 && (
        <section className="mb-6">
          <h3 className="text-[15px] font-bold uppercase tracking-wider mb-3 text-gray-800 border-b border-gray-200 pb-1" style={{ color: settings.primaryColor }}>Experience</h3>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id} className="print:break-inside-avoid">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h4 className="text-[15px] font-bold text-gray-900">{exp.role}</h4>
                  <span className="text-[12px] font-semibold text-gray-600">{exp.startDate} - {exp.endDate}</span>
                </div>
                <div className="italic text-gray-700 text-[13px] mb-1">{exp.company}</div>
                <p className="text-gray-600 whitespace-pre-line text-[13px] leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="flex gap-6">
        <div className="w-2/3">
          {data.education.length > 0 && (
            <section className="mb-6">
              <h3 className="text-[15px] font-bold uppercase tracking-wider mb-3 text-gray-800 border-b border-gray-200 pb-1" style={{ color: settings.primaryColor }}>Education</h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id} className="print:break-inside-avoid">
                    <div className="flex justify-between items-baseline mb-0.5">
                      <h4 className="text-[14px] font-bold text-gray-900">{edu.institution}</h4>
                      <span className="text-[12px] font-semibold text-gray-600">{edu.startDate} - {edu.endDate}</span>
                    </div>
                    <div className="text-gray-700 text-[13px]">{edu.degree}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {(data.certifications || []).length > 0 && (
            <section className="mb-6 print:break-inside-avoid">
              <h3 className="text-[15px] font-bold uppercase tracking-wider mb-3 text-gray-800 border-b border-gray-200 pb-1" style={{ color: settings.primaryColor }}>Certifications</h3>
              <div className="space-y-2">
                {(data.certifications || []).map((cert) => (
                  <div key={cert.id} className="flex justify-between items-baseline">
                    <h4 className="text-[13px] font-bold text-gray-900">{cert.name}</h4>
                    <span className="text-[11px] text-gray-500">{cert.date}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
        
        <div className="w-1/3">
          {data.skills.length > 0 && (
            <section className="mb-6 print:break-inside-avoid">
              <h3 className="text-[15px] font-bold uppercase tracking-wider mb-3 text-gray-800 border-b border-gray-200 pb-1" style={{ color: settings.primaryColor }}>Skills</h3>
              <div className="text-[12px] text-gray-700 leading-relaxed">
                {data.skills.map((skill, i) => (
                  <React.Fragment key={skill.id}>
                    {skill.name}{i < data.skills.length - 1 ? ', ' : ''}
                  </React.Fragment>
                ))}
              </div>
            </section>
          )}

          {(data.hobbies || []).length > 0 && (
            <section className="mb-6 print:break-inside-avoid">
              <h3 className="text-[15px] font-bold uppercase tracking-wider mb-3 text-gray-800 border-b border-gray-200 pb-1" style={{ color: settings.primaryColor }}>Interests</h3>
              <ul className="list-disc list-inside text-[12px] text-gray-700 space-y-0.5">
                {(data.hobbies || []).map((hobby) => (
                  <li key={hobby.id} className="leading-relaxed">{hobby.name}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
