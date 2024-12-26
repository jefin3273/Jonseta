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
import { Download } from 'lucide-react'

export const metadata: Metadata = {
  title: "Audit Trail",
  description: "View and export audit logs",
}

export default function AuditTrail() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Audit Trail</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Logs
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Audit Logs</CardTitle>
          <CardDescription>View all actions taken within the application.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>{log.timestamp}</TableCell>
                  <TableCell>{log.user}</TableCell>
                  <TableCell>{log.action}</TableCell>
                  <TableCell>{log.details}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

const auditLogs = [
  {
    id: 1,
    timestamp: "2023-06-15 09:30:22",
    user: "admin@example.com",
    action: "User Login",
    details: "Successful login from IP 192.168.1.100",
  },
  {
    id: 2,
    timestamp: "2023-06-15 10:15:45",
    user: "john.doe@example.com",
    action: "Update Driver Profile",
    details: "Updated contact information for Driver ID: DRV-001",
  },
  {
    id: 3,
    timestamp: "2023-06-15 11:05:33",
    user: "jane.smith@example.com",
    action: "Add New Vehicle",
    details: "Added new vehicle with ID: VEH-078 to the fleet",
  },
  {
    id: 4,
    timestamp: "2023-06-15 13:20:10",
    user: "mike.johnson@example.com",
    action: "Generate Report",
    details: "Generated monthly performance report for May 2023",
  },
  {
    id: 5,
    timestamp: "2023-06-15 15:45:18",
    user: "sarah.williams@example.com",
    action: "Update Vendor Contract",
    details: "Updated contract terms for Vendor ID: VND-023",
  },
]

