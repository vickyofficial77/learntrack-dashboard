import React from 'react'
import { ChevronDown, GridIcon, MenuIcon, SearchIcon } from './icons'

function Flag({ type }) {
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#ececf3] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <span
        className={`relative block h-[18px] w-[18px] overflow-hidden rounded-full ${
          type === 'rw' ? 'flag-rw' : 'flag-en'
        }`}
      />
    </span>
  )
}

export default function Header({ onMenuToggle }) {
  return (
    <>
      <div className="mb-4 flex items-center justify-between gap-3 lg:hidden">
        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-[#ececf3] bg-white text-slate-500 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
          onClick={onMenuToggle}
        >
          <MenuIcon />
        </button>

        <div className="text-[18px] font-extrabold text-[#1f2430]">
          Analytics & Payments
        </div>

        <div className="w-10" />
      </div>

      <div className="mb-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex h-[42px] w-full items-center gap-3 border-b border-[#e9eaf0] px-1 text-[13px] text-slate-400 xl:max-w-[610px]">
          <span className="text-slate-400">
            <SearchIcon />
          </span>
          <span>Search videos...</span>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-4">
  <button className="flex items-center justify-center text-[#9aa3b2] transition hover:text-[#5e248c]">
    <GridIcon className="h-[30px] w-[30px]" />
  </button>

          <button className="flex items-center gap-2 text-[13px] font-bold text-slate-600">
            <Flag type="rw" />
            <span>RW</span>
            <span className="text-slate-400">
              <ChevronDown />
            </span>
          </button>

          <button className="flex items-center gap-2 text-[13px] font-bold text-slate-600">
            
            <span>EN</span>
            <span className="text-slate-400">
              <ChevronDown />
            </span>
          </button>

          <div className="flex items-center gap-3 pl-1">
            <img
              src="/1.png"
              alt="John Doe"
              className="h-9 w-9 rounded-full object-cover ring-1 ring-[#ececf3]"
            />
            <div>
              <div className="text-[13px] font-bold leading-none text-slate-700">
                Hi, victor
              </div>
              <div className="mt-1 text-[11px] leading-none text-slate-400">
                Learner
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}