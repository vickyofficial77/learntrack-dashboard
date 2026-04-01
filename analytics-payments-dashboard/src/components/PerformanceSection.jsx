import React from 'react'
import { ChevronDown } from './icons'

export function PerformanceSection({ months, view, setView }) {
  return (
    <section className="w-full">
      <div className="mb-3 sm:mb-4">
        <h3 className="text-[14px] font-extrabold text-text sm:text-[15px]">
          Performance Statistics
        </h3>
        <p className="mt-1 text-[11px] text-slate-400 sm:text-[12px]">
          Course Available to learn
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 rounded-[20px] border border-line bg-white p-3 shadow-card sm:rounded-[24px] sm:p-4 xl:grid-cols-[minmax(0,1.3fr)_320px]">
        <AverageChart months={months} view={view} setView={setView} />
        <DonutPanel />
      </div>
    </section>
  )
}

function AverageChart({ months, view, setView }) {
  const maxHeight = 220
  const scale = (value) => `${(value / 90) * maxHeight}px`

  return (
    <div className="rounded-[20px] border border-line bg-white p-3 shadow-sm sm:p-5">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="rounded-md border border-[#eadff3] bg-[#f6effb] px-2 py-1 text-[10px] font-bold text-primary sm:text-[11px]">
            89.7%
          </div>
          <div className="text-[15px] font-extrabold text-text sm:text-[16px]">
            Average score
          </div>
        </div>

        <div className="relative w-full sm:w-auto">
          <select
            value={view}
            onChange={(e) => setView(e.target.value)}
            className="w-full appearance-none rounded-xl border border-line bg-white px-4 py-2 pr-8 text-[12px] font-medium text-slate-500 outline-none sm:w-auto"
          >
            <option>Monthly</option>
            <option>Weekly</option>
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            <ChevronDown />
          </span>
        </div>
      </div>

      <div className="flex gap-2 sm:gap-4">
        <div className="hidden h-[270px] w-7 shrink-0 justify-between text-[11px] text-slate-400 sm:flex sm:flex-col">
          {[90, 80, 70, 60, 50, 40, 30, 20, 10, 0].map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>

        <div className="relative min-w-0 flex-1">
          <div className="pointer-events-none absolute inset-x-0 top-0 grid h-[240px] grid-rows-10 sm:h-[270px]">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="border-t border-dashed border-slate-100" />
            ))}
          </div>

          <div className="pointer-events-none absolute bottom-[26px] left-0 right-0 border-t border-slate-200 sm:bottom-[30px]" />

          <div className="relative flex h-[266px] items-end justify-between gap-1 sm:h-[300px] sm:gap-3">
            {months.map((m) => (
              <div
                key={m.month}
                className="flex min-w-0 flex-1 flex-col items-center justify-end"
              >
                <div className="flex h-[240px] items-end gap-[3px] sm:h-[270px] sm:gap-[5px]">
                  <div
                    className="w-[5px] rounded-t-full bg-primary sm:w-[7px]"
                    style={{ height: scale(m.syllabus) }}
                  />
                  <div
                    className="w-[5px] rounded-t-full bg-[#d9dde8] sm:w-[7px]"
                    style={{ height: scale(m.onlineCourses) }}
                  />
                </div>

                <div
                  className={`mt-2 truncate text-[9px] font-medium sm:mt-3 sm:text-[11px] ${
                    m.active ? 'font-bold text-primary' : 'text-slate-400'
                  }`}
                >
                  {m.month}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute left-[22%] top-[34%] hidden w-[180px] rounded-2xl border border-line bg-white p-3 shadow-card lg:block">
            <div className="mb-3 flex items-center justify-between text-[12px] font-bold text-slate-700">
              <span>Stats</span>
              <span className="text-emerald-500">↗ 20%</span>
            </div>

            <div className="mb-2 flex items-center justify-between text-[12px] text-slate-500">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Syllabus :
              </span>
              <strong className="text-slate-700">23</strong>
            </div>

            <div className="flex items-center justify-between text-[12px] text-slate-500">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#d9dde8]" />
                Online Courses :
              </span>
              <strong className="text-slate-700">39</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DonutPanel() {
  return (
    <div className="flex flex-col rounded-[20px] bg-transparent px-1 py-2">
      <div className="flex flex-col items-center">
        <div className="relative mt-2">
          <div className="donut-ring h-[110px] w-[110px] rounded-full sm:h-[126px] sm:w-[126px]" />
          <div className="absolute inset-[20px] rounded-full bg-white sm:inset-[23px]" />
          <div className="absolute left-[78px] top-[38px] rounded-lg border border-line bg-white px-2 py-1 text-[10px] text-slate-500 shadow-sm sm:left-[96px] sm:top-[44px] sm:text-[11px]">
            23 Failed
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col items-center space-y-3 text-[11px] text-slate-500 sm:text-[12px]">
        <div className="flex w-[150px] items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-rose-500" />
            <span>0 - 59</span>
          </div>
          <strong>FAIL (F)</strong>
        </div>

        <div className="flex w-[150px] items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            <span>60 - 79</span>
          </div>
          <strong>TRIED (T)</strong>
        </div>

        <div className="flex w-[150px] items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>80 - 100</span>
          </div>
          <strong>PASS (P)</strong>
        </div>
      </div>

      <div className="my-5 border-t border-line" />

      <div className="text-center">
        <div className="text-[14px] font-extrabold text-text sm:text-[15px]">
          Top Learned
        </div>
        <div className="mt-1 text-[11px] text-slate-400 sm:text-[12px]">
          Completed on Wed, 23 March 2026
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 px-1 sm:mt-5">
        <div className="grid h-14 w-14 shrink-0 place-items-center text-[24px] sm:h-16 sm:w-16 sm:text-[28px]">
          🏅
        </div>
        <div className="min-w-0">
          <div className="truncate text-[12px] font-extrabold text-text sm:text-[13px]">
            ENGLISH
          </div>
          <div className="mt-1 text-[11px] text-slate-500 sm:text-[12px]">
            21 of 21 Assessment
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] sm:gap-3 sm:text-[12px]">
            <strong className="text-text">89.2%</strong>
            <span className="text-primary">23 March 2026</span>
          </div>
        </div>
      </div>

      <button className="mt-4 w-full text-center text-[12px] font-medium text-slate-500 underline decoration-dashed underline-offset-4 sm:text-[13px]">
        See more of your courses rank <span className="text-lg">›</span>
      </button>
    </div>
  )
}