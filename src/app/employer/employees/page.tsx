"use client";

import { useState } from "react";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ManageEmployeesPage() {
  const [employees, setEmployees] = useState(initialEmployees);

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, { ...newEmployee, id: employees.length + 1 }]);
  };

  const handleRemoveEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const handleUpdatePermission = (id, newPermission) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id
          ? { ...employee, bookingPermission: newPermission }
          : employee
      )
    );
  };

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <EmployerHeader title="Manage Employees" />

      <Card>
        <CardHeader>
          <CardTitle>Employee List</CardTitle>
          <CardDescription>
            Manage employees and their booking permissions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Booking Permission</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>
                    <Select
                      value={employee.bookingPermission}
                      onValueChange={(value) =>
                        handleUpdatePermission(employee.id, value)
                      }
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select permission" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full">Full Access</SelectItem>
                        <SelectItem value="limited">Limited Access</SelectItem>
                        <SelectItem value="none">No Access</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      onClick={() => handleRemoveEmployee(employee.id)}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Add New Employee</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Employee</DialogTitle>
            <DialogDescription>
              Enter the details of the new employee
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const newEmployee = {
                name: formData.get("name"),
                department: formData.get("department"),
                email: formData.get("email"),
                bookingPermission: formData.get("bookingPermission"),
              };
              handleAddEmployee(newEmployee);
              e.target.reset();
            }}
          >
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" name="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="department" className="text-right">
                  Department
                </Label>
                <Input
                  id="department"
                  name="department"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bookingPermission" className="text-right">
                  Booking Permission
                </Label>
                <Select name="bookingPermission">
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select permission" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Full Access</SelectItem>
                    <SelectItem value="limited">Limited Access</SelectItem>
                    <SelectItem value="none">No Access</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add Employee</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const initialEmployees = [
  {
    id: 1,
    name: "John Doe",
    department: "Sales",
    email: "john@example.com",
    bookingPermission: "full",
  },
  {
    id: 2,
    name: "Jane Smith",
    department: "Marketing",
    email: "jane@example.com",
    bookingPermission: "limited",
  },
  {
    id: 3,
    name: "Bob Johnson",
    department: "IT",
    email: "bob@example.com",
    bookingPermission: "none",
  },
];
