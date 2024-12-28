import { Metadata } from "next";
import { DriverHeader } from "@/components/driver/driver-header";
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

export const metadata: Metadata = {
  title: "Trip Logs",
  description: "View your completed trips and incident reports",
};

export default function TripLogsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <DriverHeader title="Trip Logs" />

      <Card>
        <CardHeader>
          <CardTitle>Completed Trips</CardTitle>
          <CardDescription>
            Your trip history for the past 30 days
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Start Time</TableHead>
                <TableHead>End Time</TableHead>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tripLogs.map((trip) => (
                <TableRow key={trip.id}>
                  <TableCell>{trip.date}</TableCell>
                  <TableCell>{trip.startTime}</TableCell>
                  <TableCell>{trip.endTime}</TableCell>
                  <TableCell>{trip.from}</TableCell>
                  <TableCell>{trip.to}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        trip.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : trip.status === "Incident Reported"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {trip.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Incident Reports</CardTitle>
          <CardDescription>
            Recent incidents or issues reported during trips
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Trip ID</TableHead>
                <TableHead>Incident Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {incidentReports.map((incident) => (
                <TableRow key={incident.id}>
                  <TableCell>{incident.date}</TableCell>
                  <TableCell>{incident.tripId}</TableCell>
                  <TableCell>{incident.type}</TableCell>
                  <TableCell>{incident.description}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        incident.status === "Resolved"
                          ? "bg-green-100 text-green-800"
                          : incident.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {incident.status}
                    </span>
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

const tripLogs = [
  {
    id: 1,
    date: "2023-06-27",
    startTime: "09:00 AM",
    endTime: "10:30 AM",
    from: "123 Main St",
    to: "456 Elm St",
    status: "Completed",
  },
  {
    id: 2,
    date: "2023-06-26",
    startTime: "02:00 PM",
    endTime: "03:15 PM",
    from: "789 Oak Rd",
    to: "101 Pine Ave",
    status: "Incident Reported",
  },
  {
    id: 3,
    date: "2023-06-25",
    startTime: "11:00 AM",
    endTime: "12:30 PM",
    from: "222 Maple Dr",
    to: "333 Birch Ln",
    status: "Completed",
  },
  {
    id: 4,
    date: "2023-06-24",
    startTime: "08:00 AM",
    endTime: "09:45 AM",
    from: "444 Cedar St",
    to: "555 Spruce Rd",
    status: "Completed",
  },
];

const incidentReports = [
  {
    id: 1,
    date: "2023-06-26",
    tripId: "T-1234",
    type: "Vehicle Breakdown",
    description: "Engine overheating",
    status: "Resolved",
  },
  {
    id: 2,
    date: "2023-06-22",
    tripId: "T-1230",
    type: "Traffic Accident",
    description: "Minor fender bender, no injuries",
    status: "Pending",
  },
  {
    id: 3,
    date: "2023-06-20",
    tripId: "T-1225",
    type: "Customer Complaint",
    description: "Late arrival due to traffic",
    status: "Under Review",
  },
];
