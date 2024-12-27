"use client";

import { EmployerHeader } from "@/components/employer/employer-header";
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
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import dynamic from "next/dynamic";

const CustomBarChart = dynamic(
  () => import("recharts").then((mod) => mod.BarChart),
  {
    ssr: false,
  }
);

export default function UsageReportsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <EmployerHeader title="Usage Reports" />
      <Card>
        <CardHeader>
          <CardTitle>Department-wise Vehicle Usage</CardTitle>
          <CardDescription>
            Monthly usage statistics by department
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ width: "100%", height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentUsageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="hoursUsed" fill="#8884d8" name="Hours Used" />
                <Bar
                  dataKey="bookings"
                  fill="#82ca9d"
                  name="Number of Bookings"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Detailed Usage Report</CardTitle>
          <CardDescription>
            Breakdown of vehicle usage by department
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Department</TableHead>
                <TableHead>Total Bookings</TableHead>
                <TableHead>Hours Used</TableHead>
                <TableHead>Most Used Vehicle Type</TableHead>
                <TableHead>Utilization Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usageReportData.map((dept) => (
                <TableRow key={dept.department}>
                  <TableCell>{dept.department}</TableCell>
                  <TableCell>{dept.totalBookings}</TableCell>
                  <TableCell>{dept.hoursUsed}</TableCell>
                  <TableCell>{dept.mostUsedVehicle}</TableCell>
                  <TableCell>{dept.utilizationRate}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-2">
        <Button>Download PDF Report</Button>
        <Button variant="outline">Export to Excel</Button>
      </div>
    </div>
  );
}

const departmentUsageData = [
  { department: "Sales", hoursUsed: 120, bookings: 45 },
  { department: "Marketing", hoursUsed: 80, bookings: 30 },
  { department: "IT", hoursUsed: 60, bookings: 20 },
  { department: "HR", hoursUsed: 40, bookings: 15 },
  { department: "Finance", hoursUsed: 30, bookings: 10 },
];

const usageReportData = [
  {
    department: "Sales",
    totalBookings: 45,
    hoursUsed: 120,
    mostUsedVehicle: "Sedan",
    utilizationRate: 85,
  },
  {
    department: "Marketing",
    totalBookings: 30,
    hoursUsed: 80,
    mostUsedVehicle: "SUV",
    utilizationRate: 70,
  },
  {
    department: "IT",
    totalBookings: 20,
    hoursUsed: 60,
    mostUsedVehicle: "Van",
    utilizationRate: 55,
  },
  {
    department: "HR",
    totalBookings: 15,
    hoursUsed: 40,
    mostUsedVehicle: "Compact",
    utilizationRate: 40,
  },
  {
    department: "Finance",
    totalBookings: 10,
    hoursUsed: 30,
    mostUsedVehicle: "Sedan",
    utilizationRate: 35,
  },
];
