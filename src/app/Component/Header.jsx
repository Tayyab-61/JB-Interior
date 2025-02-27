

import { useState } from "react"
import { Bell, HelpCircle, Search, Settings, ChevronDown } from "lucide-react"

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="w-full h-fit bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="relative flex items-center w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search Employee"
            className="pl-10 h-10 w-full bg-gray-100 border border-gray-200 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 font-medium text-gray-700">
            Zylker
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>

          <div className="relative">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              8
            </span>
          </div>

          <Settings className="h-5 w-5 text-gray-600" />
          <HelpCircle className="h-5 w-5 text-gray-600" />

          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-600">U</span>
          </div>
        </div>
      </div>
    </header>
  )
}

