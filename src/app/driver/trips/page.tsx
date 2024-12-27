import { Metadata } from "next";
import Link from "next/link";
import { DriverHeader } from "@/components/driver/driver-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MapPin, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Assigned Trips",
  description: "View your assigned trips and navigate to destinations",
};

export default function AssignedTripsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <DriverHeader title="Assigned Trips" />

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Trips</CardTitle>
          <CardDescription>
            Your scheduled trips for the next 7 days
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Pickup Location</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trips.map((trip) => (
                <TableRow key={trip.id}>
                  <TableCell>{trip.date}</TableCell>
                  <TableCell>{trip.time}</TableCell>
                  <TableCell>{trip.pickup}</TableCell>
                  <TableCell>{trip.destination}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">
                      <MapPin className="mr-2 h-4 w-4" />
                      Navigate
                    </Button>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

const trips = [
  {
    id: 1,
    date: "2023-06-28",
    time: "09:00 AM",
    pickup: "123 Main St, Anytown",
    destination: "456 Elm St, Othertown",
  },
  {
    id: 2,
    date: "2023-06-28",
    time: "02:00 PM",
    pickup: "789 Oak Rd, Somewhere",
    destination: "101 Pine Ave, Elsewhere",
  },
  {
    id: 3,
    date: "2023-06-29",
    time: "10:30 AM",
    pickup: "222 Maple Dr, Heretown",
    destination: "333 Birch Ln, Theretown",
  },
  {
    id: 4,
    date: "2023-06-30",
    time: "08:00 AM",
    pickup: "444 Cedar St, Nearville",
    destination: "555 Spruce Rd, Farville",
  },
];
