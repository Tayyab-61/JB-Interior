"use client"

import { Users, FolderKanban, FileCodeIcon as FileContract, Store, Package, TrendingUp } from "lucide-react"
import Header from "./Header"
export function DashboardContent() {
  return (
    <>
   
    <div className=" w-full">
    <Header/>
    <div className="p-8 w-full">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Dashboard Overview</h1>
      <div className="grid gap-6 sdsdsd md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300">
          <div className="flex flex-row items-center justify-between p-6 pb-2">
            <h3 className="text-sm font-medium text-blue-900">Total Employees</h3>
            <Users className="h-5 w-5 text-blue-600" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold text-blue-900">24</div>
            <p className="text-xs text-blue-600">+2 from last month</p>
          </div>
        </div>
        <div className="rounded-xl border bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all duration-300">
          <div className="flex flex-row items-center justify-between p-6 pb-2">
            <h3 className="text-sm font-medium text-purple-900">Active Projects</h3>
            <FolderKanban className="h-5 w-5 text-purple-600" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold text-purple-900">12</div>
            <p className="text-xs text-purple-600">+3 from last month</p>
          </div>
        </div>
        <div className="rounded-xl border bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all duration-300">
          <div className="flex flex-row items-center justify-between p-6 pb-2">
            <h3 className="text-sm font-medium text-green-900">Total Contracts</h3>
            <FileContract className="h-5 w-5 text-green-600" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold text-green-900">8</div>
            <p className="text-xs text-green-600">+1 from last month</p>
          </div>
        </div>
        <div className="rounded-xl border bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-all duration-300">
          <div className="flex flex-row items-center justify-between p-6 pb-2">
            <h3 className="text-sm font-medium text-orange-900">Active Vendors</h3>
            <Store className="h-5 w-5 text-orange-600" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold text-orange-900">15</div>
            <p className="text-xs text-orange-600">Same as last month</p>
          </div>
        </div>
        <div className="rounded-xl border bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-lg transition-all duration-300">
          <div className="flex flex-row items-center justify-between p-6 pb-2">
            <h3 className="text-sm font-medium text-pink-900">Inventory Items</h3>
            <Package className="h-5 w-5 text-pink-600" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold text-pink-900">342</div>
            <p className="text-xs text-pink-600">+28 from last month</p>
          </div>
        </div>
        <div className="rounded-xl border bg-gradient-to-br from-indigo-50 to-indigo-100 hover:shadow-lg transition-all duration-300">
          <div className="flex flex-row items-center justify-between p-6 pb-2">
            <h3 className="text-sm font-medium text-indigo-900">Monthly Revenue</h3>
            <TrendingUp className="h-5 w-5 text-indigo-600" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold text-indigo-900">$52,320</div>
            <p className="text-xs text-indigo-600">+12% from last month</p>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}
