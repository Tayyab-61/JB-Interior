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
  ChevronDown,
  ChevronUp,
  ClockIcon,
  DollarSign,
  Gift,
  Wallet,
  ChevronsLeft,
  ChevronsRight
} from "lucide-react"
import Header from "./Header"
const navItems = [
  { 
    name: "Dashboard", 
    icon: LayoutDashboard, 
    href: "/",
    subItems: []
  },
  { 
    name: "Manage Employees", 
    icon: Users, 
    href: "/employees",
    subItems: [
      { name: "Employees List", href: "/employees" },
      { name: "Attendance", icon: ClockIcon, href: "/employees/attendance" },
      { name: "Salary", icon: DollarSign, href: "/employees/salary" },
      { name: "Advance", icon: Wallet, href: "/employees/advance" },
      { name: "Benefits", icon: Gift, href: "/employees/benefits" },
    ]
  },
  { 
    name: "Manage Projects", 
    icon: FolderKanban, 
    href: "/projects",
    subItems: [
      { name: "All Projects", href: "/projects" },
      { name: "Active Projects", href: "/projects/active" },
      { name: "Completed Projects", href: "/projects/completed" },
    ]
  },
  { 
    name: "Manage Contracts", 
    icon: FileContract, 
    href: "/contracts",
    subItems: [
      { name: "All Contracts", href: "/contracts" },
      { name: "New Contract", href: "/contracts/new" },
      { name: "Contract Templates", href: "/contracts/templates" },
    ]
  },
  { 
    name: "Manage Vendors", 
    icon: Store, 
    href: "/vendors",
    subItems: [
      { name: "All Vendors", href: "/vendors" },
      { name: "Add Vendor", href: "/vendors/add" },
      { name: "Vendor Categories", href: "/vendors/categories" },
    ]
  },
  { 
    name: "Manage Inventory", 
    icon: Package, 
    href: "/inventory",
    subItems: [
      { name: "Stock Overview", href: "/inventory" },
      { name: "Add Items", href: "/inventory/add" },
      { name: "Categories", href: "/inventory/categories" },
    ]
  },
]

export function MainSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState(null)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleExpand = (itemName) => {
    if (expandedItem === itemName) {
      setExpandedItem(null)
    } else {
      setExpandedItem(itemName)
    }
  }

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-40 p-2 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <aside className={`fixed text-sm lg:static h-screen bg-black  text-white transition-all duration-300 z-30 overflow-y-auto
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${isCollapsed ? 'w-20' : 'w-80'}`}>
        <div className={`flex h-20 items-center border-b border-gray-700 px-6 bg-gradient-to-r from-gray-900 to-black ${isCollapsed ? 'justify-center px-2' : ''}`}>
          {!isCollapsed && (
            <Link href="/" className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              JB Interior
            </Link>
          )}
        </div>
        
        <button
          className="absolute right-4 top-6 p-1.5 rounded-lg hover:bg-gray-800 lg:flex hidden"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronsRight className="h-5 w-5" /> : <ChevronsLeft className="h-5 w-5" />}
        </button>

        <nav className={`space-y-3 mt-6 ${isCollapsed ? 'p-2' : ''}`}>
          {navItems.map((item) => (
            <div key={item.name} className="group">
              <button
                className={`w-full flex items-center gap-3 rounded-lg px-4 py-3.5 text-gray-200 text-sm
                hover:bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-in-out
                group-hover:shadow-lg group-hover:shadow-purple-500/20
                ${isCollapsed && !expandedItem ? 'justify-center px-2' : 'justify-between'}`}
                onClick={() => !isCollapsed && toggleExpand(item.name)}
                title={isCollapsed ? item.name : ''}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5" />
                  {!isCollapsed && <span className="font-medium text-sm">{item.name}</span>}
                </div>
                {!isCollapsed && item.subItems.length > 0 && (
                  expandedItem === item.name ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                )}
              </button>
              
              {!isCollapsed && expandedItem === item.name && item.subItems.length > 0 && (
                <div className=" bg-slate-900  text-sm mt-2 space-y-2 animate-fadeIn">    
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="flex items-center justify-center gap-3 rounded-lg px-4 py-2.5 text-gray-300 text-sm
                      hover:bg-gray-800/50 hover:text-white transition-all duration-200
                      hover:translate-x-1"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      {subItem.icon && <subItem.icon className="h-4 w-4" />}
                      <span className="text-sm">{subItem.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}
