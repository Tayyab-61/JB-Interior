"use client"

import { Search } from "lucide-react"

const contractors = [
  {
    id: "2024-01-15",
    details: "Monthly Payroll",
    payrollCost: "$12,500",
    status: "Paid",
  },
  {
    id: "2024-01-01", 
    details: "Bi-weekly Payroll",
    payrollCost: "$8,750",
    status: "Pending",
  },
  {
    id: "2023-12-15",
    details: "Monthly Payroll", 
    payrollCost: "$11,000",
    status: "Paid",
  },
]

export function PayRuns() {
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
            Run Payroll
          </button>
         
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-indigo-100 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-indigo-100">
          <thead className="bg-gradient-to-r from-indigo-50 to-violet-50">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Pay Date</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Details</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Payroll Cost</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-indigo-50">
            {contractors.map((contractor) => (
              <tr key={contractor.id} className="hover:bg-gradient-to-r hover:from-indigo-50 hover:to-violet-50 transition-colors duration-150">
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black font-medium">{contractor.id}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{contractor.details}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{contractor.payrollCost}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      contractor.status === "Paid" 
                        ? "bg-emerald-100 text-emerald-700" 
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {contractor.status}
                  </span>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <button className="text-indigo-600 hover:text-indigo-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
