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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  const [departments, setDepartments] = useState(initialDepartments);
  const [newDepartment, setNewDepartment] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const handleAddDepartment = () => {
    if (newDepartment) {
      setDepartments([...departments, { name: newDepartment, roles: [] }]);
      setNewDepartment("");
    }
  };

  interface Department {
    name: string;
    roles: string[];
  }

  const handleAddRole = (departmentName: string, role: string) => {
    setDepartments(
      departments.map((dept: Department) =>
        dept.name === departmentName
          ? { ...dept, roles: [...dept.roles, role] }
          : dept
      )
    );
  };

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <EmployerHeader title="Organization Settings" />

      <Card>
        <CardHeader>
          <CardTitle>Organizational Hierarchy Management</CardTitle>
          <CardDescription>
            Manage departments and roles within your organization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Add New Department</h3>
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Department name"
                  value={newDepartment}
                  onChange={(e) => setNewDepartment(e.target.value)}
                />
                <Button onClick={handleAddDepartment}>Add Department</Button>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-medium">Manage Roles</h3>
              <div className="space-y-2">
                <Select onValueChange={setSelectedDepartment}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept.name} value={dept.name}>
                        {dept.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedDepartment && (
                  <div>
                    <h4 className="font-medium">
                      Roles in {selectedDepartment}
                    </h4>
                    <ul className="list-disc list-inside">
                      {departments
                        .find((dept) => dept.name === selectedDepartment)
                        ?.roles.map((role, index) => (
                          <li key={index}>{role}</li>
                        ))}
                    </ul>
                    <div className="flex items-center space-x-2 mt-2">
                      <Input placeholder="New role" id="new-role" />
                      <Button
                        onClick={() => {
                          const newRole = (
                            document.getElementById(
                              "new-role"
                            ) as HTMLInputElement
                          ).value;
                          if (newRole) {
                            handleAddRole(selectedDepartment, newRole);
                            (
                              document.getElementById(
                                "new-role"
                              ) as HTMLInputElement
                            ).value = "";
                          }
                        }}
                      >
                        Add Role
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>
            Manage general organization settings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="org-name">Organization Name</Label>
              <Input id="org-name" placeholder="Enter organization name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-email">Admin Email</Label>
              <Input
                id="admin-email"
                type="email"
                placeholder="Enter admin email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Select>
                <SelectTrigger id="timezone">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utc">UTC</SelectItem>
                  <SelectItem value="est">Eastern Time</SelectItem>
                  <SelectItem value="pst">Pacific Time</SelectItem>
                  {/* Add more timezone options as needed */}
                </SelectContent>
              </Select>
            </div>
            <Button>Save Settings</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

const initialDepartments = [
  { name: "Sales", roles: ["Sales Representative", "Sales Manager"] },
  { name: "Marketing", roles: ["Marketing Specialist", "Marketing Manager"] },
  { name: "IT", roles: ["Software Developer", "IT Manager"] },
];
