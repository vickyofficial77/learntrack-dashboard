import React from 'react'

export default function WeeklySchedule({ schedule }) {
  return (
    <div>
      <div className="mb-4 flex items-start justify-between">
        <div>
          <div className="text-[15px] font-extrabold text-text">Weekly Schedule</div>
          <div className="mt-1 text-[12px] text-slate-400">Milestone to achieve</div>
        </div>
       <button className="text-[12px] font-semibold text-slate-500 underline decoration-dashed underline-offset-4 decoration-slate-300 hover:text-[#5e248c] hover:decoration-[#5e248c]">
  See All
</button>
      </div>

      <div className="space-y-3">
        {schedule.map((item) => (
          <div key={item.day} className="rounded-[18px] border border-line bg-white p-4 shadow-card">
            <div className="flex gap-4">
              <div className="w-8 pt-1 text-[18px] font-extrabold tracking-wide text-slate-600">{item.day}</div>
              <div className="w-px bg-line" />
              <div>
                <div className="text-[13px] font-extrabold uppercase tracking-[0.01em] text-text">{item.title}</div>
                <div className="mt-1 text-[12px] text-slate-500">{item.subtitle}</div>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-400"><span>{item.time}</span><span>•</span><span className="font-semibold text-emerald-500">{item.tag}</span></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
