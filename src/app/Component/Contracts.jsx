"use client"

import { Search } from "lucide-react"

const employees = [
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
            Add Contractor
          </button>
          <button className="w-full sm:w-auto rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            Pay Contractor
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
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-indigo-50">
            {employees.map((employee) => (
              <tr key={employee.id} className="hover:bg-gradient-to-r hover:from-indigo-50 hover:to-violet-50 transition-colors duration-150">
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black font-medium">{employee.id}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{employee.name}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{employee.role}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black">{employee.project}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      employee.status === "Active" 
                        ? "bg-emerald-100 text-emerald-700" 
                        : "bg-amber-100 text-red-500"
                    }`}
                  >
                    {employee.status}
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
