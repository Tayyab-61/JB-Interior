"use client"

import { useState } from "react"
import { Overview } from "../Component/Overview"
import { Employees } from "../Component/Employees"
import { EmployeeSidebar } from "../Component/EmployeeSidebar"
import { Contracts } from "../Component/Contracts"
import { PayRuns } from "../Component/PayRuns"
import { Recordloan } from "../Component/Recordloan"
import { Reimberasment } from "../Component/Reimberasment"

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "employees", label: "Employees" },
  { id: "contractors", label: "Contractors" },
  { id: "pay-runs", label: "Pay Runs" },
  { id: "advance", label: "Advance" },
  { id: "reimbursements", label: "Reimbursements" },
]

export default function page() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <>
    <div className="flex flex-col lg:flex-row">
      <EmployeeSidebar/>
    
      <div className="w-full space-y-4 p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Payroll</h2>
        </div>

        <div className="space-y-4">
          <div className="border-b border-gray-200 md:overflow-hidden overflow-x-auto">
            <nav className="-mb-px flex flex-nowrap sm:flex-wrap space-x-4 sm:space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap border-b-2 px-1 py-3 sm:py-4 text-xs sm:text-sm font-medium ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="w-full overflow-x-auto">
            {activeTab === "overview" && <Overview />}
            {activeTab === "employees" && <Employees />}
            {activeTab === "contractors" && <Contracts />}
            {activeTab === "pay-runs" && <PayRuns />}
            {activeTab === "advance" && <Recordloan />}
            {activeTab === "reimbursements" && <Reimberasment />}
          </div>
        </div>
      </div>
    </div>
    </> 
  )
}
