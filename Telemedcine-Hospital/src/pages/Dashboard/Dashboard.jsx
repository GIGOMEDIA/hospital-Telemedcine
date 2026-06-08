import React from 'react';
import {
    BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
    XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';

const overallAppointmentData = [
    { time: '8:00', value: 30 }, { time: '9:00', value: 55 },
    { time: '10:00', value: 40 }, { time: '11:00', value: 90 },
    { time: '12:00', value: 60 }, { time: '1:00', value: 25 },
    { time: '2:00', value: 70 }, { time: '3:00', value: 50 },
    { time: '4:00', value: 85 }, { time: '5:00', value: 45 },
];

const patientsPaceData = [
    { x: 1, new: 30, return: 50, vip: 20 }, { x: 2, new: 60, return: 30, vip: 45 },
    { x: 3, new: 40, return: 70, vip: 60 }, { x: 4, new: 80, return: 40, vip: 30 },
    { x: 5, new: 50, return: 90, vip: 70 }, { x: 6, new: 70, return: 60, vip: 50 },
    { x: 7, new: 40, return: 50, vip: 80 }, { x: 8, new: 60, return: 30, vip: 60 },
    { x: 9, new: 30, return: 70, vip: 40 }, { x: 10, new: 50, return: 55, vip: 65 },
];

const diagnosesData = [
    { label: 'Cold',       current: 559, total: 742, color: 'bg-[#10AD69]' },
    { label: 'Fracture',   current: 156, total: 249, color: 'bg-red-500'   },
    { label: 'Concussion', current: 84,  total: 120, color: 'bg-[#6366F1]' },
    { label: 'Heptatis',   current: 946, total: 950, color: 'bg-red-400'   },
];

const appointmentsOverviewData = [
    { name: 'Male',     value: 30, color: '#EAB308' },
    { name: 'Female',   value: 45, color: '#C084FC' },
    { name: 'Children', value: 25, color: '#60A5FA' },
];

const Dashboard = ({title}) => {
    return (
        <div className="p-6 bg-[#F8FAFC] min-h-screen w-full font-sans">
            <h1 className="text-3xl font-bold text-slate-800 mb-6">{title}</h1>
            {/* Main Grid Wrapper: 3 Columns on large screens */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1600px] mx-auto">

                {/* LEFT AND CENTER COLUMNS COMBINED GROUP */}
                <div className="lg:col-span-2 space-y-6">

                    {/* 1. TOP ROW: Next Patient & Laboratory Tests */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* CARD: Next Patient */}
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between min-h-[240px]">
                            <div className="bg-slate-50/60 px-5 py-3 flex justify-between items-center border-b border-slate-100">
                                <span className="font-semibold text-slate-700 text-sm tracking-wide">Next Patient</span>
                                <div className="flex space-x-2 text-slate-400 text-xs font-bold">
                                    <button className="hover:text-slate-600 px-1">&lt;</button>
                                    <button className="hover:text-slate-600 px-1">&gt;</button>
                                </div>
                            </div>

                            <div className="px-5 flex items-center space-x-4 my-4">
                                <img
                                    src="/image1.png"
                                    alt="Polly Richardson"
                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100"
                                />
                                <div className="flex-1">
                                    <h3 className="font-bold text-slate-800 text-sm tracking-tight">Polly Richardson</h3>
                                    <p className="text-xs text-slate-400 font-semibold mt-0.5">USG + Consultation</p>
                                </div>
                                <button className="w-9 h-9 rounded-full bg-[#E2F5ED] flex items-center justify-center text-[#22C55E] hover:bg-[#d1f0e2] transition-colors text-sm shadow-sm">
                                    <img src="Icon.png" alt="" />
                                </button>
                            </div>

                            <div className="mx-5 mb-4 px-1 py-3 border-t border-dashed border-slate-100 flex justify-between items-center text-xs text-slate-500 font-medium">
                                <div className="flex items-center space-x-1.5">
                                    <span>⏰</span>
                                    <span className="text-slate-700 font-bold">10:30</span>
                                </div>
                                <span className="font-bold text-slate-800 bg-slate-50 px-2 py-1 rounded-md">NGN 50,000</span>
                                <button className="text-slate-400 hover:text-slate-600 font-bold tracking-widest text-sm">•••</button>
                            </div>
                        </div>

                        {/* CARD: Laboratory Tests */}
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between min-h-[240px]">
                            <div className="bg-slate-50/60 px-5 py-3 flex justify-between items-center border-b border-slate-100">
                                <span className="font-semibold text-slate-700 text-sm tracking-wide">Laboratory tests</span>
                                <div className="flex space-x-2 text-slate-400 text-xs font-bold">
                                    <button className="hover:text-slate-600 px-1">&lt;</button>
                                    <button className="hover:text-slate-600 px-1">&gt;</button>
                                </div>
                            </div>

                            <div className="px-5 my-4">
                                <div className="flex items-center space-x-1 text-xs text-slate-400 mb-0">
                                    <span>🔗</span>
                                    <span className="font-semibold text-slate-600">Funke Akindele</span>
                                </div>
                                <div className="flex d-flex items-center justify-between space-x-2">
                                    <h3 className="font-bold text-slate-600 text-sm tracking-tight">Keeping Pregnant</h3>
                                    <button className="text-slate-400 hover:text-slate-600 font-bold tracking-widest  ">•••</button>
                                </div>
                                <div className="flex items-center space-x-2 mt-2">
                                    <span className="text-xs font-bold text-slate-500 bg-slate-50 px-2 py-0 rounded-md border border-slate-100">Prga test</span>
                                    <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse"></span>
                                </div>
                            </div>

                            <div className="px-2 mb-4 flex items-center justify-between gap-2">
                                <div className="flex space-x-2">
                                    <button className="px-3 py-1.5 text-xs font-bold rounded-lg bg-[#E2F5ED] text-[#22C55E] hover:opacity-90 shadow-sm transition-opacity">Details</button>
                                    <button className="px-3 py-1.5 text-xs font-bold rounded-lg bg-[#E2F5ED] border border-[#22C55E] text-[#22C55E] hover:bg-slate-200 transition-colors">Contact Patient</button>
                                </div>
                                <button className="px-3 py-1.5 text-xs font-bold rounded-lg bg-[#E2F5ED]  border-[#E2F5ED] text-[#22C55E] hover:bg-slate-200 transition-colors">Archive</button>
                            </div>
                        </div>

                    </div>

                    {/* 2. MIDDLE ROW: Direct manual public paths used here */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col min-h-[300px] max-w-md">

                            {/* Header Section with the divider line underneath */}
                            <div className="px-6 py-4 border-b border-slate-100">
                                <span className="font-semibold text-sm tracking-wide text-slate-700">Overall Appointment</span>
                            </div>

                            {/* Chart Container Area */}
                            <div className="flex-1 px-2 pt-4 pb-2">
                                <ResponsiveContainer width="100%" height={220}>
                                    <BarChart data={overallAppointmentData} barSize={10}>
                                        <XAxis dataKey="time" tick={{ fontSize: 10, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
                                        <YAxis hide={true} />
                                        <Tooltip cursor={{ fill: 'transparent' }} />
                                        <Bar dataKey="value" fill="#6366F1" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                        </div>

                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between min-h-[240px]">
                            <div className="bg-slate-50/60 px-5 py-3 flex justify-between items-center border-b border-slate-100">
                                <span className="font-semibold text-slate-700 text-sm tracking-wide">Patient Pace</span>
                            </div>

                            <div className="px-3 pt-3 pb-1">
                                <ResponsiveContainer width="100%" height={160}>
                                    <LineChart data={patientsPaceData}>
                                        <XAxis dataKey="x" hide={true} />
                                        <YAxis hide={true} />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="new"    stroke="#EF4444" strokeWidth={2.5} dot={false} />
                                        <Line type="monotone" dataKey="return" stroke="#EAB308" strokeWidth={2.5} dot={false} />
                                        <Line type="monotone" dataKey="vip"    stroke="#6366F1" strokeWidth={2.5} dot={false} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="px-5 pb-4 flex justify-between items-center text-[10px] text-slate-500 font-medium">
                                <div className="flex items-center gap-1.5">
                                    <span className="inline-block w-2 h-2 rounded-full bg-[#EF4444]" />
                                    <span className="text-slate-700">New Patient</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="inline-block w-2 h-2 rounded-full bg-[#EAB308]" />
                                    <span className="text-slate-800">Return patient</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="inline-block w-2 h-2 rounded-full bg-[#6366F1]" />
                                    <span className="text-slate-700">VIP Patient</span>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* </div> */}

                        {/* CHART: Patients Pace */}
                        {/* <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between min-h-[250px]">
              <div className="bg-slate-50/60 px-5 py-3 border-b border-slate-100">
                <h3 className="font-semibold text-slate-700 text-sm tracking-wide">Patients Pace</h3>
              </div>
              <div className="flex-1 p-3 flex items-center justify-center overflow-hidden">
                {/* Look here: pointing directly to public folder */}
                        {/* <img
                            src="/pace-chart.png"
                            alt="Patients Pace Chart"
                            className="w-full h-full object-contain"
                        /> */}
                    </div>


                    {/* </div>  */}

                    {/* </div> */}

                    {/* 3. BOTTOM ROW: Recent Questions & Confirmed Diagnoses */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* PANEL: Recent Questions */}
                        {/* PANEL: Recent Questions */}
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between">

                            {/* Re-arranged Header Area */}
                            <div className="bg-slate-50/60 px-5 py-3 border-b border-slate-100 space-y-2.5">
                                {/* 1. Title sits clearly at the top */}
                                <h3 className="font-semibold text-slate-700 text-sm tracking-wide">Recent Questions</h3>

                                {/* 2. Filter tabs moved cleanly right beneath the title */}
                                <div className="flex space-x-1 bg-white p-1 rounded-lg text-[10px] font-extrabold border border-slate-100 shadow-sm w-fit">
                                    <button className="px-3 py-1 text-slate-400 hover:text-slate-600 transition-colors">All</button>
                                    <button className="px-3 py-1 bg-[#EF4444] text-white rounded-md shadow-sm">Unread</button>
                                    <button className="px-3 py-1 text-slate-400 hover:text-slate-600 transition-colors">New</button>
                                </div>
                            </div>

                            {/* Question Content Body */}
                            <div className="px-5 py-4">
                                <div className="text-slate-400 text-[10px] font-bold mb-1">2 Nov 2024 / 01:05PM</div>
                                <h4 className="font-bold text-slate-800 text-sm leading-snug tracking-tight">
                                    Addiction blood bank bone marrow contagious disinfectants?
                                </h4>
                            </div>

                            {/* Card Bottom Actions */}
                            <div className="px-5 mb-4 flex justify-between items-center pt-2">
                                <div className="flex space-x-2 text-[10px] font-extrabold">
                                    <button className="px-3 py-1.5 bg-red-50 text-[#EF4444] rounded-lg hover:bg-red-100 transition-colors">Read more</button>
                                    <button className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors">Reply</button>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center text-[#EF4444] text-xs shadow-sm">
                                    <img src="/image 8.png" alt="" 
                                    className="w-4 h-full object-contain"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* PANEL: Confirmed Diagnoses */}
                        <div className="bg-white rounded-2xl border-2 border-blue-400 shadow-sm overflow-hidden">
                            <div className="bg-slate-50/60 px-5 py-3 border-b border-slate-100">
                                <h3 className="font-semibold text-slate-700 text-sm tracking-wide">Confirmed Diagnoses</h3>
                            </div>

                            <div className="p-5">
                                {diagnosesData.map(({ label, current, total, color }) => (
                                    <div key={label} className="mb-4">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-lg font-bold text-gray-900">{current} of {total}</span>
                                            <span className="text-sm text-gray-500 font-medium">{label}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`${color} h-2 rounded-full`}
                                                style={{ width: `${Math.round((current / total) * 100)}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>

                {/* 4. RIGHT COLUMN: Upcoming Appointments & Overview */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between h-full min-h-[680px]">

                        <div>
                            <div className="bg-slate-50/60 px-5 py-3 border-b border-slate-100 mb-4">
                                <h3 className="font-semibold text-slate-700 text-sm tracking-wide">Upcoming Appointments</h3>
                            </div>

                            {/* Calendar Days Header */}
                            <div className="mx-5 flex items-center justify-between bg-slate-50 p-2 rounded-xl mb-4 text-xs font-bold border border-slate-100">
                                <button className="text-slate-400 hover:text-slate-600 px-1">&lt;</button>
                                <div className="text-center text-slate-400"><p className="text-[9px]">Mon</p><p className="font-bold text-slate-600">3rd</p></div>
                                <div className="text-center text-slate-400"><p className="text-[9px]">Tue</p><p className="font-bold text-slate-600">4th</p></div>

                                {/* Active Selected Day Box */}
                                <div className="bg-[#22C55E] text-white px-2.5 py-1 rounded-lg text-center shadow-md flex items-center space-x-1">
                                    <span>📅</span>
                                    <div className="text-left">
                                        <p className="text-[7px] uppercase tracking-wider opacity-90 font-extrabold">Wednesday</p>
                                        <p className="font-extrabold text-[10px]">Nov 5th 2024</p>
                                    </div>
                                </div>

                                <div className="text-center text-slate-400"><p className="text-[9px]">Thu</p><p className="font-bold text-slate-600">6th</p></div>
                                <button className="text-slate-400 hover:text-slate-600 px-1">&gt;</button>
                            </div>

                            {/* Patient Feed Stack */}
                            <div className="px-5 space-y-3.5">
                                {([
                                    { name: 'Ademilola Joy', img: '/image2.png' },
                                    { name: 'Ademilola Joy', img: '/image2.png' },
                                    { name: 'Ademilola Joy', img: '/image2.png' }
                                ].map((user, index) =>
                                    <div key={index} className="p-3 rounded-xl border border-slate-100 bg-slate-50/20 shadow-sm">
                                        <div className="flex items-center space-x-3">
                                            <img src={user.img} alt={user.name} className="w-9 h-9 rounded-full object-cover bg-slate-100 ring-1 ring-slate-200" />
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-slate-800 text-xs tracking-tight">{user.name}</h4>
                                                <p className="text-[10px]   font-bold mt-0.5">Emergency Appointment</p>
                                            </div>
                                            <button className="w-7 h-7 rounded-full bg-[#E2F5ED] flex items-center justify-center text-[#22C55E] text-xs shadow-inner">  <img src="Icon.png" alt="" /></button>
                                        </div>
                                        <div className="flex justify-between items-center mt-2.5 pt-2 border-t border-dashed border-slate-100 text-[10px] text-slate-400 font-bold">
                                            <span className="flex items-center space-x-1"><img src="Icon (1).png" alt="" className="w-3.5" /> <span className="text-slate-600 ml-0.5">10:30</span></span>
                                            <span className="text-slate-800 font-bold bg-white px-1.5 py-0.5 rounded border border-slate-100">NGN 50,000</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Pie Chart representation */}
                        {/* <img  src="/appointments-overview.png"
                            alt="appointments-overview" /> */}
                        {/* className="w-full h-full object-contain" */}

                        {/* {Bottom pie Chart representation} */}
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between min-h-[240px] relative p-5">

                            {/* Title block */}
                            <div className="pb-3 flex justify-between items-center">
                                <span className="font-semibold text-sm tracking-wide">Appointment Overview</span>
                            </div>

                            {/* Pie + legend side by side */}
                            <div className="flex items-center justify-start gap-4">
                                <ResponsiveContainer width={180} height={180}>
                                    <PieChart>
                                        <Pie
                                            data={appointmentsOverviewData}
                                            cx="45%"
                                            cy="50%"
                                            outerRadius={80}
                                            dataKey="value"
                                            strokeWidth={2}
                                            stroke="#ffffff"
                                        >
                                            {appointmentsOverviewData.map((entry, index) => (
                                                <Cell key={index} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                                    </PieChart>
                                </ResponsiveContainer>

                                <div className="flex flex-col gap-2">
                                    {appointmentsOverviewData.map((entry) => (
                                        <div key={entry.name} className="flex items-center gap-2 text-xs text-gray-600">
                                            <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: entry.color }} />
                                            {entry.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>






                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
