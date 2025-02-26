"use client"

import { Search } from "lucide-react"

const loans = [
  {
    date: "2024-01-15",
    employeeName: "Imran Bilal Colony",
    loanName: "Personal Loan",
    status: "Active",
    loanAmount: "$5,000",
    amountRepaid: "$2,000",
    amountRemaining: "$3,000",
    paymentStatus: "On Track"
  },
  {
    date: "2024-01-10",
    employeeName: "Nawaz Mota", 
    loanName: "Emergency Loan",
    status: "Active",
    loanAmount: "$3,000",
    amountRepaid: "$1,000",
    amountRemaining: "$2,000",
    paymentStatus: "On Track"
  },
  {
    date: "2024-01-05",
    employeeName: "Rehman Munshi",
    loanName: "Medical Loan",
    status: "Completed",
    loanAmount: "$4,000",
    amountRepaid: "$4,000",
    amountRemaining: "$0",
    paymentStatus: "Paid"
  }
]

export function Recordloan() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-2">
        <div className="flex items-center space-x-2">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black" />
            <input
              type="text"
              placeholder="Search employees..."
              className="w-full rounded-md border border-indigo-200 pl-10 pr-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <span className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-black">
            Active
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <button className="w-full sm:w-auto rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            Record Loan
          </button>
         
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-indigo-100 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-indigo-100">
          <thead className="bg-gradient-to-r from-indigo-50 to-violet-50">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Date</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Employee Name</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Loan Name</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                Loan Amount
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                Amount Repaid
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                Amount Remaining
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-indigo-50">
            {loans.map((loan) => (
              <tr key={loan.date} className="hover:bg-gradient-to-r hover:from-indigo-50 hover:to-violet-50 transition-colors duration-150">
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black font-medium">{loan.date}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{loan.employeeName}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{loan.loanName}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{loan.status}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{loan.loanAmount}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{loan.amountRepaid}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{loan.amountRemaining}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
