"use client"

import { Search, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react"
import { useState } from "react"

const initialContracts = [
  {
    id: "AAA001",
    name: "Imran Bilal Colony",
    role: "Electrician", 
    project: "IT Consultation",
    status: "Active",
  },
  {
    id: "AAA002", 
    name: "Nawaz Mota",
    role: "Helper",
    project: "ABC Bank",
    status: "Active",
  },
  {
    id: "AAA003",
    name: "Rehman Munshi",
    role: "Developer",
    project: "Internal",
    status: "Inactive",
  },
]

export function Contracts() {
  const [contracts, setContracts] = useState(initialContracts)
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null })

  const handleSort = (key) => {
    let direction = 'ascending'
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    
    const sortedContracts = [...contracts].sort((a, b) => {
      if (key === 'name' || key === 'role' || key === 'project') {
        return direction === 'ascending' 
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key])
      }
      return 0
    })

    setContracts(sortedContracts)
    setSortConfig({ key, direction })
  }

  return (
    <div className="space-y-0">
      <div className="flex flex-col p-4 sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-2">
        <div className="flex items-center space-x-2">
          <div className="relative inline-block">
            <select className="appearance-none w-[140px] cursor-pointer inline-flex items-center rounded-md bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white border-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 hover:from-violet-600 hover:to-indigo-600 transition-all duration-200 shadow-md hover:shadow-lg">
              <option value="all">All Contracts</option>
              <option value="active">Active Contracts</option>
              <option value="inactive">Inactive Contracts</option>
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
              placeholder="Search contracts..."
              className="w-full rounded-md border border-indigo-200 pl-10 pr-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <button className="w-full sm:w-auto rounded-md bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white hover:from-violet-600 hover:to-indigo-600">
            Add Contract
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-indigo-100 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-indigo-100">
          <thead className="border-b-2 border-indigo-100">
            <tr>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-black uppercase tracking-wider">
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-black uppercase tracking-wider">Contract ID</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-black uppercase tracking-wider">
                <div className="flex items-center gap-2 cursor-pointer group" onClick={() => handleSort('name')}>
                  Employee Name
                  <div className="relative">
                  <ArrowUpDown className="h-3 w-3 text-indigo-600 hover:text-indigo-800"/>
                    
                  </div>
                </div>
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-black uppercase tracking-wider">
                <div className="flex items-center gap-2 cursor-pointer group" onClick={() => handleSort('role')}>
                  Role
                  <div className="relative">
                <ArrowUpDown className="h-3 w-3 text-indigo-600 hover:text-indigo-800"/>
                  
                  </div>
                </div>
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-black uppercase tracking-wider">
                <div className="flex items-center gap-2 cursor-pointer group" onClick={() => handleSort('project')}>
                  Project
                  <div className="relative">
                  <ArrowUpDown className="h-3 w-3 text-indigo-600 hover:text-indigo-800"/>
                
                  </div>
                </div>
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-black uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-indigo-50">
            {contracts.map((contract) => (
              <tr key={contract.id} className="hover:bg-gradient-to-r hover:from-indigo-50 hover:to-violet-50 transition-colors duration-150">
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black font-medium">{contract.id}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{contract.name}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{contract.role}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{contract.project}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      contract.status === "Active" 
                        ? "bg-emerald-100 text-emerald-700" 
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {contract.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
