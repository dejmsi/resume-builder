/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AppProvider } from './AppContext';
import { Editor } from './components/Editor/Editor';
import { ResumePreview } from './components/Templates/ResumePreview';

export default function App() {
  return (
    <AppProvider>
      <div className="flex h-screen overflow-hidden bg-[#F8FAFC] text-slate-800 font-sans print:h-auto print:overflow-visible print:block">
        {/* Print rules should hide the sidebar completely, see index.css */}
        <div className="w-[420px] border-r border-slate-200 bg-white shrink-0 print:hidden z-10 flex flex-col shadow-xl">
          <Editor />
        </div>
        <div className="flex-1 h-screen overflow-hidden relative print:overflow-visible print:h-auto print:static print:block bg-slate-200/50 print:bg-white">
          <ResumePreview />
        </div>
      </div>
    </AppProvider>
  );
}

