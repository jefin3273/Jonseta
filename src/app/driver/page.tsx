import { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, MessageSquare } from "lucide-react";
import { DriverHeader } from "@/components/driver/driver-header";

export const metadata: Metadata = {
  title: "Driver Dashboard",
  description: "FleetWise Driver Dashboard Overview",
};

export default function DriverDashboard() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <DriverHeader title="Dashboard" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Trip</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2 hours</div>
            <p className="text-xs text-muted-foreground">
              Pickup at 123 Main St
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Today&apos;s Hours
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.5 hours</div>
            <p className="text-xs text-muted-foreground">2.5 hours remaining</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Weekly Earnings
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$750.00</div>
            <p className="text-xs text-muted-foreground">+15% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              2 from dispatch, 1 from admin
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Upcoming Trips</CardTitle>
            <CardDescription>
              Your schedule for the next 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTrips.map((trip, index) => (
                <div key={index} className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {trip.destination}
                    </p>
                    <p className="text-sm text-muted-foreground">{trip.time}</p>
                  </div>
                  <div className="ml-auto font-medium">
                    <Link href={`/driver/trips/${trip.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.action}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button>Start Trip</Button>
            <Button variant="outline">End Trip</Button>
            <Button variant="secondary">Report Incident</Button>
            <Link href="/driver/emergency">
              <Button variant="destructive">
                Request Emergency Assistance
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const upcomingTrips = [
  { id: "1", destination: "456 Elm St, Springfield", time: "Today, 2:00 PM" },
  { id: "2", destination: "789 Oak Rd, Shelbyville", time: "Today, 4:30 PM" },
  {
    id: "3",
    destination: "101 Pine Ave, Capital City",
    time: "Tomorrow, 9:00 AM",
  },
];

const recentActivity = [
  { action: "Completed trip to 789 Beach Blvd", time: "1 hour ago" },
  { action: "Submitted fuel receipt", time: "3 hours ago" },
  { action: "Completed daily vehicle inspection", time: "5 hours ago" },
];
