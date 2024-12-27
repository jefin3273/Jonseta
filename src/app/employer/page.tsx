import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, Users, AlertTriangle } from 'lucide-react'
import { EmployerHeader } from "@/components/employer/employer-header"

export const metadata: Metadata = {
  title: "Employer Dashboard",
  description: "FleetWise Employer Dashboard Overview",
}

export default function EmployerDashboard() {
  return (
    <div className="space-y-4">
      <EmployerHeader title="Dashboard" />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Requires your approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Vehicles</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-muted-foreground">Currently in use</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">250</div>
            <p className="text-xs text-muted-foreground">Across all departments</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Maintenance Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Vehicles need attention</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>Latest vehicle booking requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {recentBookings.map((booking, index) => (
                <div key={index} className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{booking.employee}</p>
                    <p className="text-sm text-muted-foreground">
                      {booking.department} - {booking.date}
                    </p>
                  </div>
                  <div className="ml-auto font-medium">
                    {booking.status === 'Pending' ? (
                      <Button variant="outline" size="sm">Review</Button>
                    ) : (
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        booking.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {booking.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Department Usage</CardTitle>
            <CardDescription>Vehicle usage by department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {departmentUsage.map((dept, index) => (
                <div key={index} className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{dept.name}</p>
                    <p className="text-sm text-muted-foreground">{dept.vehicles} vehicles</p>
                  </div>
                  <div className="ml-auto">{dept.usage}%</div>
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
              <Link href="/employer/bookings/approve">
                <Button>Review Bookings</Button>
              </Link>
              <Link href="/employer/bookings/schedule">
                <Button variant="outline">Schedule Booking</Button>
              </Link>
              <Link href="/employer/reports">
                <Button variant="secondary">View Reports</Button>
              </Link>
              <Link href="/employer/employees">
                <Button variant="outline">Manage Employees</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const recentBookings = [
  { employee: "John Doe", department: "Sales", date: "2023-06-28", status: "Pending" },
  { employee: "Jane Smith", department: "Marketing", date: "2023-06-27", status: "Approved" },
  { employee: "Bob Johnson", department: "IT", date: "2023-06-26", status: "Rejected" },
  { employee: "Alice Brown", department: "HR", date: "2023-06-25", status: "Pending" },
]

const departmentUsage = [
  { name: "Sales", vehicles: 15, usage: 85 },
  { name: "Marketing", vehicles: 8, usage: 62 },
  { name: "IT", vehicles: 5, usage: 45 },
  { name: "HR", vehicles: 3, usage: 30 },
]

