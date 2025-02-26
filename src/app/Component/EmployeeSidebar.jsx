"use client"

import React from "react"
import { useState } from "react"
import Link from "next/link"
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  FileCodeIcon as FileContract,
  Store,
  Package,
  Menu,
  X,
} from "lucide-react"

const navItems = [
  { name: "Manage Employees", icon: Users, href: "/employees" },
  { name: "Employees", icon: FolderKanban, href: "/employees" },
  { name: "Attendance   ", icon: FileContract, href: "/attendance" },
  { name: "Salary", icon: Store, href: "/salary" },
  { name: "Advance", icon: Package, href: "/advance" },
  { name: "Benefits", icon: Package, href: "/benefits" },
]

export function EmployeeSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-40 p-2 bg-white rounded-lg shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <aside className={`fixed lg:static h-screen bg-white border-r shadow-lg transition-all duration-300 z-30
        ${isSidebarOpen ? 'w-80 translate-x-0' : 'w-80 -translate-x-full lg:translate-x-0'}`}>
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/" className="font-bold text-xl">
            JB Interior
          </Link>
        </div>
        
        <nav className="space-y-6 mt-6 p-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white border border-gray-200 shadow-sm transition-all duration-200 transform hover:scale-[1.02]"
              onClick={() => setIsSidebarOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}
