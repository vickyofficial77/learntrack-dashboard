import React, { useMemo, useState } from 'react'
import { CalendarIcon, ChevronDown, FilterIcon } from './icons'

export default function PaymentTable({ rows }) {
  const [selected, setSelected] = useState([])
  const [page, setPage] = useState(2)
  const [statusFilter, setStatusFilter] = useState('All')
  const [range, setRange] = useState('Today')
  const [perPage, setPerPage] = useState('10')
  const [currency, setCurrency] = useState('9.6 USD')

  const pagedRows = useMemo(() => {
    return rows.filter((row, index) =>
      statusFilter === 'All' ? true : index % 2 === 0
    )
  }, [rows, statusFilter])

  const toggleRow = (index) => {
    setSelected((current) =>
      current.includes(index)
        ? current.filter((id) => id !== index)
        : [...current, index]
    )
  }

  return (
    <div className="mt-5 rounded-[22px] border border-line bg-white p-4 shadow-card sm:p-5">
      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="text-[15px] font-extrabold text-text sm:text-[16px]">
            Payment History
          </div>
          <div className="mt-1 text-[12px] text-slate-400">
            Earned money from syllabus &amp; Courses
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            onClick={() => setRange(range === 'Today' ? 'This week' : 'Today')}
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-line bg-white px-4 text-[12px] font-medium text-slate-500 shadow-sm transition hover:bg-slate-50 sm:text-[13px]"
          >
            <span className="text-slate-400">
              <CalendarIcon />
            </span>
            <span>{range}</span>
            <span className="text-slate-400">
              <ChevronDown />
            </span>
          </button>

          <button
            onClick={() =>
              setStatusFilter((v) => (v === 'All' ? 'Reviewed' : 'All'))
            }
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-[#eadff3] bg-[#f8f3fc] px-4 text-[12px] font-semibold text-primary shadow-sm transition hover:bg-[#f4ebfb] sm:text-[13px]"
          >
            <span>
              <FilterIcon />
            </span>
            <span>Filters</span>
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-[18px] border border-line">
        <div className="overflow-x-auto">
          <table className="min-w-[1120px] w-full border-collapse">
            <thead className="bg-primary text-white">
              <tr className="text-left text-[12px] font-medium">
                <th className="w-[48px] px-4 py-4">
                  <span className="block h-4 w-4 rounded-[4px] border border-white/70" />
                </th>

                <th className="px-4 py-4">
                  <div className="inline-flex items-center gap-1">
                    <span>Course Details</span>
                    <span className="text-white/80">↕</span>
                  </div>
                </th>

                <th className="px-4 py-4">
                  <div className="inline-flex items-center gap-1">
                    <span>Payment Reason</span>
                    <span className="text-white/80">↕</span>
                  </div>
                </th>

                <th className="px-4 py-4">
                  <div className="inline-flex items-center gap-1">
                    <span>Payee name</span>
                    <span className="text-white/80">↕</span>
                  </div>
                </th>

                <th className="px-4 py-4">
                  <div className="inline-flex items-center gap-1">
                    <span>Amount Paid</span>
                    <span className="text-white/80">↕</span>
                  </div>
                </th>

                <th className="px-4 py-4">
                  <div className="inline-flex items-center gap-1">
                    <span>Fees per amount</span>
                    <span className="text-white/80">↕</span>
                  </div>
                </th>

                <th className="px-4 py-4">
                  <div className="inline-flex items-center gap-1">
                    <span>Amount Paid</span>
                    <span className="text-white/80">↕</span>
                  </div>
                </th>

                <th className="px-4 py-4">
                  <div className="inline-flex items-center gap-1">
                    <span>Status</span>
                    <span className="text-white/80">↕</span>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="bg-white text-[13px] text-slate-600">
              {pagedRows.map((row, index) => (
                <tr
                  key={`${row[2]}-${index}`}
                  className="border-t border-line hover:bg-slate-50/70"
                >
                  <td className="px-4 py-4 align-top">
                    <button
                      onClick={() => toggleRow(index)}
                      className={`mt-0.5 block h-4 w-4 rounded-[4px] border transition ${
                        selected.includes(index)
                          ? 'border-primary bg-primary'
                          : 'border-line bg-white'
                      }`}
                    />
                  </td>

                  <td className="px-4 py-4 align-top">
                    <div className="flex flex-col gap-1">
                      <strong className="font-bold text-text">{row[0]}</strong>
                      <span className="text-[11px] text-slate-400">
                        12 Jan 2024
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-4 align-top text-slate-600">
                    {row[1]}
                  </td>

                  <td className="px-4 py-4 align-top">
                    <div className="flex flex-col gap-1">
                      <strong className="font-bold text-text">{row[2]}</strong>
                      <span className="text-[11px] text-slate-400">
                        {row[3]}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-4 align-top font-medium text-text">
                    {row[4]}
                  </td>

                  <td className="px-4 py-4 align-top font-medium text-text">
                    {row[5]}
                  </td>

                  <td className="px-4 py-4 align-top font-medium text-text">
                    {row[6]}
                  </td>

                  <td className="px-4 py-4 align-top">
                    <span className="inline-flex rounded-md bg-[#fff3bf] px-2 py-[5px] text-[11px] font-semibold text-[#a37b00]">
                      In review
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mx-auto mt-2 h-1.5 w-[72%] rounded-full bg-[#e4e9f1]">
        <div className="h-full w-[67%] rounded-full bg-[#c6cddb]" />
      </div>

      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex items-center gap-2 text-[13px] text-slate-400">
          <span>Show</span>
          <button
            onClick={() => setPerPage(perPage === '10' ? '20' : '10')}
            className="inline-flex h-8 items-center gap-2 rounded-lg border border-line bg-white px-3 text-slate-500"
          >
            <span>{perPage}</span>
            <ChevronDown />
          </button>
          <span>per page</span>
        </div>

        <div className="flex flex-col items-start gap-4 lg:items-end">
          <div className="flex items-center gap-2 text-[13px] text-slate-400">
            <span>Total Payments</span>
            <button
              onClick={() =>
                setCurrency(currency === '9.6 USD' ? '12.4 USD' : '9.6 USD')
              }
              className="inline-flex h-8 items-center gap-2 rounded-lg border border-[#eadff3] bg-[#f8f3fc] px-3 font-semibold text-primary"
            >
              <span>{currency}</span>
              <ChevronDown />
            </button>
          </div>

          <div className="flex items-center gap-3 text-[13px] text-slate-500">
            <span>1-10 of 5</span>

            <button className="text-slate-400">←</button>

            <button
              onClick={() => setPage(1)}
              className={`transition ${
                page === 1 ? 'font-bold text-primary' : 'text-slate-500'
              }`}
            >
              1
            </button>

            <button
              onClick={() => setPage(2)}
              className={`grid h-8 w-8 place-items-center rounded-lg transition ${
                page === 2
                  ? 'bg-[#f2edf8] font-bold text-primary'
                  : 'text-slate-500'
              }`}
            >
              2
            </button>

            <button
              onClick={() => setPage(3)}
              className={`transition ${
                page === 3 ? 'font-bold text-primary' : 'text-slate-500'
              }`}
            >
              3
            </button>

            <button className="text-slate-400">→</button>
          </div>
        </div>
      </div>
    </div>
  )
}