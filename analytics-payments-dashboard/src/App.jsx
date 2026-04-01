import React, { useMemo, useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import StatCards from './components/StatCards'
import { PerformanceSection } from './components/PerformanceSection'
import WeeklySchedule from './components/WeeklySchedule'
import PaymentTable from './components/PaymentTable'
import { monthlySets, paymentRows, stats, weeklySchedule } from './data/dashboard'
import { ArrowUpRightIcon, BookmarkIcon } from './components/icons'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [view, setView] = useState('Monthly')
  const months = useMemo(() => monthlySets[view], [view])

  return (
    <div className="min-h-screen p-2.5 lg:p-3">
      <div className="grid min-h-[calc(100vh-10px)] grid-cols-1 gap-3 lg:grid-cols-[278px_minmax(0,1fr)]">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="app-panel flex min-w-0 flex-col p-3 sm:p-4">
          <Header onMenuToggle={() => setSidebarOpen(true)} />

          <section className="mb-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <h1 className="hidden text-[24px] font-extrabold tracking-[-0.02em] text-text lg:block">
              Analytics &amp; Payments
            </h1>

            <div className="flex flex-wrap items-center gap-3 xl:ml-auto">
              <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-line bg-white px-4 text-[13px] font-semibold text-slate-600 transition hover:bg-slate-50">
                <BookmarkIcon />
                <span>Saved Library</span>
              </button>

              <button className="inline-flex h-10 items-center gap-2 rounded-xl bg-gradient-to-br from-primary to-primaryDark px-4 text-[13px] font-bold text-white transition hover:opacity-95">
                <span>Go to website</span>
                <ArrowUpRightIcon />
              </button>
            </div>
          </section>

          <StatCards stats={stats} />

          <section className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_278px]">
            <PerformanceSection months={months} view={view} setView={setView} />
            <WeeklySchedule schedule={weeklySchedule} />
          </section>

          <PaymentTable rows={paymentRows} />

          <div className="mt-6 flex flex-col gap-3 border-t border-transparent px-2 text-[13px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <div>2025© gonaraza.com</div>
            <div className="flex gap-5">
              <span>About</span>
              <span>Support</span>
              <span>Purchase</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}