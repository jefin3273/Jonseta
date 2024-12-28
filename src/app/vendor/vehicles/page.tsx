"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ManageVehicles() {
  const [vehicles, setVehicles] = useState(initialVehicles);
  const [newVehicle, setNewVehicle] = useState({
    id: "",
    make: "",
    model: "",
    year: "",
    status: "Available",
  });

  const handleAddVehicle = () => {
    setVehicles([...vehicles, { ...newVehicle, id: Date.now().toString() }]);
    setNewVehicle({
      id: "",
      make: "",
      model: "",
      year: "",
      status: "Available",
    });
  };

  const handleUpdateStatus = (id: string, newStatus: string) => {
    setVehicles(
      vehicles.map((vehicle) =>
        vehicle.id === id ? { ...vehicle, status: newStatus } : vehicle
      )
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Manage Vehicles</h1>

      <Card>
        <CardHeader>
          <CardTitle>Add New Vehicle</CardTitle>
          <CardDescription>
            Enter the details of the new vehicle
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddVehicle();
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="make">Make</Label>
                <Input
                  id="make"
                  value={newVehicle.make}
                  onChange={(e) =>
                    setNewVehicle({ ...newVehicle, make: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="model">Model</Label>
                <Input
                  id="model"
                  value={newVehicle.model}
                  onChange={(e) =>
                    setNewVehicle({ ...newVehicle, model: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input
                  id="year"
                  value={newVehicle.year}
                  onChange={(e) =>
                    setNewVehicle({ ...newVehicle, year: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={newVehicle.status}
                  onValueChange={(value) =>
                    setNewVehicle({ ...newVehicle, status: value })
                  }
                >
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Available">Available</SelectItem>
                    <SelectItem value="In Use">In Use</SelectItem>
                    <SelectItem value="Maintenance">Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit">Add Vehicle</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vehicle Fleet</CardTitle>
          <CardDescription>Manage your existing vehicles</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Make</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicles.map((vehicle) => (
                <TableRow key={vehicle.id}>
                  <TableCell>{vehicle.id}</TableCell>
                  <TableCell>{vehicle.make}</TableCell>
                  <TableCell>{vehicle.model}</TableCell>
                  <TableCell>{vehicle.year}</TableCell>
                  <TableCell>{vehicle.status}</TableCell>
                  <TableCell>
                    <Select
                      value={vehicle.status}
                      onValueChange={(value) =>
                        handleUpdateStatus(vehicle.id, value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Update status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Available">Available</SelectItem>
                        <SelectItem value="In Use">In Use</SelectItem>
                        <SelectItem value="Maintenance">Maintenance</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

const initialVehicles = [
  {
    id: "1",
    make: "Toyota",
    model: "Camry",
    year: "2022",
    status: "Available",
  },
  { id: "2", make: "Honda", model: "Civic", year: "2021", status: "In Use" },
  {
    id: "3",
    make: "Ford",
    model: "F-150",
    year: "2023",
    status: "Maintenance",
  },
];
