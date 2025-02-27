"use client"

import { Search, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react"
import { useState } from "react"

const initialLoans = [
  {
    id: "LN001",
    date: "2024-01-15",
    employeeName: "Imran Bilal Colony",
    loanName: "Personal Loan", 
    status: "Active",
    loanAmount: "$5,000",
    amountRepaid: "$2,000",
    amountRemaining: "$3,000"
  },
  {
    id: "LN002",
    date: "2024-01-10",
    employeeName: "Nawaz Mota",
    loanName: "Emergency Loan",
    status: "Active", 
    loanAmount: "$3,000",
    amountRepaid: "$1,000",
    amountRemaining: "$2,000"
  },
  {
    id: "LN003", 
    date: "2024-01-05",
    employeeName: "Rehman Munshi",
    loanName: "Medical Loan",
    status: "Completed",
    loanAmount: "$4,000",
    amountRepaid: "$4,000",
    amountRemaining: "$0"
  }
]

export function Recordloan() {
  const [loans, setLoans] = useState(initialLoans)
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null })

  const handleSort = (key) => {
    let direction = 'ascending'
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    
    const sortedLoans = [...loans].sort((a, b) => {
      if (key === 'loanAmount' || key === 'amountRepaid' || key === 'amountRemaining') {
        const amountA = parseFloat(a[key].replace(/[^0-9.-]+/g, "") || 0)
        const amountB = parseFloat(b[key].replace(/[^0-9.-]+/g, "") || 0)
        return direction === 'ascending' ? amountA - amountB : amountB - amountA
      }
      return 0
    })

    setLoans(sortedLoans)
    setSortConfig({ key, direction })
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col p-4 sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-2">
        <div className="flex items-center space-x-2">
          <div className="relative inline-block">
            <select className="appearance-none w-[140px] cursor-pointer inline-flex items-center rounded-md bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white border-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 hover:from-violet-600 hover:to-indigo-600 transition-all duration-200 shadow-md hover:shadow-lg">
              <option value="all">All Loans</option>
              <option value="active">Active Loans</option>
              <option value="completed">Completed Loans</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
              </svg>
            </div>
          </div>
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black" />
            <input
              type="text"
              placeholder="Search loans..."
              className="w-full rounded-md border border-indigo-200 pl-10 pr-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <button className="w-full sm:w-auto rounded-md bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white hover:from-violet-600 hover:to-indigo-600">
            Record Loan
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-indigo-100 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-indigo-100">
          <thead className="border-b-2 border-indigo-100">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Loan ID</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Employee Name</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Loan Type</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Date</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Status</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                <div className="flex items-center gap-2 cursor-pointer group" onClick={() => handleSort('loanAmount')}>
                  Loan Amount
                  <div className="relative">
                    <ArrowUpDown className="h-4 w-4 text-gray-400 group-hover:hidden"/>
                    <div className="hidden group-hover:flex flex-col">
                      <ArrowUp className="h-4 w-4 text-indigo-600 hover:text-indigo-800"/>
                      <ArrowDown className="h-4 w-4 text-indigo-600 hover:text-indigo-800"/>
                    </div>
                  </div>
                </div>
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                <div className="flex items-center gap-2 cursor-pointer group" onClick={() => handleSort('amountRemaining')}>
                  Amount Remaining
                  <div className="relative">
                    <ArrowUpDown className="h-4 w-4 text-gray-400 group-hover:hidden"/>
                    <div className="hidden group-hover:flex flex-col">
                      <ArrowUp className="h-4 w-4 text-indigo-600 hover:text-indigo-800"/>
                      <ArrowDown className="h-4 w-4 text-indigo-600 hover:text-indigo-800"/>
                    </div>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-indigo-50">
            {loans.map((loan) => (
              <tr key={loan.id} className="hover:bg-gradient-to-r hover:from-indigo-50 hover:to-violet-50 transition-colors duration-150">
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black font-medium">{loan.id}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{loan.employeeName}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{loan.loanName}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{loan.date}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                    loan.status === "Active" 
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }`}>
                    {loan.status}
                  </span>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{loan.loanAmount}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{loan.amountRemaining}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}



