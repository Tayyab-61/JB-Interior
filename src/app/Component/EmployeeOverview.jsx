import { Overview as OverviewChart } from "./Overview"

export function EmployeeOverview() {
  const stats = [
    {
      title: "Total Employees",
      value: "245",
      change: "+20% from last month",
    },
    {
      title: "Active Projects",
      value: "12",
      change: "+2 new projects this month",
    },
    {
      title: "Total Payroll",
      value: "$45,231.89",
      change: "+15% from last month",
    },
    {
      title: "Pending Approvals",
      value: "23",
      change: "5 require immediate attention",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.title} className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
            <div className="mt-2 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
            <p className="mt-1 text-xs text-gray-500">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-900">Payroll Overview</h3>
          <p className="mt-1 text-sm text-gray-500">Monthly payroll distribution across departments</p>
        </div>
        <div className="p-6">
          <OverviewChart />
        </div>
      </div>
    </div>
  )
}

