import React from 'react';
import { AppState } from '../../types';

export const MinimalTemplate = ({ data, settings }: { data: AppState['data'], settings: AppState['settings'] }) => {
  return (
    <div className={`max-w-4xl mx-auto bg-white p-8 print:p-0 print:h-auto print:max-w-none shadow-sm ${settings.fontFamily}`}>
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold uppercase tracking-widest text-gray-900 mb-1" style={{ color: settings.primaryColor }}>
          {data.personalInfo.firstName} {data.personalInfo.lastName}
        </h1>
        <p className="text-lg text-gray-600 font-light tracking-wide mb-3">{data.personalInfo.jobTitle}</p>
        <div className="flex flex-wrap justify-center gap-3 text-[13px] text-gray-500">
          {data.personalInfo.email && <span><a href={`mailto:${data.personalInfo.email}`} className="hover:text-gray-900 transition-colors">{data.personalInfo.email}</a></span>}
          {data.personalInfo.phone && <span>• <a href={`tel:${data.personalInfo.phone}`} className="hover:text-gray-900 transition-colors">{data.personalInfo.phone}</a></span>}
          {data.personalInfo.location && <span>• {data.personalInfo.location}</span>}
          {data.personalInfo.website && <span>• <a href={data.personalInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">{data.personalInfo.website.replace(/^https?:\/\//, '')}</a></span>}
          {data.personalInfo.linkedin && <span>• <a href={data.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">{data.personalInfo.linkedin.replace(/^https?:\/\//, '')}</a></span>}
          {data.personalInfo.github && <span>• <a href={data.personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">{data.personalInfo.github.replace(/^https?:\/\//, '')}</a></span>}
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
          <p className="text-gray-700 leading-relaxed text-center text-[13px]">{data.personalInfo.summary}</p>
        </section>
      )}

      {data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 border-b pb-1.5">Experience</h2>
          <div className="space-y-5">
            {data.experience.map((exp) => (
              <div key={exp.id} className="print:break-inside-avoid">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-[15px] font-semibold text-gray-800">{exp.role}</h3>
                  <span className="text-[12px] text-gray-500">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-[13px] font-medium mb-1.5" style={{ color: settings.primaryColor }}>{exp.company}</p>
                <p className="text-gray-600 whitespace-pre-line text-[13px] leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 border-b pb-1.5">Education</h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id} className="print:break-inside-avoid">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-[15px] font-semibold text-gray-800">{edu.institution}</h3>
                  <span className="text-[12px] text-gray-500">{edu.startDate} - {edu.endDate}</span>
                </div>
                <p className="text-gray-600 text-[13px]">{edu.degree}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-8">
        {(data.certifications || []).length > 0 && (
          <section className="mb-6 print:break-inside-avoid">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 border-b pb-1.5">Certifications</h2>
            <div className="space-y-2">
              {(data.certifications || []).map((cert) => (
                <div key={cert.id} className="flex justify-between items-baseline text-[13px]">
                  <span className="font-semibold text-gray-800">{cert.name}</span>
                  <span className="text-gray-500 text-[11px]">{cert.date}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {(data.hobbies || []).length > 0 && (
          <section className="mb-6 print:break-inside-avoid">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 border-b pb-1.5">Interests</h2>
            <div className="text-[13px] text-gray-700 leading-relaxed">
              {(data.hobbies || []).map((hobby) => hobby.name).join(' • ')}
            </div>
          </section>
        )}
      </div>

      {data.skills.length > 0 && (
        <section className="print:break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 border-b pb-1.5">Skills</h2>
          <div className="text-[12px] text-gray-700 leading-relaxed">
            {data.skills.map((skill, idx) => (
              <React.Fragment key={skill.id}>
                <span>{skill.name}</span>
                {idx < data.skills.length - 1 && <span className="text-gray-300 mx-2">•</span>}
              </React.Fragment>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
