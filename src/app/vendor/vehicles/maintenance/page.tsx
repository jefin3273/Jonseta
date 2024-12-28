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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function VehicleMaintenance() {
  const [vehicles, setVehicles] = useState(initialVehicles);
  const [newMaintenance, setNewMaintenance] = useState({
    vehicleId: "",
    type: "",
    date: "",
    notes: "",
  });

  const handleAddMaintenance = () => {
    const updatedVehicles = vehicles.map((vehicle) =>
      vehicle.id === newMaintenance.vehicleId
        ? {
            ...vehicle,
            maintenanceHistory: [...vehicle.maintenanceHistory, newMaintenance],
          }
        : vehicle
    );
    setVehicles(updatedVehicles);
    setNewMaintenance({ vehicleId: "", type: "", date: "", notes: "" });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Vehicle Maintenance</h1>

      <Card>
        <CardHeader>
          <CardTitle>Maintenance Status</CardTitle>
          <CardDescription>
            View and update vehicle maintenance records
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vehicle ID</TableHead>
                <TableHead>Make/Model</TableHead>
                <TableHead>Last Maintenance</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicles.map((vehicle) => (
                <TableRow key={vehicle.id}>
                  <TableCell>{vehicle.id}</TableCell>
                  <TableCell>{vehicle.makeModel}</TableCell>
                  <TableCell>{vehicle.lastMaintenance}</TableCell>
                  <TableCell>{vehicle.status}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          Update
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Update Maintenance</DialogTitle>
                          <DialogDescription>
                            Enter new maintenance details for{" "}
                            {vehicle.makeModel}
                          </DialogDescription>
                        </DialogHeader>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleAddMaintenance();
                          }}
                        >
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="type" className="text-right">
                                Type
                              </Label>
                              <Select
                                value={newMaintenance.type}
                                onValueChange={(value) =>
                                  setNewMaintenance({
                                    ...newMaintenance,
                                    type: value,
                                    vehicleId: vehicle.id,
                                  })
                                }
                              >
                                <SelectTrigger id="type" className="col-span-3">
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Routine">
                                    Routine
                                  </SelectItem>
                                  <SelectItem value="Repair">Repair</SelectItem>
                                  <SelectItem value="Inspection">
                                    Inspection
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="date" className="text-right">
                                Date
                              </Label>
                              <Input
                                id="date"
                                type="date"
                                value={newMaintenance.date}
                                onChange={(e) =>
                                  setNewMaintenance({
                                    ...newMaintenance,
                                    date: e.target.value,
                                  })
                                }
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="notes" className="text-right">
                                Notes
                              </Label>
                              <Input
                                id="notes"
                                value={newMaintenance.notes}
                                onChange={(e) =>
                                  setNewMaintenance({
                                    ...newMaintenance,
                                    notes: e.target.value,
                                  })
                                }
                                className="col-span-3"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="submit">Save Maintenance</Button>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Maintenance History</CardTitle>
          <CardDescription>
            View detailed maintenance history for each vehicle
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Select>
            <SelectTrigger className="w-[200px] mb-4">
              <SelectValue placeholder="Select Vehicle" />
            </SelectTrigger>
            <SelectContent>
              {vehicles.map((vehicle) => (
                <SelectItem key={vehicle.id} value={vehicle.id}>
                  {vehicle.makeModel}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicles[0].maintenanceHistory.map((maintenance, index) => (
                <TableRow key={index}>
                  <TableCell>{maintenance.date}</TableCell>
                  <TableCell>{maintenance.type}</TableCell>
                  <TableCell>{maintenance.notes}</TableCell>
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
    id: "V001",
    makeModel: "Toyota Camry",
    lastMaintenance: "2023-05-15",
    status: "Operational",
    maintenanceHistory: [
      {
        date: "2023-05-15",
        type: "Routine",
        notes: "Oil change and tire rotation",
      },
      { date: "2023-03-01", type: "Repair", notes: "Replaced brake pads" },
    ],
  },
  {
    id: "V002",
    makeModel: "Honda Civic",
    lastMaintenance: "2023-06-01",
    status: "In Maintenance",
    maintenanceHistory: [
      { date: "2023-06-01", type: "Inspection", notes: "Annual inspection" },
      { date: "2023-04-10", type: "Routine", notes: "Oil change" },
    ],
  },
  {
    id: "V003",
    makeModel: "Ford F-150",
    lastMaintenance: "2023-05-20",
    status: "Operational",
    maintenanceHistory: [
      {
        date: "2023-05-20",
        type: "Routine",
        notes: "Oil change and air filter replacement",
      },
      { date: "2023-02-15", type: "Repair", notes: "Fixed electrical issue" },
    ],
  },
];
