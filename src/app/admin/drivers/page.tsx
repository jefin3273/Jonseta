import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { UserPlus } from 'lucide-react'

export const metadata: Metadata = {
  title: "Driver Management",
  description: "Manage your fleet drivers",
}

export default function DriverManagement() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Driver Management</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add New Driver
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Driver List</CardTitle>
          <CardDescription>Manage your fleet drivers and their assignments.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>License</TableHead>
                <TableHead>Vehicle Assigned</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell className="font-medium">{driver.name}</TableCell>
                  <TableCell>{driver.license}</TableCell>
                  <TableCell>{driver.vehicleAssigned}</TableCell>
                  <TableCell>{driver.status}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm">
                      Remove
                    </Button>
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

const drivers = [
  {
    id: 1,
    name: "John Doe",
    license: "DL123456",
    vehicleAssigned: "Truck A",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    license: "DL789012",
    vehicleAssigned: "Van B",
    status: "On Leave",
  },
  {
    id: 3,
    name: "Mike Johnson",
    license: "DL345678",
    vehicleAssigned: "Truck C",
    status: "Active",
  },
  {
    id: 4,
    name: "Sarah Williams",
    license: "DL901234",
    vehicleAssigned: "Van D",
    status: "Training",
  },
  {
    id: 5,
    name: "Chris Brown",
    license: "DL567890",
    vehicleAssigned: "Truck E",
    status: "Active",
  },
]

