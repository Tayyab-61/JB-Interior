"use client"

import { Search, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react"
import { useState } from "react"

const initialClaims = [
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
  const [claims, setClaims] = useState(initialClaims)
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null })

  const handleSort = (key) => {
    let direction = 'ascending'
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    
    const sortedClaims = [...claims].sort((a, b) => {
      // Only apply numeric sorting for claimAmount and amountApproved
      if (key === 'claimAmount' || key === 'amountApproved') {
        const amountA = parseFloat(a[key].replace(/[^0-9.-]+/g, "") || 0)
        const amountB = parseFloat(b[key].replace(/[^0-9.-]+/g, "") || 0)
        return direction === 'ascending' ? amountA - amountB : amountB - amountA
      }
      
      // For non-numeric fields, don't sort
      return 0
    })

    setClaims(sortedClaims)
    setSortConfig({ key, direction })
  }

  return (
    <div className="space-y-0">
      <div className="flex flex-col p-4 sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-2">
        <div className="flex items-center space-x-2">
        <div className="relative inline-block">
          <select className="appearance-none w-[140px] cursor-pointer inline-flex items-center rounded-md bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white border-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 hover:from-violet-600 hover:to-indigo-600 transition-all duration-200 shadow-md hover:shadow-lg">
            <option value="all">All Claims</option>
            <option value="active">Active Claims</option>
            <option value="inactive">Inactive Claim</option>
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
              placeholder="Search claims..."
              className="w-full rounded-md border border-indigo-200 pl-10 pr-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
         
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <button className="w-full sm:w-auto rounded-md bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            Add Claim
          </button>
         
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-indigo-100 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-indigo-100">
          <thead className="border-b-2 border-indigo-100">
            <tr className=" ">
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-black uppercase tracking-wider">
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-black uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  Claim ID
                </div>
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-black uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  Employee Name
                </div>
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-black uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  Claim Type
                </div>
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-black uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  Claim Date
                </div>
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-black uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  Status
                </div>
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-black uppercase tracking-wider">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleSort('claimAmount')}>
                  Claim Amount
                  <div className="relative">
                    <ArrowUpDown className="h-3 w-3 text-gray-400"/>
                  </div>
                </div>
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-black uppercase tracking-wider">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleSort('amountApproved')}>
                  Amount Approved
                  <div className="relative">
                    <ArrowUpDown className="h-3 w-3 text-gray-400"/>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-indigo-50">
            {claims.map((claim) => (
              <tr key={claim.id} className="hover:bg-gradient-to-r hover:from-indigo-50 hover:to-violet-50 transition-colors duration-150">
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                </td>
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
