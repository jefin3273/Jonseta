import { Metadata } from "next"
import { EmployerHeader } from "@/components/employer/employer-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X } from 'lucide-react'

export const metadata: Metadata = {
  title: "Approve/Reject Bookings",
  description: "Review and manage employee vehicle booking requests",
}

export default function ApproveBookingsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <EmployerHeader title="Approve/Reject Bookings" />
      
      <Card>
        <CardHeader>
          <CardTitle>Pending Bookings</CardTitle>
          <CardDescription>Review and manage employee vehicle booking requests</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Vehicle Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.employee}</TableCell>
                  <TableCell>{booking.department}</TableCell>
                  <TableCell>{booking.vehicleType}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.duration}</TableCell>
                  <TableCell>{booking.purpose}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-green-500 hover:bg-green-600">
                        <Check className="mr-1 h-4 w-4" />
                        Approve
                      </Button>
                      <Button size="sm" variant="destructive">
                        <X className="mr-1 h-4 w-4" />
                        Reject
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

const pendingBookings = [
  {
    id: 1,
    employee: "John Doe",
    department: "Sales",
    vehicleType: "Sedan",
    date: "2023-06-30",
    duration: "4 hours",
    purpose: "Client meeting"
  },
  {
    id: 2,
    employee: "Jane Smith",
    department: "Marketing",
    vehicleType: "SUV",
    date: "2023-07-01",
    duration: "Full day",
    purpose: "Event setup"
  },
  {
    id: 3,
    employee: "Bob Johnson",
    department: "IT",
    vehicleType: "Van",
    date: "2023-07-02",
    duration: "2 days",
    purpose: "Equipment transport"
  },
  {
    id: 4,
    employee: "Alice Brown",
    department: "HR",
    vehicleType: "Compact",
    date: "2023-07-03",
    duration: "3 hours",
    purpose: "Recruitment drive"
  },
]

