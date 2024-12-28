"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function RideSharing() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredRides = availableRides.filter(ride => 
    ride.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ride.date.includes(searchQuery)
  )

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Ride Sharing</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Find a Shared Ride</CardTitle>
          <CardDescription>Search and join available shared rides</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Label htmlFor="search" className="sr-only">Search rides</Label>
              <Input
                id="search"
                placeholder="Search by destination or date"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button>Search</Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead>Available Seats</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRides.map((ride) => (
                  <TableRow key={ride.id}>
                    <TableCell>{ride.date}</TableCell>
                    <TableCell>{ride.time}</TableCell>
                    <TableCell>{ride.destination}</TableCell>
                    <TableCell>{ride.availableSeats}</TableCell>
                    <TableCell>
                      <Badge variant={ride.status === 'Open' ? 'default' : 'secondary'}>
                        {ride.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">Join Ride</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>My Shared Rides</CardTitle>
          <CardDescription>Rides you&apos;ve joined or created</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mySharedRides.map((ride) => (
                <TableRow key={ride.id}>
                  <TableCell>{ride.date}</TableCell>
                  <TableCell>{ride.time}</TableCell>
                  <TableCell>{ride.destination}</TableCell>
                  <TableCell>{ride.role}</TableCell>
                  <TableCell>
                    <Badge variant={ride.status === 'Upcoming' ? 'default' : 'secondary'}>
                      {ride.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">View Details</Button>
                    {ride.role === 'Driver' && (
                      <Button variant="ghost" size="sm">Manage Ride</Button>
                    )}
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

const availableRides = [
  { id: 1, date: '2023-07-01', time: '09:00 AM', destination: 'Downtown Office', availableSeats: 3, status: 'Open' },
  { id: 2, date: '2023-07-02', time: '08:30 AM', destination: 'Airport', availableSeats: 2, status: 'Open' },
  { id: 3, date: '2023-07-03', time: '10:00 AM', destination: 'Client Meeting', availableSeats: 1, status: 'Open' },
  { id: 4, date: '2023-07-04', time: '02:00 PM', destination: 'Conference Center', availableSeats: 4, status: 'Open' },
]

const mySharedRides = [
  { id: 1, date: '2023-07-05', time: '09:30 AM', destination: 'Downtown Office', role: 'Passenger', status: 'Upcoming' },
  { id: 2, date: '2023-07-06', time: '08:00 AM', destination: 'Airport', role: 'Driver', status: 'Upcoming' },
  { id: 3, date: '2023-06-30', time: '11:00 AM', destination: 'Client Meeting', role: 'Passenger', status: 'Completed' },
]

