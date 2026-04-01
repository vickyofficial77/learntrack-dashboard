import React from 'react'
import {
  AssessmentIcon,
  ChevronDown,
  FolderIcon,
  HomeIcon,
  LogoutIcon,
  ManagementIcon,
  PieIcon,
  SettingsIcon,
} from './icons'

const nav = [
  ['Home', <HomeIcon key="h" />],
  ['Assessments', <AssessmentIcon key="a" />],
  ['My Projects', <FolderIcon key="f" />, '4'],
  ['Analytics & Payments', <PieIcon key="p" />, null, true],
  ['Management', <ManagementIcon key="m" />],
  ['Settings', <SettingsIcon key="s" />],
]

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-[15px] w-[15px]"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  )
}

function LogoMark() {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[14px]  ring-1 ring-[#ece8f3]">
      <img
        src="/3.png"
        alt="Gonaraza logo"
        className="h-13 w-13 object-contain"
      />
    </div>
  )
}

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-slate-900/30 backdrop-blur-[1px] transition-all duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-[286px] border-r border-[#ebeaf2] bg-[#f7f7fb] px-3 py-4 transition-transform duration-300 lg:static lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center gap-3 px-2">
            <LogoMark />

            <div className="min-w-0">
              <div className="truncate text-[19px] font-extrabold leading-none text-[#5e248c]">
                Gonaraza.com
              </div>
              <div className="mt-1 text-[10px] leading-none text-slate-400">
                All in one digital marketing
              </div>
            </div>

            <button className="ml-auto text-slate-400 transition hover:text-slate-500">
              <ChevronDown />
            </button>
          </div>

          <div className="mt-6">
            <div className="flex h-[46px] items-center gap-3 rounded-[12px] border border-[#e8e8f0] bg-white px-4 text-[13px] text-slate-400 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
              <SearchIcon />
              <span>Search</span>
            </div>
          </div>

         <nav className="mt-5 space-y-1.5">
  {nav.map(([label, icon, badge, active], index) => (
    <React.Fragment key={label}>
      
      {label === 'Settings' && (
        <div className="my-3 border-t border-[#e7e8ef]" />
      )}

      <button
        className={`group flex h-[44px] w-full items-center gap-3 rounded-[12px] px-3 text-left text-[14px] font-semibold transition ${
          active
            ? 'bg-[#f1ebf9] text-[#5e248c]'
            : 'text-[#5e248c] hover:bg-white/70'
        }`}
      >
        {/* ICON */}
        <span
          className={`flex h-[18px] w-[18px] items-center justify-center ${
            active
              ? 'text-[#5e248c]'
              : 'text-[#5e248c]/80 group-hover:text-[#5e248c]'
          }`}
        >
          {icon}
        </span>

        {/* LABEL */}
        <span className="truncate">{label}</span>

        {/* BADGE */}
        {badge && (
          <span className="ml-auto inline-grid h-5 min-w-5 place-items-center rounded-full bg-[#f1ebf9] px-1.5 text-[10px] font-bold text-[#5e248c]">
            {badge}
          </span>
        )}
      </button>
    </React.Fragment>
  ))}
</nav>

          <div className="my-4 border-t border-[#e7e8ef]" />

          <button className="flex h-[42px] items-center justify-between rounded-[14px] bg-white px-4 text-[14px] font-semibold text-slate-600 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-[#ececf3] transition hover:bg-slate-50">
            <span>2 Events Pending</span>
            <span className="text-slate-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </span>
          </button>

          <div className="mt-5 rounded-[16px] border border-[#ebeaf2] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
            <div className="text-[16px] font-bold leading-5 text-[#232838]">
              Advertise your projects
            </div>

            <div className="mt-2 text-[12px] leading-5 text-slate-400">
              Do you have a business and your clients don’t know where to find
              you ?
            </div>

            <button className="mt-5 h-[42px] w-full rounded-[12px] bg-[#5e148a] text-[13px] font-bold text-white transition hover:bg-[#51107a]">
              Start now
            </button>
          </div>

          <div className="mt-auto pt-6">
            <div className="flex items-center gap-3 px-1">
              <img
                src="/1.png"
                alt="Emmanuel"
                className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-[#ececf3]"
              />

              <div className="min-w-0 flex-1">
                <div className="truncate text-[13px] font-bold text-[#2d3445]">
                  Hi, victor
                </div>
                <div className="text-[11px] text-slate-400">Personal User</div>
              </div>

              <button className="grid h-7 w-7 place-items-center rounded-full text-slate-400 transition hover:bg-white hover:text-slate-600">
                <span className="scale-[0.82]">
                  <SettingsIcon />
                </span>
              </button>

              <button className="grid h-7 w-7 place-items-center rounded-full text-slate-400 transition hover:bg-white hover:text-slate-600">
                <span className="scale-[0.82]">
                  <LogoutIcon />
                </span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}