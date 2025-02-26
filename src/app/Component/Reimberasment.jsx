"use client"

import { Search } from "lucide-react"

const claims = [
  {
    id: "CLM001",
    employeeName: "Imran Bilal Colony",
    claimType: "Travel", 
    claimDate: "2024-01-15",
    status: "Pending",
    claimAmount: "$500",
    amountApproved: "-"
  },
  {
    id: "CLM002", 
    employeeName: "Nawaz Mota",
    claimType: "Medical",
    claimDate: "2024-01-10", 
    status: "Approved",
    claimAmount: "$1000",
    amountApproved: "$800"
  },
  {
    id: "CLM003",
    employeeName: "Rehman Munshi",
    claimType: "Equipment",
    claimDate: "2024-01-05",
    status: "Rejected",
    claimAmount: "$300",
    amountApproved: "$0"
  },
]

export function Reimberasment() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-2">
        <div className="flex items-center space-x-2">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black" />
            <input
              type="text"
              placeholder="Search claims..."
              className="w-full rounded-md border border-indigo-200 pl-10 pr-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <span className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-black">
            Active
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <button className="w-full sm:w-auto rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            Add Claim
          </button>
         
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-indigo-100 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-indigo-100">
          <thead className="bg-gradient-to-r from-indigo-50 to-violet-50">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Claim ID</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Employee Name</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Claim type</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                claim date
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  status
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                claim amount
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                amount approved
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-indigo-50">
            {claims.map((claim) => (
              <tr key={claim.id} className="hover:bg-gradient-to-r hover:from-indigo-50 hover:to-violet-50 transition-colors duration-150">
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black font-medium">{claim.id}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{claim.employeeName}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{claim.claimType}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{claim.claimDate}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      claim.status === "Approved" 
                        ? "bg-emerald-100 text-emerald-700"
                        : claim.status === "Pending"
                        ? "bg-amber-100 text-amber-700" 
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {claim.status}
                  </span>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{claim.claimAmount}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{claim.amountApproved}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
