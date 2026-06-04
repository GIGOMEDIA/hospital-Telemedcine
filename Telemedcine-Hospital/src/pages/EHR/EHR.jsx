import React, { useState } from "react";
import { 
  Search, 
  Mic, 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Stethoscope, 
  Activity 
} from "lucide-react";

// Data Constants
const TABS = ["All", "Tests", "Advice", "Labs", "Docs"];
const DAYS = ["Mon", "Tue", "Wed", "Thur", "Fri"];

const PATIENTS = [
  {
    id: 1,
    name: "Yinusa Grace",
    role: "Admin",
    avatar: "YG",
    avatarColor: "bg-emerald-500",
    type: "Test",
    label: "Echocardiogram",
    date: "5 Feb",
    icon: Heart, // Lucide Component reference
    iconBg: "bg-emerald-50",
  },
  {
    id: 2,
    name: "DR. Yinusa Grace",
    role: "Cardiologist",
    avatar: "DY",
    avatarColor: "bg-blue-500",
    type: "Blood Group",
    label: "Test",
    date: "6 Feb",
    icon: Stethoscope, // Lucide Component reference
    iconBg: "bg-emerald-50", // Standardized to soft emerald accent
    highlight: true,
  },
  {
    id: 3,
    name: "DR. Yinusa Grace",
    role: "Cardiologist",
    avatar: "DY",
    avatarColor: "bg-purple-500",
    type: "X-Ray",
    label: "Test",
    date: "7 Feb",
    icon: Activity, // Lucide Component reference
    iconBg: "bg-emerald-50", // Standardized to soft emerald accent
  },
];

const CALENDAR = [
  { 
    day: "Mon", 
    date: 2, 
    time: "3:32 pm", 
    events: ["3 Tests"], 
    color: "bg-[#D9D9D9] border-transparent text-gray-800", 
    dotColor: "bg-[#8CA296]"
  },
  { 
    day: "Tue", 
    date: 3, 
    time: "4:32 pm", 
    events: ["Vitamin C"], 
    color: "bg-white border-gray-100/80 shadow-xs", 
    icon: "🍊", 
    dotColor: "bg-amber-400",
    hasStatusAvatars: true 
  },
  { 
    day: "Wed", 
    date: 4, 
    time: "5:02 pm", 
    events: ["Omega 3"], 
    color: "bg-white border-gray-100/80 shadow-xs", 
    icon: "🌟", 
    dotColor: "bg-yellow-400",
    hasStatusAvatars: true 
  },
  { 
    day: "Thur", 
    date: 5, 
    time: "2:22 pm", 
    events: ["1 Advice"], 
    color: "bg-[#107C41] border-transparent text-white shadow-sm", 
    dotColor: "bg-[#094F29]", 
    active: true 
  },
  { 
    day: "Fri", 
    date: 6, 
    time: "1:00 pm", 
    events: ["Aflubin"], 
    color: "bg-white border-gray-100/80 shadow-xs", 
    icon: "🧱", 
    dotColor: "bg-amber-500",
    hasStatusAvatars: true 
  },
];

// Sub-Component: Individual Patient/Test Card
function PatientCard({ patient }) {
  // Extracting the dynamic Lucide icon component out of the loop safely
  const IconComponent = patient.icon;

  return (
    <div
      className={`rounded-2xl p-5 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:shadow-md border ${
        patient.highlight
          ? "bg-green-500 text-white shadow-lg shadow-green-100 border-transparent"
          : "bg-white border-gray-100/80"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-sm ${patient.avatarColor}`}>
          {patient.avatar}
        </div>
        <div className="min-w-0">
          <p className={`text-xs font-bold tracking-wide truncate ${patient.highlight ? "text-white" : "text-gray-900"}`}>
            {patient.name}
          </p>
          <p className={`text-[11px] mt-0.5 font-medium ${patient.highlight ? "text-green-100/90" : "text-gray-400"}`}>
            {patient.role}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className={`text-[11px] font-bold tracking-wider uppercase ${patient.highlight ? "text-green-100/80" : "text-gray-400"}`}>
          {patient.type}
        </p>
        <h3 className={`text-base font-bold mt-0.5 leading-snug ${patient.highlight ? "text-white" : "text-gray-900"}`}>
          {patient.label}
        </h3>
        <p className={`text-[11px] mt-1 font-medium ${patient.highlight ? "text-green-100/80" : "text-gray-400"}`}>
          {patient.date}
        </p>
      </div>

      {/* RENDER DYNAMIC LUCIDE ICONS WRAPPED IN GREEN BACKDROP CONFIGURATION */}
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mt-4 border border-transparent ${
        patient.highlight ? "bg-white/20 text-white" : `${patient.iconBg} text-[#107C41]`
      }`}>
        <IconComponent size={20} strokeWidth={2.2} />
      </div>
    </div>
  );
}

// Sub-Component: Bottom Calendar Section
function CalendarSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center bg-white text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-all shadow-sm active:scale-95">
          <ChevronLeft size={16} strokeWidth={2.5} />
        </button>
        <span className="text-xl font-bold font-serif text-gray-900 px-1">
          May, <span className="text-gray-400 font-normal">2024</span>
        </span>
        <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center bg-white text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-all shadow-sm active:scale-95">
          <ChevronRight size={16} strokeWidth={2.5} />
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-2">
        {DAYS.map((d) => (
          <p key={d} className="text-[11px] font-bold uppercase tracking-wider text-gray-400 text-left pl-1">
            {d}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {CALENDAR.map((c) => (
          <div
            key={c.date}
            className={`border rounded-[22px] p-4 flex flex-col justify-between min-h-[125px] transition-all duration-200 ${c.color}`}
          >
            <div className="flex justify-between items-start w-full">
              <span className="text-xl font-extrabold tracking-tight leading-none">
                {c.date}
              </span>
              <span className={`text-[10px] font-medium tracking-tight ${c.active ? "text-green-100/90" : "text-gray-400"}`}>
                {c.time}
              </span>
            </div>

            <div className="mt-auto flex items-center justify-between w-full gap-2">
              {c.events.map((ev) => (
                <div key={ev} className="flex items-center gap-2">
                  {c.icon ? (
                    <div className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center text-[10px] border border-gray-100 shadow-2xs">
                      {c.icon}
                    </div>
                  ) : (
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dotColor}`} />
                  )}
                  <span className={`text-[11px] font-bold tracking-wide whitespace-nowrap ${c.active ? "text-[#083A1F]" : "text-gray-800"}`}>
                    {ev}
                  </span>
                </div>
              ))}

              {c.hasStatusAvatars && (
                <div className="flex -space-x-1.5 overflow-hidden flex-shrink-0 items-center">
                  <div className="w-4 h-4 rounded-full bg-[#FFE8D1] text-[#E67E22] text-[8px] font-black border border-white flex items-center justify-center shadow-2xs select-none">
                    !
                  </div>
                  <div className="w-4 h-4 rounded-full bg-black text-amber-400 text-[8px] border border-white flex items-center justify-center shadow-2xs select-none">
                    🌙
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Sub-Component: Side Content Action Bar
function RightPanel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 h-full">
      <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm flex flex-col justify-between min-h-[200px]">
        <div className="text-center space-y-2 max-w-[220px] mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 font-serif">What do you need?</h2>
          <p className="text-xs text-gray-400 leading-relaxed font-medium">
            What do you lorem ipsum du duid u lorem ipsum du duid ud rimch capmu eclabusha sht toak mangu need?
          </p>
        </div>

        <div className="flex justify-center my-4">
          <button className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center shadow-md shadow-green-100 hover:bg-green-600 transition-all active:scale-95">
            <Mic size={20} className="text-white" />
          </button>
        </div>

        <div className="relative flex items-center bg-[#F8F9FA] border border-gray-200/80 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-green-500/20 focus-within:border-green-500 transition-all">
          <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mr-2">
            <span className="text-green-600 text-xs">🔊</span>
          </div>
          <input
            type="text"
            placeholder="Angstrom and structure..."
            className="bg-transparent text-xs text-gray-800 font-semibold placeholder-gray-400 outline-none flex-1 min-w-0"
            readOnly
          />
          <button className="text-gray-400 hover:text-gray-700 transition-colors flex-shrink-0 ml-1">
            <Search size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[220px] lg:flex-1">
        <div className="relative z-10 space-y-5 pb-2">
          <div>
            <span className="text-4xl font-black text-gray-900 block leading-none font-serif">B</span>
            <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-1 block">Structure</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-gray-900 block leading-none">22.4</span>
            <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-1 block">Angstrom</span>
          </div>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
          {["❤️", "📋", "✕"].map((icon, i) => (
            <button key={i} className="w-8 h-8 rounded-xl bg-gray-50/80 border border-gray-100 flex items-center justify-center text-xs hover:bg-gray-100 shadow-sm backdrop-blur-xs transition-colors active:scale-95">
              {icon}
            </button>
          ))}
        </div>

        <div className="absolute right-12 bottom-0 top-0 w-1/2 flex items-center justify-end pointer-events-none select-none">
          <svg viewBox="0 0 100 160" className="w-full h-full stroke-[5] fill-none stroke-linecap-round">
            <path d="M20,10 Q80,45 20,80 T20,150" className="stroke-blue-500 drop-shadow-[0_2px_8px_rgba(59,130,246,0.25)]" />
            <path d="M80,10 Q20,45 80,80 T80,150" className="stroke-indigo-600 opacity-90 drop-shadow-[0_2px_8px_rgba(79,70,229,0.2)]" />
            <line x1="28" y1="23" x2="72" y2="18" className="stroke-blue-200 opacity-60 stroke-[2.5]" />
            <line x1="42" y1="50" x2="58" y2="50" className="stroke-blue-200 opacity-60 stroke-[2.5]" />
            <line x1="45" y1="75" x2="55" y2="75" className="stroke-indigo-200 opacity-60 stroke-[2.5]" />
            <line x1="28" y1="105" x2="72" y2="110" className="stroke-indigo-200 opacity-60 stroke-[2.5]" />
            <line x1="42" y1="135" x2="58" y2="135" className="stroke-blue-200 opacity-60 stroke-[2.5]" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Master Component Wrapper
export default function EHRContent() {
  const [activeTab, setActiveTab] = useState("Tests");

  return (
    <div className="bg-[#FAFAFA] min-h-screen p-4 sm:p-6 lg:p-8 text-gray-800 font-sans selection:bg-emerald-100">
      
      {/* HEADER SECTION CARD */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 mb-5 shadow-sm">
        <div className="flex items-start gap-4 mb-6">
          <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center bg-white text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-all shadow-sm active:scale-95 flex-shrink-0 mt-0.5">
            <ChevronLeft size={16} strokeWidth={2.5} />
          </button>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight font-serif">
            Personal Tests<br className="hidden sm:block" /> and Analysis
          </h1>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-150 ease-in-out flex-shrink-0 active:scale-95 ${
                  isActive
                    ? "bg-[#EAEAEA] text-gray-900 font-extrabold shadow-inner-xs"
                    : "bg-white text-gray-700 border border-transparent hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* LOWER RESPONSIVE GRID WRAPPER */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="flex-1 w-full min-w-0 flex flex-col gap-6">
          {/* Patient Cards Sub-Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PATIENTS.map((p) => (
              <PatientCard key={p.id} patient={p} />
            ))}
          </div>
          
          {/* Calendar Block Panel */}
          <div className="bg-white rounded-3xl border border-gray-100 p-5 sm:p-6 shadow-sm">
            <CalendarSection />
          </div>
        </div>

        <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 self-stretch lg:self-auto">
          <RightPanel />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

    </div>
  );
}