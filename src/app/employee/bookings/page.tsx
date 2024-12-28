import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function MyBookings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Bookings</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Bookings</CardTitle>
          <CardDescription>Your scheduled vehicle bookings</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Vehicle Type</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {upcomingBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.id}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.vehicleType}</TableCell>
                  <TableCell>{booking.purpose}</TableCell>
                  <TableCell>
                    <Badge variant={booking.status === 'Confirmed' ? 'default' : 'secondary'}>
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">View</Button>
                    <Button variant="ghost" size="sm">Modify</Button>
                    <Button variant="ghost" size="sm">Cancel</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Past Bookings</CardTitle>
          <CardDescription>Your completed vehicle bookings</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Vehicle Type</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pastBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.id}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.vehicleType}</TableCell>
                  <TableCell>{booking.purpose}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{booking.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">View</Button>
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

const upcomingBookings = [
  { id: 'B001', date: '2023-07-01', vehicleType: 'Sedan', purpose: 'Business', status: 'Confirmed' },
  { id: 'B002', date: '2023-07-03', vehicleType: 'SUV', purpose: 'Personal', status: 'Pending' },
  { id: 'B003', date: '2023-07-05', vehicleType: 'Van', purpose: 'Business', status: 'Confirmed' },
]

const pastBookings = [
  { id: 'B004', date: '2023-06-28', vehicleType: 'Sedan', purpose: 'Business', status: 'Completed' },
  { id: 'B005', date: '2023-06-25', vehicleType: 'Truck', purpose: 'Personal', status: 'Completed' },
  { id: 'B006', date: '2023-06-22', vehicleType: 'SUV', purpose: 'Business', status: 'Completed' },
]

