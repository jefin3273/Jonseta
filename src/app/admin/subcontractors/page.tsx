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
import { UserPlus } from 'lucide-react'

export const metadata: Metadata = {
  title: "Subcontractor Management",
  description: "Manage your fleet subcontractors",
}

export default function SubcontractorManagement() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Subcontractor Management</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add New Subcontractor
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Subcontractor List</CardTitle>
          <CardDescription>Manage your fleet subcontractors and their assignments.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Specialization</TableHead>
                <TableHead>Current Assignment</TableHead>
                <TableHead>Performance Rating</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subcontractors.map((subcontractor) => (
                <TableRow key={subcontractor.id}>
                  <TableCell className="font-medium">{subcontractor.name}</TableCell>
                  <TableCell>{subcontractor.specialization}</TableCell>
                  <TableCell>{subcontractor.currentAssignment}</TableCell>
                  <TableCell>{subcontractor.performanceRating}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Assign Task
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

const subcontractors = [
  {
    id: 1,
    name: "ABC Logistics",
    specialization: "Long-haul Transport",
    currentAssignment: "Route A to B",
    performanceRating: "4.5/5",
  },
  {
    id: 2,
    name: "QuickShip Co.",
    specialization: "Express Delivery",
    currentAssignment: "City Center Deliveries",
    performanceRating: "4.2/5",
  },
  {
    id: 3,
    name: "GreenTransit LLC",
    specialization: "Eco-friendly Transport",
    currentAssignment: "None",
    performanceRating: "3.8/5",
  },
  {
    id: 4,
    name: "HeavyHaul Inc.",
    specialization: "Oversized Cargo",
    currentAssignment: "Special Project X",
    performanceRating: "4.7/5",
  },
  {
    id: 5,
    name: "ColdChain Solutions",
    specialization: "Refrigerated Transport",
    currentAssignment: "Perishables Route",
    performanceRating: "4.0/5",
  },
]

