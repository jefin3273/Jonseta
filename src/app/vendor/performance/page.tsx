"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

export default function PerformanceTracking() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Performance Tracking</h1>

      <div className="flex justify-between items-center">
        <Select defaultValue="lastMonth">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="lastMonth">Last Month</SelectItem>
            <SelectItem value="lastQuarter">Last Quarter</SelectItem>
            <SelectItem value="lastYear">Last Year</SelectItem>
          </SelectContent>
        </Select>
        <Button>Download Report</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Availability Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.5%</div>
            <p className="text-xs text-muted-foreground">
              +0.5% from last period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              SLA Compliance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">97%</div>
            <p className="text-xs text-muted-foreground">
              -1% from last period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Customer Satisfaction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7/5</div>
            <p className="text-xs text-muted-foreground">
              +0.2 from last period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Maintenance Efficiency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">
              +3% from last period
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance Over Time</CardTitle>
          <CardDescription>
            Monthly breakdown of key performance indicators
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="availability" fill="#8884d8" name="Availability" />
              <Bar
                dataKey="slaCompliance"
                fill="#82ca9d"
                name="SLA Compliance"
              />
              <Bar
                dataKey="customerSatisfaction"
                fill="#ffc658"
                name="Customer Satisfaction"
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Vehicles</CardTitle>
          <CardDescription>
            Vehicles with the highest utilization and customer satisfaction
          </CardDescription>
        </CardHeader>
        <CardContent>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Vehicle ID</th>
                <th className="text-left">Make/Model</th>
                <th className="text-left">Utilization Rate</th>
                <th className="text-left">Customer Rating</th>
              </tr>
            </thead>
            <tbody>
              {topPerformingVehicles.map((vehicle, index) => (
                <tr key={index}>
                  <td>{vehicle.id}</td>
                  <td>{vehicle.makeModel}</td>
                  <td>{vehicle.utilizationRate}%</td>
                  <td>{vehicle.customerRating}/5</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

const performanceData = [
  {
    month: "Jan",
    availability: 98,
    slaCompliance: 97,
    customerSatisfaction: 4.5,
  },
  {
    month: "Feb",
    availability: 97,
    slaCompliance: 96,
    customerSatisfaction: 4.6,
  },
  {
    month: "Mar",
    availability: 99,
    slaCompliance: 98,
    customerSatisfaction: 4.7,
  },
  {
    month: "Apr",
    availability: 98,
    slaCompliance: 97,
    customerSatisfaction: 4.8,
  },
  {
    month: "May",
    availability: 97,
    slaCompliance: 95,
    customerSatisfaction: 4.6,
  },
  {
    month: "Jun",
    availability: 98,
    slaCompliance: 97,
    customerSatisfaction: 4.7,
  },
];

const topPerformingVehicles = [
  {
    id: "V001",
    makeModel: "Toyota Camry",
    utilizationRate: 95,
    customerRating: 4.8,
  },
  {
    id: "V015",
    makeModel: "Honda Civic",
    utilizationRate: 93,
    customerRating: 4.7,
  },
  {
    id: "V008",
    makeModel: "Ford F-150",
    utilizationRate: 91,
    customerRating: 4.9,
  },
  {
    id: "V022",
    makeModel: "Tesla Model 3",
    utilizationRate: 89,
    customerRating: 4.8,
  },
];
