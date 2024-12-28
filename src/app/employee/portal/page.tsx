import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Calendar, Users, AlertTriangle } from 'lucide-react'

export default function EmployeePortal() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to the Employee Portal</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Book a Vehicle</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Register and book vehicles for business or personal use</p>
            <Button className="mt-4 w-full" asChild>
              <Link href="/employee/book">Book Now</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">View past bookings and manage upcoming trips</p>
            <Button className="mt-4 w-full" variant="outline" asChild>
              <Link href="/employee/bookings">View Bookings</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ride Sharing</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Opt for ride-sharing with colleagues for efficiency</p>
            <Button className="mt-4 w-full" variant="outline" asChild>
              <Link href="/employee/ride-sharing">Find Shared Rides</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Emergency</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Request emergency assistance</p>
            <Button className="mt-4 w-full" variant="destructive" asChild>
              <Link href="/employee/emergency">Emergency</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest bookings and activities</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {recentActivity.map((activity, index) => (
              <li key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.date}</p>
                </div>
                <Button variant="ghost" asChild>
                  <Link href={activity.link}>View</Link>
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

const recentActivity = [
  { action: "Booked a sedan for business use", date: "2023-06-28", link: "/employee/bookings/1" },
  { action: "Joined a shared ride to downtown office", date: "2023-06-25", link: "/employee/ride-sharing/1" },
  { action: "Completed a personal use trip", date: "2023-06-22", link: "/employee/bookings/2" },
  { action: "Updated vehicle preferences", date: "2023-06-20", link: "/employee/profile" },
]

