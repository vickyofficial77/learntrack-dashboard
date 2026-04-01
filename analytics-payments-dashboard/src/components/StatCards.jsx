import React from 'react'

export default function StatCards({ stats }) {
  return (
    <div className="app-panel grid grid-cols-1 overflow-hidden px-3 py-2 sm:grid-cols-2 lg:grid-cols-5 lg:px-6">
      {stats.map((item, index) => (
        <div key={item.label} className={`px-4 py-4 ${index < stats.length - 1 ? 'lg:border-r lg:border-line' : ''}`}>
          <div className="text-[18px] font-extrabold text-text sm:text-[20px]">{item.value}</div>
          <div className="mt-2 flex items-center gap-2 text-[13px] text-slate-400">
            <span>{item.label}</span>
            {item.delta ? (
              <span className={`font-semibold ${item.deltaType === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                {item.deltaType === 'up' ? '↗' : '↘'} {item.delta}
              </span>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  )
}
