import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, FileText, BarChart, CreditCard } from 'lucide-react'

export const metadata: Metadata = {
  title: "Vendor Dashboard",
  description: "Jonseta Corp Vendor Dashboard Overview",
}

export default function VendorDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Vendor Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Vehicles</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">3 in maintenance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Contracts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">1 pending renewal</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Performance Score</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">+2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Invoices</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450</div>
            <p className="text-xs text-muted-foreground">2 invoices pending</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Your latest actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.date}
                    </p>
                  </div>
                  <div className="ml-auto font-medium">
                    {activity.status}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Vehicle Utilization</CardTitle>
            <CardDescription>Current status of your fleet</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {vehicleUtilization.map((status, index) => (
                <div key={index} className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{status.status}</p>
                    <p className="text-sm text-muted-foreground">{status.count} vehicles</p>
                  </div>
                  <div className="ml-auto">{status.percentage}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Link href="/vendor/vehicles">
                <Button>Add New Vehicle</Button>
              </Link>
              <Link href="/vendor/vehicles/maintenance">
                <Button variant="outline">Update Maintenance</Button>
              </Link>
              <Link href="/vendor/invoices">
                <Button variant="secondary">Generate Invoice</Button>
              </Link>
              <Link href="/vendor/performance">
                <Button variant="outline">View Performance Report</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const recentActivities = [
  { action: "Added new vehicle", date: "2023-06-28", status: "Completed" },
  { action: "Updated maintenance log", date: "2023-06-27", status: "Completed" },
  { action: "Submitted invoice", date: "2023-06-26", status: "Pending" },
  { action: "Renewed contract", date: "2023-06-25", status: "Completed" },
]

const vehicleUtilization = [
  { status: "In Use", count: 18, percentage: 75 },
  { status: "Available", count: 3, percentage: 12.5 },
  { status: "Maintenance", count: 3, percentage: 12.5 },
]

