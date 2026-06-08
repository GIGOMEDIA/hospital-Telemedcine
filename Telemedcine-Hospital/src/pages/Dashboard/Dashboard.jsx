import React from 'react';

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
                            <div className="flex-1 flex flex-col justify-end px-6 pt-4 pb-14">

                                {/* We gave this row container a fixed height (h-36) so your rectangle images can scale up properly */}
                                <div className="flex items-end justify-between border-b border-slate-100 relative px-2 h-36">

                                    {/* ———————————————— 8:00 SLOT ———————————————— */}
                                    <div className="flex flex-col items-center justify-end h-full relative w-2.5">
                                        <img
                                            src="/Rectangle 33.png"
                                            alt="8:00 Bar"
                                            // className="w-full object-fill h-[40%]"
                                        />
                                        <span className="absolute top-full mt-2 whitespace-nowrap text-[10px] text-slate-600 font-medium -rotate-45 origin-top-left -translate-x-1">8:00</span>
                                    </div>

                                    {/* ———————————————— 9:00 SLOT ———————————————— */}
                                    <div className="flex flex-col items-center justify-end h-full relative w-2.5">
                                        {/* 🚀 Rectangle 34 goes right here for 9:00 */}
                                        <img
                                            src="/Rectangle 34.png"
                                            alt="9:00 Bar"
                                            // className="w-full object-fill h-[52%]"
                                        />
                                        <span className="absolute top-full mt-2 whitespace-nowrap text-[10px] text-slate-600 font-medium -rotate-45 origin-top-left -translate-x-1">9:00</span>
                                    </div>

                                    {/* ———————————————— 10:00 SLOT ———————————————— */}
                                    <div className="flex flex-col items-center justify-end h-full relative w-2.5">
                                        <img
                                            src="/Rectangle 35.png"
                                            alt="10:00 Bar"
                                            // className="w-full object-fill h-[70%]"
                                        />
                                        <span className="absolute top-full mt-2 whitespace-nowrap text-[10px] text-slate-600 font-medium -rotate-45 origin-top-left -translate-x-1">10:00</span>
                                    </div>

                                    {/* ———————————————— 11:00 SLOT ———————————————— */}
                                    <div className="flex flex-col items-center justify-end h-full relative w-2.5">
                                        <img
                                            src="/Rectangle 36.png"
                                            alt="11:00 Bar"
                                            // className="w-full object-fill h-[15%]"
                                        />
                                        <span className="absolute top-full mt-2 whitespace-nowrap text-[10px] text-slate-600 font-medium -rotate-45 origin-top-left -translate-x-1">11:00</span>
                                    </div>

                                    {/* ———————————————— 12:00 SLOT ———————————————— */}
                                    <div className="flex flex-col items-center justify-end h-full relative w-2.5">
                                        <img
                                            src="/Rectangle 37.png"
                                            alt="12:00 Bar"
                                            // className="w-full object-fill h-[45%]"
                                        />
                                        <span className="absolute top-full mt-2 whitespace-nowrap text-[10px] text-slate-600 font-medium -rotate-45 origin-top-left -translate-x-1">12:00</span>
                                    </div>

                                    {/* ———————————————— 1:00 SLOT ———————————————— */}
                                    <div className="flex flex-col items-center justify-end h-full relative w-2.5">
                                        <img
                                            src="/Rectangle 38.png"
                                            alt="1:00 Bar"
                                            // className="w-full object-fill h-[95%]"
                                        />
                                        <span className="absolute top-full mt-2 whitespace-nowrap text-[10px] text-slate-600 font-medium -rotate-45 origin-top-left -translate-x-1">1:00</span>
                                    </div>

                                    {/* ———————————————— 2:00 SLOT ———————————————— */}
                                    <div className="flex flex-col items-center justify-end h-full relative w-2.5">
                                        <img
                                            src="/Rectangle 40.png"
                                            alt="2:00 Bar"
                                            // className="w-full object-fill h-[25%]"
                                        />
                                        <span className="absolute top-full mt-2 whitespace-nowrap text-[10px] text-slate-600 font-medium -rotate-45 origin-top-left -translate-x-1">2:00</span>
                                    </div>

                                    {/* ———————————————— 3:00 SLOT ———————————————— */}
                                    <div className="flex flex-col items-center justify-end h-full relative w-2.5">
                                        <img
                                            src="/Rectangle 41.png"
                                            alt="3:00 Bar"
                                            // className="w-full object-fill h-[80%]"
                                        />
                                        <span className="absolute top-full mt-2 whitespace-nowrap text-[10px] text-slate-600 font-medium -rotate-45 origin-top-left -translate-x-1">3:00</span>
                                    </div>

                                    {/* ———————————————— 4:00 SLOT ———————————————— */}
                                    <div className="flex flex-col items-center justify-end h-full relative w-2.5">
                                        <img
                                            src="/Rectangle 42.png"
                                            alt="4:00 Bar"
                                            // className="w-full object-fill h-[25%]"
                                        />
                                        <span className="absolute top-full mt-2 whitespace-nowrap text-[10px] text-slate-600 font-medium -rotate-45 origin-top-left -translate-x-1">4:00</span>
                                    </div>

                                    {/* ———————————————— 5:00 SLOT ———————————————— */}
                                    <div className="flex flex-col items-center justify-end h-full relative w-2.5">
                                        <img
                                            src="/Rectangle 43.png"
                                            alt="5:00 Bar"
                                            // className="w-full object-fill h-[82%]"
                                        />
                                        <span className="absolute top-full mt-2 whitespace-nowrap text-[10px] text-slate-600 font-medium -rotate-45 origin-top-left -translate-x-1">5:00</span>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between min-h-[240px]">
                            <div className="bg-slate-50/60 px-5 py-3 flex justify-between items-center border-b border-slate-100">
                                <span className="font-semibold text-slate-700 text-sm tracking-wide">Patient Pace</span>
                            </div>

                            <div className="px-5 flex items-center space-x-4 my-4">
                                <img
                                    src="/Pace.png"
                                    alt="pace"
                                    className="w-100"
                                />

                            </div>

                            <div className="mx-5 mb-0 px-1 py-3  flex justify-between items-center text-[9px] text-slate-500 font-medium">
                                <div className="flex items-center space-x-1.5">
                                    <img src="/Ellipse 10.png"
                                        alt="" />
                                    <span className="text-slate-700 ">New Patient</span>
                                </div>
                                <div className="flex items-center space-x-0">
                                    <img src="/Ellipse 11.png"
                                        alt="" />
                                    <span className=" text-slate-800  px-2 py-1 ">Return patient</span>
                                </div>

                                <div className="flex items-center space-x-1 ">
                                    <img src="/Ellipse 12.png"
                                        alt="" />
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
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                            <div className="bg-slate-50/60 px-5 py-3 border-b border-slate-100">
                                <h3 className="font-semibold text-slate-700 text-sm tracking-wide">Confirmed Diagnoses</h3>
                            </div>

                            <div className="p-5 space-y-3.5">
                                {[
                                    { title: 'Cold', count: '559 of 742', color: 'bg-[#22C55E]', width: 'w-[75%]' },
                                    { title: 'Fracture', count: '156 of 249', color: 'bg-[#EF4444]', width: 'w-[62%]' },
                                    { title: 'Concussion', count: '84 of 120', color: 'bg-[#6366F1]', width: 'w-[70%]' },
                                    { title: 'Heptatis', count: '946 of 950', color: 'bg-[#475569]', width: 'w-[98%]' },
                                ].map((item, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="flex justify-between text-xs font-bold text-slate-700 tracking-tight">
                                            <span>{item.count}</span>
                                            <span className="text-slate-400 font-medium">{item.title}</span>
                                        </div>
                                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden shadow-inner">
                                            <div className={`h-full ${item.color} ${item.width} rounded-full`} />
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

                            {/* Title block - exactly yours */}
                            <div className="pb-3 flex justify-between items-center">
                                <span className="font-semibold text-sm tracking-wide">Appointment Overview</span>
                            </div>

                            {/* Content block wrapper - altered ONLY to put chart and legend side-by-side */}
                            <div className="flex items-center justify-start space-x-6 my-auto">

                                {/* Your exact chart image */}
                                <div className="w-40 h-40 flex items-center justify-center">
                                    <img
                                        src="/image 44.png"
                                        alt="pace"
                                        className="w-full object-contain"
                                    />
                                </div>


                                <div className="flex flex-col space-y-0 text-[10px] text-slate-500 font-medium">

                                    {/* Male Row */}
                                    <div className="flex items-center space-x-1.5">
                                        <img src="/Ellipse 15.png" alt="" />
                                        <span className="text-slate-700">Male</span>
                                    </div>

                                    {/* Female Row */}
                                    <div className="flex items-center space-x-0">
                                        <img src="/Ellipse 16.png" alt="" />
                                        <span className="text-slate-800 px-2 py-1">Female</span>
                                    </div>

                                    {/* Children Row */}
                                    <div className="flex items-center space-x-1">
                                        <img src="/Ellipse 17.png" alt="" />
                                        <span className="text-slate-700">Children</span>
                                    </div>

                                </div>
                            </div>


                            <div className="absolute bottom-0 right-0 ">
                                <img
                                    src="/Rectangle 60.png"
                                    alt="pace"
                                    className="w-15 h-20 object-contain rounded-tl-xl"
                                />
                            </div>

                        </div>






                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
