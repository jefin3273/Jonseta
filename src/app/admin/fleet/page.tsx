import { Metadata } from "next"
import Image from "next/image"
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
import { Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: "Fleet Management",
  description: "Manage your fleet vehicles",
}

export default function FleetManagement() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Fleet Management</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Truck className="mr-2 h-4 w-4" />
            Add New Vehicle
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Vehicle List</CardTitle>
          <CardDescription>Manage your fleet vehicles and their status.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vehicle ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Maintenance</TableHead>
                <TableHead>Fuel Consumption</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicles.map((vehicle) => (
                <TableRow key={vehicle.id}>
                  <TableCell className="font-medium">{vehicle.id}</TableCell>
                  <TableCell>{vehicle.type}</TableCell>
                  <TableCell>{vehicle.status}</TableCell>
                  <TableCell>{vehicle.lastMaintenance}</TableCell>
                  <TableCell>{vehicle.fuelConsumption}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">
                      Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Maintenance
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

const vehicles = [
  {
    id: "TRK-001",
    type: "Heavy Truck",
    status: "Active",
    lastMaintenance: "2023-05-15",
    fuelConsumption: "12 mpg",
  },
  {
    id: "VAN-002",
    type: "Delivery Van",
    status: "In Maintenance",
    lastMaintenance: "2023-06-01",
    fuelConsumption: "18 mpg",
  },
  {
    id: "TRK-003",
    type: "Medium Truck",
    status: "Active",
    lastMaintenance: "2023-05-20",
    fuelConsumption: "14 mpg",
  },
  {
    id: "VAN-004",
    type: "Sprinter Van",
    status: "Active",
    lastMaintenance: "2023-05-25",
    fuelConsumption: "20 mpg",
  },
  {
    id: "TRK-005",
    type: "Light Truck",
    status: "Out of Service",
    lastMaintenance: "2023-04-30",
    fuelConsumption: "16 mpg",
  },
]

