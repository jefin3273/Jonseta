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
import { Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: "Vendor Management",
  description: "Manage your fleet vendors",
}

export default function VendorManagement() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Vendor Management</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Building2 className="mr-2 h-4 w-4" />
            Add New Vendor
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Vendor List</CardTitle>
          <CardDescription>Manage your fleet vendors and their contracts.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vendor Name</TableHead>
                <TableHead>Service Type</TableHead>
                <TableHead>Contract Status</TableHead>
                <TableHead>Performance Rating</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vendors.map((vendor) => (
                <TableRow key={vendor.id}>
                  <TableCell className="font-medium">{vendor.name}</TableCell>
                  <TableCell>{vendor.serviceType}</TableCell>
                  <TableCell>{vendor.contractStatus}</TableCell>
                  <TableCell>{vendor.performanceRating}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Update Contract
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

const vendors = [
  {
    id: 1,
    name: "AutoFix Solutions",
    serviceType: "Vehicle Maintenance",
    contractStatus: "Active",
    performanceRating: "4.5/5",
  },
  {
    id: 2,
    name: "FuelMax Inc.",
    serviceType: "Fuel Supply",
    contractStatus: "Active",
    performanceRating: "4.2/5",
  },
  {
    id: 3,
    name: "TirePro Services",
    serviceType: "Tire Replacement",
    contractStatus: "Under Review",
    performanceRating: "3.8/5",
  },
  {
    id: 4,
    name: "CleanFleet Co.",
    serviceType: "Vehicle Cleaning",
    contractStatus: "Active",
    performanceRating: "4.7/5",
  },
  {
    id: 5,
    name: "GPS Tracker Systems",
    serviceType: "GPS Installation",
    contractStatus: "Expired",
    performanceRating: "4.0/5",
  },
]

